'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import wiki from './wiki-data.json';
import { MechanicCard, MechanicDetailPanel, type MechanicItem } from './mechanics';

type Item = (typeof wiki.items)[number];
type Section = 'database' | 'mechanics';

function ItemImage({ item, large = false }: { item: Item; large?: boolean }) {
  const [failed, setFailed] = useState(false);
  if (!item.image || failed) return <span className={large ? 'image-fallback large' : 'image-fallback'}>◈</span>;
  return <img className={large ? 'item-image large' : 'item-image'} src={item.image} alt={`Ảnh ${item.title}`} loading={large ? 'eager' : 'lazy'} onError={() => setFailed(true)} />;
}

function ItemCard({ item, onOpen }: { item: Item; onOpen: (item: Item) => void }) {
  return (
    <button className="item-card" onClick={() => onOpen(item)}>
      <div className="card-cover"><ItemImage item={item} /></div>
      <div className="card-body">
        <h3>{item.title}</h3>
        {item.category !== 'Thay đổi bản gốc' && item.title !== item.originalTitle && <p className="original-title">{item.originalTitle}</p>}
        {item.category !== 'Thay đổi bản gốc' && <>
          <div className="property"><span className="property-dot" />{item.category}</div>
          <code>{item.code || `Không có`}</code>
        </>}
        <p className="summary">{item.summary || 'Chưa có mô tả.'}</p>
      </div>
    </button>
  );
}

