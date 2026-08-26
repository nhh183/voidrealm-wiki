import fs from 'node:fs';
import path from 'node:path';

const modRoot = 'D:/dst_mods/2526778484';
const wikiRoot = 'D:/dst_mods/2526778484_wiki';
const prefabRoot = path.join(modRoot, 'scripts/prefabs');
const imageRoot = path.join(modRoot, 'images/inventoryimages');

function walk(dir, suffix = '') {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full, suffix));
    else if (!suffix || entry.name.endsWith(suffix)) out.push(full);
  }
  return out;
}

function text(file) {
  try { return fs.readFileSync(file, 'utf8').replace(/^\uFEFF/, ''); }
  catch { return ''; }
}

function clean(value) {
  return String(value || '')
    .replace(/\\n/g, ' ')
    .replace(/\\r/g, ' ')
    .replace(/\\"/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
}

function humanize(id) {
  return id.split('_').map((part) => part ? part[0].toUpperCase() + part.slice(1) : '').join(' ');
}

function captureAssignments(lua, prefix) {
  const map = new Map();
  const re = new RegExp(`STRINGS\\.${prefix}\\.([A-Z0-9_]+)\\s*=\\s*(?:"((?:\\\\.|[^"\\\\])*)"|\\[\\[([\\s\\S]*?)\\]\\])`, 'g');
  for (const match of lua.matchAll(re)) {
    if (!map.has(match[1].toLowerCase())) map.set(match[1].toLowerCase(), clean(match[2] ?? match[3]));
  }
  return map;
}

function balancedCalls(lua, callName) {
  const calls = [];
  let cursor = 0;
  while ((cursor = lua.indexOf(`${callName}(`, cursor)) !== -1) {
    const start = cursor;
    let i = cursor + callName.length;
    let depth = 0, quote = null, long = false;
    for (; i < lua.length; i++) {
      const c = lua[i], n = lua[i + 1];
      if (long) { if (c === ']' && n === ']') { long = false; i++; } continue; }
      if (quote) { if (c === '\\') { i++; continue; } if (c === quote) quote = null; continue; }
      if ((c === '[' && n === '[')) { long = true; i++; continue; }
      if (c === '"' || c === "'") { quote = c; continue; }
      if (c === '(') depth++;
      if (c === ')' && --depth === 0) { calls.push(lua.slice(start, i + 1)); i++; break; }
    }
    cursor = Math.max(i, start + callName.length + 1);
  }
  return calls;
}

const viLua = text(path.join(modRoot, 'scripts/modinit/vi_prefab_strings.lua'));
const viOnly = viLua.slice(0, viLua.search(/^else\s*$/m) > 0 ? viLua.search(/^else\s*$/m) : viLua.length);
const names = captureAssignments(viOnly, 'NAMES');
const descriptions = captureAssignments(viOnly, 'RECIPE_DESC');

const luaFiles = walk(modRoot, '.lua');
const prefabFiles = walk(prefabRoot, '.lua');
const prefabIndex = new Map();
for (const file of prefabFiles) {
  const lua = text(file);
  const base = path.basename(file, '.lua').toLowerCase();
  if (!prefabIndex.has(base)) prefabIndex.set(base, file);
  for (const match of lua.matchAll(/Prefab\(\s*["']([a-zA-Z0-9_]+)["']/g)) {
    const id = match[1].toLowerCase();
    if (!prefabIndex.has(id)) prefabIndex.set(id, file);
  }
  for (const match of lua.matchAll(/inventoryitem\.imagename\s*=\s*["']([a-zA-Z0-9_]+)["']/g)) {
    const id = match[1].toLowerCase();
    if (!prefabIndex.has(id)) prefabIndex.set(id, file);
  }
  for (const match of lua.matchAll(/STRINGS\.NAMES\[string\.upper\(["']([a-zA-Z0-9_]+)["']\)\]\s*=\s*["']([^"']+)["']/g)) {
    const id = match[1].toLowerCase();
    if (!names.has(id) && /[À-ỹ]/.test(match[2])) names.set(id, clean(match[2]));
  }
}

const nameOverrides = {
  wujinzhihuirq: 'Vô Tận Trí Tuệ',
  xingyan: 'Tinh Diễn',
  xyld: 'Tinh Diễn · Đại Liêm',
  xyjj: 'Tinh Diễn · Trọng Kiếm',
  xygj: 'Tinh Diễn · Cung',
  xyzs: 'Tinh Diễn · Chú Thư',
};
for (const [id, value] of Object.entries(nameOverrides)) names.set(id, value);

const recipes = new Map();
for (const file of luaFiles) {
  const lua = text(file);
  for (const callName of ['AddRecipe2', 'AddRecipe']) {
    for (const call of balancedCalls(lua, callName)) {
      const idMatch = call.match(/^[^(]+\(\s*["']([a-zA-Z0-9_]+)["']/);
      if (!idMatch) continue;
      const ingredients = [];
      for (const m of call.matchAll(/Ingredient\(\s*["']([a-zA-Z0-9_]+)["']\s*,\s*([^,)]+)/g)) {
        ingredients.push({ id: m[1].toLowerCase(), amount: clean(m[2]) });
      }
      const tech = call.match(/TECH\.([A-Z0-9_]+)/)?.[1] || '';
      recipes.set(idMatch[1].toLowerCase(), {
        ingredients,
        tech,
        source: path.relative(modRoot, file).replaceAll('\\', '/'),
      });
    }
  }
}

function captures(lua, regex, formatter = (x) => x) {
  const values = [];
  for (const m of lua.matchAll(regex)) {
    const value = clean(formatter(m)).slice(0, 120);
    if (value && !values.includes(value)) values.push(value);
  }
  return values;
}

function classify(lua, id, desc) {
  const hay = `${id} ${desc}`.toLowerCase();
  if (/boss|bossrush/.test(hay) || (lua.includes('AddComponent("health")') && lua.includes('AddComponent("combat")') && !lua.includes('AddComponent("inventoryitem")'))) return 'Sinh vật & Boss';
  if (lua.includes('AddComponent("weapon")') || /(jian|sword|bow|staff|fazhang|qiang|dao|sickle|gun)/.test(id)) return 'Vũ khí';
  if (lua.includes('AddComponent("armor")') || /(armor|helmet|toukui|hujia|jia$|mask)/.test(id)) return 'Giáp';
  if (lua.includes('AddComponent("edible")') || /(food|yaoshui|potion|juice|rou|tang$)/.test(id)) return 'Thức ăn & Thuốc';
  if (lua.includes('AddComponent("container")')) return 'Kho chứa';
  if (lua.includes('AddComponent("tool")') || lua.includes('AddComponent("finiteuses")')) return 'Công cụ';
  if (lua.includes('AddComponent("equippable")')) return 'Phụ kiện';
  if (lua.includes('AddComponent("growable")') || lua.includes('AddComponent("pickable")')) return 'Cây trồng & Tài nguyên';
  if (lua.includes('AddComponent("workable")') || lua.includes('MakePlacer') || /(station|workbench|furnace|altar|tower|jingta)/.test(id)) return 'Công trình';
  if (recipes.has(id) || lua.includes('AddComponent("inventoryitem")')) return 'Nguyên liệu & Vật phẩm';
  return 'Biểu tượng & Khác';
}

function extractFacts(lua) {
  const facts = [];
  for (const v of captures(lua, /components\.weapon:SetDamage\(([^\n)]+)\)/g, (m) => `Sát thương: ${m[1]}`)) facts.push(v);
  for (const v of captures(lua, /components\.weapon:SetRange\(([^\n)]+)\)/g, (m) => `Tầm đánh: ${m[1]}`)) facts.push(v);
  for (const v of captures(lua, /components\.armor:SetAbsorption\(([^\n)]+)\)/g, (m) => `Giảm sát thương: ${m[1]}`)) facts.push(v);
  for (const v of captures(lua, /components\.armor:InitCondition\(([^\n)]+)\)/g, (m) => `Độ bền giáp: ${m[1]}`)) facts.push(v);
  for (const v of captures(lua, /components\.finiteuses:SetMaxUses\(([^\n)]+)\)/g, (m) => `Số lần dùng: ${m[1]}`)) facts.push(v);
  for (const v of captures(lua, /equippable\.walkspeedmult\s*=\s*([^\n;]+)/g, (m) => `Tốc độ di chuyển: ×${m[1]}`)) facts.push(v);
  for (const v of captures(lua, /maxpets\s*=\s*[^\n]+?([+-])\s*(\d+)/g, (m) => `Ô triệu hồi: ${m[1]}${m[2]}`)) facts.push(v);
  const spells = captures(lua, /label\s*=\s*["']([^"']+)["']/g, (m) => m[1]);
  if (spells.length) facts.push(`Kỹ năng: ${spells.slice(0, 8).join(', ')}`);
  return facts.slice(0, 10);
}

const imageIds = fs.readdirSync(imageRoot)
  .filter((name) => name.toLowerCase().endsWith('.tex'))
  .map((name) => path.basename(name, '.tex').toLowerCase())
  .sort();

const items = imageIds.map((id) => {
  const sourceFile = prefabIndex.get(id) || null;
  const lua = sourceFile ? text(sourceFile) : '';
  const description = descriptions.get(id) || '';
  const recipe = recipes.get(id) || null;
  const components = [...lua.matchAll(/AddComponent\(["']([a-zA-Z0-9_]+)["']\)/g)].map((m) => m[1]);
  return {
    id,
    name: names.get(id) || humanize(id),
    description: description || 'Chưa có mô tả tiếng Việt trong bảng chuỗi của mod.',
    category: classify(lua, id, description),
    image: `/items/${id}.png`,
    source: sourceFile ? path.relative(modRoot, sourceFile).replaceAll('\\', '/') : '',
    hasSource: Boolean(sourceFile),
    components: [...new Set(components)].slice(0, 16),
    facts: extractFacts(lua),
    recipe,
  };
});

const mechanics = [
  { title:'Sứ giả Yog‑Sothoth và Điểm Tri Thức', group:'Nhân vật', summary:'Nhân vật 50 máu, 100 đói, 300 tinh thần; tốc độ 115%. Tri Thức nhận từ học công thức và đọc sách, tăng sát thương, thu hoạch, hồi ma lực và sức mạnh vũ khí Tinh Diễn.', source:'scripts/prefabs/ygsts.lua' },
  { title:'Tinh Diễn — bốn hình thái', group:'Trang bị độc quyền', summary:'Vũ khí khởi đầu chuyển một chiều thành Đại Liêm, Trọng Kiếm, Cung hoặc Chú Thư. Mỗi dạng có bộ chỉ số, kỹ năng và cách vận hành riêng.', source:'main/tr_magic_weapon_actions.lua' },
  { title:'Vô Tận Trí Tuệ', group:'Trang bị độc quyền', summary:'Kho chứa đeo cổ hấp thụ vật liệu để tạo bản vẽ, hồi ma lực theo Tri Thức, tăng sản lượng hái và có thể hồi sinh chủ nhân từ dạng hồn ma.', source:'scripts/prefabs/wujinzhihuirq.lua' },
  { title:'Ma lực và trạng thái Quán Chú', group:'Chiến đấu', summary:'Người chơi có thanh ma lực riêng. Chú Thư dùng ma lực cho triệu hồi, hồi sinh, thúc lớn cây, lá chắn và đi trên nước; một số phép tạo hoặc tiêu thụ Quán Chú để tăng hiệu quả.', source:'scripts/components/tr_magic.lua' },
  { title:'Triệu hồi sư', group:'Chiến đấu', summary:'Mỗi người chơi có giới hạn ô triệu hồi. Vũ khí, giáp và phụ kiện có thể tăng ô hoặc hệ số sát thương; Đại Liêm tạo phân thân và dùng linh hồn để cường hóa chúng.', source:'scripts/components/tr_summoner.lua' },
  { title:'Rèn lại trang bị', group:'Chế tạo', summary:'Hệ thống rèn lại cho phép vũ khí và phụ kiện nhận nhiều dòng thuộc tính. Phạm vi vật phẩm, số dòng tối đa và thuộc tính đặc biệt được điều chỉnh trong cấu hình mod.', source:'main/tr_combat_enchantment_hooks.lua' },
  { title:'Phụ kiện Terraria', group:'Trang bị', summary:'Mod bổ sung hệ phụ kiện với ô chứa, hiệu ứng cộng dồn và nhiều chỉ số như tốc độ, hồi phục, kháng sát thương, triệu hồi và khả năng di chuyển đặc biệt.', source:'main/tr_accessory_container_actions.lua' },
  { title:'Luyện kim và bàn chế tạo', group:'Chế tạo', summary:'Chuỗi tài nguyên gồm quặng, thỏi, lò luyện, bàn nghiên cứu và các cấp công nghệ. Nhiều vũ khí Terraria yêu cầu nguyên liệu hoặc trạm chuyên biệt.', source:'main/tr_crafting_setup.lua' },
  { title:'Thuốc chiến đấu', group:'Sinh tồn', summary:'Các thuốc cung cấp hiệu ứng có thời hạn: hồi máu, hồi ma lực, tăng sát thương, tốc độ, khai khoáng, câu cá, kháng lửa, đi trên nước và nhiều trạng thái chiến đấu khác.', source:'scripts/modinit/vi_prefab_strings.lua' },
  { title:'Tiền thưởng và bảng truy nã', group:'Thế giới', summary:'Bảng tiền thưởng tạo nhiệm vụ săn mục tiêu, theo dõi tiến độ và trao phần thưởng. Dữ liệu mục tiêu và phần thưởng được tách thành hệ thống riêng.', source:'scripts/tr_bounty_defs.lua' },
  { title:'Hành lang Hư Không', group:'Thử thách', summary:'Chế độ hành lang gồm sảnh chờ, lựa chọn nhân vật, hợp đồng, mục tiêu, affix, cửa hàng và vũ khí riêng; tiến trình được đồng bộ qua UI và sự kiện thế giới.', source:'main/tr_void_corridor_system.lua' },
  { title:'Hệ Hex', group:'Thử thách', summary:'Hex áp dụng các biến thể luật chơi, hiệu ứng người chơi và mở rộng riêng. Lịch sử, lựa chọn và thông báo Hex có giao diện chuyên dụng.', source:'main/tr_hex_system.lua' },
  { title:'Boss và tiến trình thế giới', group:'Thế giới', summary:'Mod thêm nhiều boss và sinh vật lấy cảm hứng từ Terraria cùng cơ chế sinh theo thế giới, đấu trường, đền thờ, sa mạc, biển và các sự kiện đặc biệt.', source:'main/tr_world_boss_spawns.lua' },
  { title:'Du hành và bản đồ phân thân', group:'Di chuyển', summary:'Phân thân Đại Liêm có biểu tượng toàn bản đồ. Người chơi có thể cố định phân thân và đổi vị trí với nó; một số phép khác cấp đi trên nước hoặc dịch chuyển nhóm.', source:'main/ygsts_maptravel.lua' },
  { title:'Skin và quyền sở hữu', group:'Giao diện', summary:'Nhân vật, vũ khí và sinh vật có nhiều skin; mod có API đăng ký, dữ liệu UI, quà skin và kiểm tra quyền sở hữu riêng.', source:'main/tr_skins_api.lua' },
];

const categories = [...new Set(items.map((item) => item.category))].sort();
const data = {
  generatedAt: new Date().toISOString(),
  mod: { id:'2526778484', name:'Hư Không Dị Giới (Terraria) / Void Realm', version:'2.2.4' },
  counts: { items:items.length, sourced:items.filter((i) => i.hasSource).length, recipes:items.filter((i) => i.recipe).length, mechanics:mechanics.length },
  categories,
  mechanics,
  items,
};

fs.writeFileSync(path.join(wikiRoot, 'app/wiki-data.json'), JSON.stringify(data, null, 2));

const md = [
  `# ${data.mod.name}`,
  '',
  `- Workshop: ${data.mod.id}`,
  `- Phiên bản: ${data.mod.version}`,
  `- Ảnh inventory: ${data.counts.items}`,
  `- Mục ghép được prefab nguồn: ${data.counts.sourced}`,
  '',
  '> Ghi chú: đây là kiểm tra tĩnh từ source. Bảng `scripts/tr_recipes.lua` là dữ liệu nhị phân/đã mã hóa nên các công thức không đọc được sẽ được ghi rõ, không suy đoán.',
  '',
  '## Các cơ chế chính',
  '',
  ...mechanics.flatMap((m) => [`### ${m.title}`, '', m.summary, '', `Nguồn: \`${m.source}\``, '']),
  '## Danh mục toàn bộ vật phẩm và biểu tượng',
  '',
  '| Hình | Tên | Prefab / ID | Loại | Mô tả | Nguồn |',
  '|---|---|---|---|---|---|',
  ...items.map((item) => {
    const desc = item.description.replaceAll('|', '\\|');
    const source = item.source ? `\`${item.source}\`` : 'Chưa ghép được prefab';
    return `| <img src="./public/items/${item.id}.png" width="64" height="64"> | ${item.name.replaceAll('|', '\\|')} | \`${item.id}\` | ${item.category} | ${desc} | ${source} |`;
  }),
  '',
].join('\n');
fs.writeFileSync(path.join(wikiRoot, 'WIKI.md'), md);
console.log(JSON.stringify(data.counts));
