import React from 'react';
import { BookHeart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="hero fade-in-up">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
          <div style={{ 
            background: 'var(--bg-secondary)', 
            padding: '1.5rem', 
            borderRadius: '50%',
            color: 'var(--accent-gold)'
          }}>
            <BookHeart size={64} />
          </div>
        </div>
        <h1>الدعاء من القرآن والسنة</h1>
        <p>
          مجموعة مختارة وموثقة من الأدعية النبوية والقرآنية، وأسماء الله الحسنى، 
          وأوقات الإجابة لتكون لك ورداً وزاداً في حياتك.
        </p>
        <div style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <Link to="/duaa" style={{ textDecoration: 'none' }}>
            <button className="btn-action glass" style={{ padding: '0.75rem 3rem', fontSize: '1.2rem', borderColor: 'var(--accent-gold)' }}>
              الدعاء من القرآن والسنة
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