function DetailPanel({ item, onClose, onKeyword }: { item: Item; onClose: () => void; onKeyword: (title: string) => void }) {
  useEffect(() => {
    const close = (event: KeyboardEvent) => event.key === 'Escape' && onClose();
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [onClose]);

  return (
    <div className="peek-backdrop" onMouseDown={onClose}>
      <article className="peek" role="dialog" aria-modal="true" aria-labelledby="detail-title" onMouseDown={(event) => event.stopPropagation()}>
        <header className="peek-toolbar">
          <button onClick={onClose}>‹ <span>Quay lại danh sách</span></button>
        </header>
        <div className="peek-content">
          <div className="page-icon"><ItemImage item={item} large /></div>
          <p className="detail-kicker">{item.category}</p>
          <h1 id="detail-title">{item.title}</h1>
          {item.category !== 'Thay đổi bản gốc' && item.title !== item.originalTitle && <p className="chinese-title">{item.originalTitle}</p>}
          {item.category !== 'Thay đổi bản gốc' && <dl className="properties">
            <div><dt>Phân loại</dt><dd><span className="tag">{item.category}</span></dd></div>
            <div><dt>Mã prefab</dt><dd><code>{item.code || 'Không có'}</code></dd></div>
          </dl>}
          <div className="divider" />
          <section className="source-document">
            <h2>Thông tin</h2>
            <div className="rich-text" dangerouslySetInnerHTML={{ __html: item.html }} />
          </section>
          {item.keywords.length > 0 && (
            <section className="relations">
              <h2>Vật phẩm liên quan</h2>
              <div>{item.keywords.map((keyword) => (
                <button key={`${keyword.originalTitle}-${keyword.title}`} onClick={() => onKeyword(keyword.originalTitle)}>
                  {keyword.image ? <img src={keyword.image} alt="" loading="lazy" /> : <span>◈</span>}<strong>{keyword.title}</strong>
                </button>
              ))}</div>
            </section>
          )}
        </div>
      </article>
    </div>
  );
}

export default function Home() {
  const [section, setSection] = useState<Section>('database');
  const [category, setCategory] = useState('Tất cả');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<Item | null>(null);
  const [selectedMechanic, setSelectedMechanic] = useState<MechanicItem | null>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const shortcut = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault(); setSection('database'); searchRef.current?.focus();
      }
    };
    window.addEventListener('keydown', shortcut);
    return () => window.removeEventListener('keydown', shortcut);
  }, []);

  const filtered = useMemo(() => {
    const needle = query.trim().toLocaleLowerCase('vi');
    return wiki.items.filter((item) => {
      if (item.category === 'Thay đổi bản gốc') return false;
      if (category !== 'Tất cả' && item.category !== category) return false;
      if (!needle) return true;
      return `${item.title} ${item.originalTitle} ${item.code} ${item.category} ${item.summary}`.toLocaleLowerCase('vi').includes(needle);
    });
  }, [category, query]);
  const originalChanges = useMemo(() => wiki.mechanics
    .filter((mechanic) => mechanic.itemId !== undefined)
    .map((mechanic) => mechanic.item ?? wiki.items.find((item) => item.id === mechanic.itemId))
    .filter((item): item is Item => item !== undefined), []);

  function chooseSection(next: Section) { setSection(next); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  function openKeyword(title: string) {
    const target = wiki.items.find((item) => item.originalTitle === title)
      ?? wiki.mechanics.find((mechanic) => mechanic.item?.originalTitle === title)?.item;
    if (target) setSelected(target); else { setSelected(null); setQuery(title); }
  }

  return (
    <div className="notion-app">
      <main className="workspace-main">
        <header className="page-topbar">
          <div className="topbar-brand"><span>Hư Không Dị Giới</span><b>/</b><strong>{section === 'database' ? category : 'Cơ chế'}</strong></div>
          <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=2526778484" target="_blank" rel="noreferrer">Mở link mod ↗</a>
        </header>
        <div className="page">
          <div className="page-cover" />
          <div className="page-body">
            <div className="database-icon"><img src="/modicon.png" alt="Biểu tượng Hư Không Dị Giới" /></div>
            <h1>Hư Không Dị Giới</h1>
            <p className="page-description mod-intro">Hư Không Dị Giới (Void Realm) đưa thế giới Terraria vào Don&apos;t Starve Together với một kho nội dung lớn gồm vũ khí, trang bị, phụ kiện, sinh vật và boss. Mod còn mở rộng lối chơi bằng nhân vật riêng, hệ thống triệu hồi, rèn lại trang bị, Hex và chế độ Hành lang Hư không.</p>
            <section className="database">
              <div className="database-tabs">
                <button className={section === 'database' ? 'active' : ''} onClick={() => chooseSection('database')}><span>▦</span>Danh sách</button>
                <button className={section === 'mechanics' ? 'active' : ''} onClick={() => chooseSection('mechanics')}><span>⚙</span>Cơ chế</button>
              </div>
              {section === 'database' && <>
                <div className="database-toolbar">
                  <label className="database-search"><span>⌕</span><input ref={searchRef} value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Tìm tên, mã prefab hoặc nội dung…" /><kbd>Ctrl K</kbd></label>
                  <select value={category} onChange={(event) => setCategory(event.target.value)} aria-label="Lọc danh mục"><option>Tất cả</option>{wiki.categories.filter((item) => item.count > 0 && item.name !== 'Thay đổi bản gốc').map((item) => <option key={item.id}>{item.name}</option>)}</select>
                  <span className="result-count">{filtered.length} mục</span>
                </div>
                <div className="database-grid">{filtered.map((item) => <ItemCard key={item.id} item={item} onOpen={setSelected} />)}</div>
                {!filtered.length && <div className="empty-state"><span>⌕</span><h2>Không tìm thấy trang phù hợp</h2><p>Thử tên tiếng Việt, tiếng Trung hoặc mã prefab.</p></div>}
              </>}
              {section === 'mechanics' && <div className="mechanics-list">
                {originalChanges.length > 0 && <section className="mechanics-items"><div className="database-grid">{originalChanges.map((item) => <MechanicCard key={item.id} item={item} onOpen={setSelectedMechanic} />)}</div></section>}
              </div>}
            </section>
          </div>
        </div>
      </main>
      {selected && <DetailPanel item={selected} onClose={() => setSelected(null)} onKeyword={openKeyword} />}
      {selectedMechanic && <MechanicDetailPanel item={selectedMechanic} onClose={() => setSelectedMechanic(null)} onKeyword={(title) => { const target = wiki.mechanics.find((mechanic) => mechanic.item?.originalTitle === title)?.item; if (target) setSelectedMechanic(target); else openKeyword(title); }} />}
    </div>
  );
}
