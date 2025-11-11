import React from "react";

export default function Modal({ open, title, children, onClose, actions }) {
  if (!open) return null;
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-head">
          <h3>{title}</h3>
          <button className="x" onClick={onClose}>✕</button>
        </div>
        <div className="modal-body">{children}</div>
        {actions && <div className="modal-actions">{actions}</div>}
      </div>

      <style>{`
        .modal-backdrop { position:fixed; inset:0; background:rgba(15,23,42,.45); display:flex; align-items:center; justify-content:center; padding:16px; z-index:50;}
        .modal { width:min(640px,95vw); background:#fff; border-radius:14px; border:1px solid #e2e8f0; overflow:hidden; }
        .modal-head { display:flex; justify-content:space-between; align-items:center; padding:12px 16px; border-bottom:1px solid #e2e8f0; }
        .x { background:#f1f5f9; border:1px solid #e2e8f0; border-radius:8px; padding:6px 10px; cursor:pointer; }
        .modal-body { padding:16px; max-height:70vh; overflow:auto; }
        .modal-actions { display:flex; justify-content:flex-end; gap:10px; padding:12px 16px; border-top:1px solid #e2e8f0; }
      `}</style>
    </div>
  );
}
