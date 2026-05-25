import React, { useState } from 'react';
import { Copy, Check, Hash } from 'lucide-react';

export default function DuaCard({ text }) {
  const [copied, setCopied] = useState(false);
  const [count, setCount] = useState(0);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="duaa-card glass glass-hover">
      <p className="font-quran" dir="rtl">{text}</p>
      
      <div className="card-actions">
        <button 
          onClick={() => setCount(c => c + 1)}
          className="btn-icon"
          title="عداد (سبحة)"
          style={{ background: count > 0 ? 'var(--bg-secondary)' : 'transparent', borderRadius: '20px', padding: '0.25rem 0.75rem', gap: '0.5rem', width: 'auto' }}
        >
          <Hash size={18} />
          {count > 0 && <span style={{ fontWeight: 'bold' }}>{count}</span>}
        </button>

        <button 
          onClick={handleCopy}
          className="btn-icon"
          title="نسخ الدعاء"
        >
          {copied ? <Check size={18} className="text-emerald" /> : <Copy size={18} />}
        </button>
      </div>
    </div>
  );
}
