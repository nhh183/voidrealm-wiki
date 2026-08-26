'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import wiki from './alan-wiki-data.json';

type Item = (typeof wiki.items)[number];
type Section = 'database' | 'mechanics' | 'about';
type DatabaseView = 'gallery' | 'list';

function ItemImage({ item, large = false }: { item: Item; large?: boolean }) {
  return item.image ? (
    <img className={large ? 'item-image large' : 'item-image'} src={item.image} alt={`Ảnh ${item.title}`} loading={large ? 'eager' : 'lazy'} onError={(event) => { event.currentTarget.style.display = 'none'; }} />
  ) : <span className={large ? 'image-fallback large' : 'image-fallback'}>◈</span>;
}

function ItemCard({ item, view, onOpen }: { item: Item; view: DatabaseView; onOpen: (item: Item) => void }) {
  if (view === 'list') return (
    <button className="item-row" onClick={() => onOpen(item)}>
      <span className="row-icon"><ItemImage item={item} /></span>
      <span className="row-title"><strong>{item.title}</strong>{item.title !== item.originalTitle && <small>{item.originalTitle}</small>}</span>
      <span className="row-category">{item.category}</span>
      <code>{item.code || `wiki-${item.id}`}</code>
      <span className="row-arrow">›</span>
    </button>
  );

  return (
    <button className="item-card" onClick={() => onOpen(item)}>
      <div className="card-cover"><ItemImage item={item} /></div>
      <div className="card-body">
        <h3>{item.title}</h3>
        {item.title !== item.originalTitle && <p className="original-title">{item.originalTitle}</p>}
        <div className="property"><span className="property-dot" />{item.category}</div>
        <code>{item.code || `wiki-${item.id}`}</code>
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
          <button onClick={onClose}>‹ <span>Quay lại danh mục</span></button>
          <a href={wiki.source} target="_blank" rel="noreferrer">Nguồn ↗</a>
        </header>
        <div className="peek-content">
          <div className="page-icon"><ItemImage item={item} large /></div>
          <p className="detail-kicker">{item.category}</p>
          <h1 id="detail-title">{item.title}</h1>
          {item.title !== item.originalTitle && <p className="chinese-title">{item.originalTitle}</p>}
          <dl className="properties">
            <div><dt>Phân loại</dt><dd><span className="tag">{item.category}</span></dd></div>
            <div><dt>Mã prefab</dt><dd><code>{item.code || 'Không được ghi trên wiki gốc'}</code></dd></div>
            <div><dt>Nguồn dữ liệu</dt><dd>Alan Wiki · #{item.id}</dd></div>
          </dl>
          <div className="divider" />
          <section className="source-document">
            <h2>Nội dung wiki</h2>
            <div className="language-note"><span>文</span><p>Nội dung chi tiết được đồng bộ nguyên văn từ wiki tác giả; tên vật phẩm được ghép tiếng Việt theo prefab trong mod.</p></div>
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
  const [view, setView] = useState<DatabaseView>('gallery');
  const [selected, setSelected] = useState<Item | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
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
      if (category !== 'Tất cả' && item.category !== category) return false;
      if (!needle) return true;
      return `${item.title} ${item.originalTitle} ${item.code} ${item.category} ${item.summary}`.toLocaleLowerCase('vi').includes(needle);
    });
  }, [category, query]);

  function chooseSection(next: Section) { setSection(next); setSidebarOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  function chooseCategory(next: string) { setSection('database'); setCategory(next); setSidebarOpen(false); }
  function openKeyword(title: string) {
    const target = wiki.items.find((item) => item.originalTitle === title);
    if (target) setSelected(target); else { setSelected(null); setQuery(title); }
  }

  return (
    <div className="notion-app">
      <button className="mobile-menu" onClick={() => setSidebarOpen(true)} aria-label="Mở thanh điều hướng">☰</button>
      {sidebarOpen && <button className="sidebar-scrim" onClick={() => setSidebarOpen(false)} aria-label="Đóng thanh điều hướng" />}
      <aside className={sidebarOpen ? 'sidebar open' : 'sidebar'}>
        <div className="workspace">
          <div className="workspace-icon">VR</div><div><strong>Hư Không Dị Giới</strong><small>Wiki workspace</small></div>
          <button aria-label="Thu gọn" onClick={() => setSidebarOpen(false)}>«</button>
        </div>
        <nav className="primary-nav">
          <button className={section === 'database' ? 'active' : ''} onClick={() => chooseSection('database')}><span>▦</span>Danh mục vật phẩm</button>
          <button className={section === 'mechanics' ? 'active' : ''} onClick={() => chooseSection('mechanics')}><span>⚙</span>Cơ chế của mod</button>
          <button className={section === 'about' ? 'active' : ''} onClick={() => chooseSection('about')}><span>ⓘ</span>Nguồn & phạm vi</button>
        </nav>
        <div className="sidebar-label">DANH MỤC</div>
        <div className="category-nav">
          <button className={category === 'Tất cả' && section === 'database' ? 'active' : ''} onClick={() => chooseCategory('Tất cả')}><span>📚</span>Tất cả <small>{wiki.counts.items}</small></button>
          {wiki.categories.filter((item) => item.count > 0).map((item) => (
            <button key={item.id} className={category === item.name && section === 'database' ? 'active' : ''} onClick={() => chooseCategory(item.name)}><span>›</span>{item.name}<small>{item.count}</small></button>
          ))}
        </div>
        <footer className="sidebar-footer"><span className="sync-dot" />Đã đồng bộ Alan Wiki<small>{new Date(wiki.syncedAt).toLocaleDateString('vi-VN')}</small></footer>
      </aside>

      <main className="workspace-main">
        <header className="page-topbar">
          <div><span>Hư Không Dị Giới</span><b>/</b><strong>{section === 'database' ? category : section === 'mechanics' ? 'Cơ chế' : 'Nguồn dữ liệu'}</strong></div>
          <a href={wiki.source} target="_blank" rel="noreferrer">Mở wiki gốc ↗</a>
        </header>
        {section === 'database' && (
          <div className="page">
            <div className="page-cover"><div className="cover-grid" /></div>
            <div className="page-body">
              <div className="database-icon">📖</div>
              <h1>Thư viện Hư Không Dị Giới</h1>
              <p className="page-description">Cơ sở dữ liệu vật phẩm của mod Terraria, được đồng bộ từ wiki tác giả và ghép với tên, prefab cùng ảnh cục bộ.</p>
              <div className="callout"><span>💡</span><p><strong>{wiki.counts.items} mục · {wiki.counts.categories} phân loại.</strong> Tên tiếng Việt lấy từ chuỗi trong mod; phần nội dung chi tiết giữ nguyên bản gốc để tránh làm sai công thức và chỉ số.</p></div>
              <section className="database">
                <div className="database-tabs">
                  <button className={view === 'gallery' ? 'active' : ''} onClick={() => setView('gallery')}><span>▦</span>Thư viện</button>
                  <button className={view === 'list' ? 'active' : ''} onClick={() => setView('list')}><span>☷</span>Danh sách</button>
                </div>
                <div className="database-toolbar">
                  <label className="database-search"><span>⌕</span><input ref={searchRef} value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Tìm tên, mã prefab hoặc nội dung…" /><kbd>Ctrl K</kbd></label>
                  <select value={category} onChange={(event) => setCategory(event.target.value)} aria-label="Lọc danh mục"><option>Tất cả</option>{wiki.categories.filter((item) => item.count > 0).map((item) => <option key={item.id}>{item.name}</option>)}</select>
                  <span className="result-count">{filtered.length} mục</span>
                </div>
                {view === 'list' && <div className="list-head"><span>Tên</span><span>Phân loại</span><span>Mã prefab</span></div>}
                <div className={view === 'gallery' ? 'database-grid' : 'database-list'}>{filtered.map((item) => <ItemCard key={item.id} item={item} view={view} onOpen={setSelected} />)}</div>
                {!filtered.length && <div className="empty-state"><span>⌕</span><h2>Không tìm thấy trang phù hợp</h2><p>Thử tên tiếng Việt, tiếng Trung hoặc mã prefab.</p></div>}
              </section>
            </div>
          </div>
        )}
        {section === 'mechanics' && (
          <div className="page simple-page"><div className="page-body">
            <div className="database-icon">⚙️</div><h1>Cơ chế của mod</h1><p className="page-description">Bản đồ hệ thống được đối chiếu từ prefab, component và hook của bản mod cục bộ.</p>
            <div className="mechanics-list">{wiki.mechanics.map((mechanic, index) => <article key={mechanic.title}><span>{String(index + 1).padStart(2, '0')}</span><div><small>{mechanic.group}</small><h2>{mechanic.title}</h2><p>{mechanic.summary}</p><code>{mechanic.source}</code></div></article>)}</div>
          </div></div>
        )}
        {section === 'about' && (
          <div className="page simple-page"><div className="page-body about-content">
            <div className="database-icon">🔎</div><h1>Nguồn và phạm vi</h1><p className="page-description">Wiki này kết hợp dữ liệu công khai của tác giả với tài nguyên trong bản mod Workshop 2526778484.</p>
            <div className="about-table">
              <div><span>Nguồn nội dung</span><strong>Alan Wiki API</strong><a href={wiki.source} target="_blank" rel="noreferrer">{wiki.source}</a></div>
              <div><span>Bản mod</span><strong>{wiki.mod.name}</strong><code>Workshop {wiki.mod.id} · v{wiki.mod.version}</code></div>
              <div><span>Hồ sơ đồng bộ</span><strong>{wiki.counts.items} trang</strong><p>{wiki.counts.localizedTitles} trang ghép được tên tiếng Việt theo prefab.</p></div>
              <div><span>Cập nhật dữ liệu</span><strong>{new Date(wiki.syncedAt).toLocaleString('vi-VN')}</strong><p>Dữ liệu là ảnh chụp tại thời điểm đồng bộ, không tự thay đổi khi wiki gốc cập nhật.</p></div>
            </div>
            <div className="warning-block"><span>⚠️</span><div><strong>Giới hạn xác minh</strong><p>Nội dung từ wiki tác giả có thể khác phiên bản mã mod hiện tại. Khi có chênh lệch, mã cục bộ được dùng để kiểm tra lại cơ chế và tỉ lệ.</p></div></div>
          </div></div>
        )}
      </main>
      {selected && <DetailPanel item={selected} onClose={() => setSelected(null)} onKeyword={openKeyword} />}
    </div>
  );
}
