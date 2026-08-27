'use client';
import { useEffect, useState } from 'react';
import wiki from './wiki-data.json';

export type MechanicItem = (typeof wiki.items)[number];

function MechanicImage({ item, large = false }: { item: MechanicItem; large?: boolean }) {
  const [failed, setFailed] = useState(false);
  if (!item.image || failed) return <span className={large ? 'image-fallback large' : 'image-fallback'}>◈</span>;
  return <img className={large ? 'item-image large' : 'item-image'} src={item.image} alt={`Ảnh ${item.title}`} loading={large ? 'eager' : 'lazy'} onError={() => setFailed(true)} />;
}

export function MechanicCard({ item, onOpen }: { item: MechanicItem; onOpen: (item: MechanicItem) => void }) {
  return <button className="item-card mechanic-card" onClick={() => onOpen(item)}><div className="card-cover"><MechanicImage item={item} /></div><div className="card-body"><h3>{item.title}</h3><p className="summary">{item.summary || 'Chưa có mô tả.'}</p></div></button>;
}

export function MechanicDetailPanel({ item, onClose, onKeyword }: { item: MechanicItem; onClose: () => void; onKeyword: (title: string) => void }) {
  useEffect(() => { const close = (event: KeyboardEvent) => event.key === 'Escape' && onClose(); window.addEventListener('keydown', close); return () => window.removeEventListener('keydown', close); }, [onClose]);
  return <div className="peek-backdrop" onMouseDown={onClose}><article className="peek" role="dialog" aria-modal="true" aria-labelledby="mechanic-detail-title" onMouseDown={(event) => event.stopPropagation()}><header className="peek-toolbar"><button onClick={onClose}>‹ <span>Quay lại cơ chế</span></button></header><div className="peek-content"><div className="page-icon"><MechanicImage item={item} large /></div><p className="detail-kicker">Cơ chế</p><h1 id="mechanic-detail-title">{item.title}</h1><div className="divider" /><section className="source-document"><h2>Thông tin</h2><div className="rich-text" dangerouslySetInnerHTML={{ __html: item.html }} /></section>{item.keywords.length > 0 && <section className="relations"><h2>Vật phẩm liên quan</h2><div>{item.keywords.map((keyword) => <button key={`${keyword.originalTitle}-${keyword.title}`} onClick={() => onKeyword(keyword.originalTitle)}>{keyword.image ? <img src={keyword.image} alt="" loading="lazy" /> : <span>◈</span>}<strong>{keyword.title}</strong></button>)}</div></section>}</div></article></div>;
}
