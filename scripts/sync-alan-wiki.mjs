import fs from 'node:fs';
import path from 'node:path';

const root = 'D:/dst_mods/2526778484_wiki';
const sourceFile = path.join(root, 'app/wiki-data.json');
const outputFile = path.join(root, 'app/alan-wiki-data.json');
const viStringsFile = 'D:/dst_mods/2526778484/scripts/modinit/vi_prefab_strings.lua';
const api = 'https://wiki.alan.plus/api';
const origin = 'https://wiki.alan.plus/';

const categoryNames = {
  '武器篇': 'Vũ khí',
  '消耗品篇': 'Vật phẩm tiêu hao',
  '材料篇': 'Nguyên liệu',
  '料理篇': 'Món ăn',
  '原版修改篇': 'Thay đổi bản gốc',
  '建筑篇': 'Công trình',
  '饰品篇': 'Phụ kiện',
  '防具篇': 'Giáp & trang bị',
  '其他': 'Khác',
  '药水篇': 'Thuốc',
  '召唤物篇': 'Triệu hồi',
  '生物篇': 'Sinh vật',
  'boss篇': 'Boss',
  '种植篇': 'Trồng trọt',
  '工具篇': 'Công cụ',
  '渔获篇': 'Câu cá',
  '人物篇': 'Nhân vật',
};

function absoluteUrl(value) {
  if (!value) return '';
  if (/^https?:\/\//i.test(value)) return value;
  return new URL(value.replace(/^\.\//, ''), origin).href;
}

function sanitizeHtml(value = '') {
  return value
    .replace(/<(script|style|iframe|object|embed|form)[^>]*>[\s\S]*?<\/\1>/gi, '')
    .replace(/<(script|style|iframe|object|embed|form)[^>]*\/?\s*>/gi, '')
    .replace(/\s+on[a-z]+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, '')
    .replace(/\s+contenteditable\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, '')
    .replace(/(href|src)\s*=\s*(["'])\s*javascript:[\s\S]*?\2/gi, '$1="#"')
    .replace(/src=(['"])(?!https?:|data:|\/)([^'"]+)\1/gi, (_m, q, src) => `src=${q}${absoluteUrl(src)}${q}`);
}

function plainText(html = '') {
  return html
    .replace(/<br\s*\/?\s*>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

async function get(pathname, params) {
  const url = new URL(`${api}${pathname}`);
  for (const [key, value] of Object.entries(params)) url.searchParams.set(key, String(value));
  const response = await fetch(url, { headers: { accept: 'application/json' } });
  if (!response.ok) throw new Error(`${response.status} ${url}`);
  const payload = await response.json();
  if (!payload.success) throw new Error(payload.msg || `API error: ${url}`);
  return payload.data;
}

const local = JSON.parse(fs.readFileSync(sourceFile, 'utf8'));
const localItems = new Map(local.items.map((item) => [item.id.toLowerCase(), item]));
const aliasNames = new Map();
const viStrings = fs.readFileSync(viStringsFile, 'utf8');
for (const match of viStrings.matchAll(/^\s*([A-Z0-9_]+)\s*=\s*\{\s*zh\s*=\s*"([^"]+)"/gm)) {
  aliasNames.set(match[1].toLowerCase(), match[2]);
}
const localNameByChinese = new Map();

const [nav, records, users] = await Promise.all([
  get('/navlist', { limit: 999, page: 1, type: 'tr' }),
  get('/modlist/search', { limit: 9999, page: 1, type: 'tr', mode: '', keyword: '' }),
  get('/users', { limit: 999, page: 1 }),
]);

for (const record of records.data) {
  const localItem = record.code ? localItems.get(record.code.toLowerCase()) : null;
  if (localItem || aliasNames.has(record.code?.toLowerCase())) {
    localNameByChinese.set(record.title, aliasNames.get(record.code?.toLowerCase()) || localItem.name);
  }
}

const items = records.data.map((record) => {
  const code = String(record.code || '').trim().toLowerCase();
  const localItem = code ? localItems.get(code) : null;
  const localImage = localItem && fs.existsSync(path.join(root, 'public', localItem.image.replace(/^\//, '')))
    ? localItem.image
    : '';
  const html = sanitizeHtml(record.main || '');
  return {
    id: record.id,
    code,
    title: aliasNames.get(code) || localItem?.name || record.title,
    originalTitle: record.title,
    category: categoryNames[record.mode] || record.mode || 'Chưa phân loại',
    originalCategory: record.mode || '',
    image: localImage || absoluteUrl(record.img),
    html,
    summary: plainText(html).slice(0, 240),
    updatedAt: record.created_at,
    keywords: (record.keywords || []).map((keyword) => ({
      title: localNameByChinese.get(keyword.title) || keyword.title,
      originalTitle: keyword.title,
      image: absoluteUrl(keyword.img),
    })),
  };
});

const categories = nav.data.map((entry) => ({
  id: entry.id,
  originalName: entry.name,
  name: categoryNames[entry.name] || entry.name,
  count: items.filter((item) => item.originalCategory === entry.name).length,
}));

const owner = users.data.find((user) => user.type === 'tr');
const data = {
  syncedAt: new Date().toISOString(),
  source: 'https://wiki.alan.plus/?type=tr',
  mod: {
    id: '2526778484',
    name: 'Hư Không Dị Giới (Terraria)',
    originalName: owner?.modName || '虚空异界（泰拉）',
    image: absoluteUrl(owner?.img),
    version: local.mod.version,
  },
  counts: {
    items: items.length,
    categories: categories.length,
    localizedTitles: items.filter((item) => item.title !== item.originalTitle).length,
  },
  categories,
  mechanics: local.mechanics,
  items,
};

fs.writeFileSync(outputFile, JSON.stringify(data, null, 2));
console.log(JSON.stringify(data.counts));
