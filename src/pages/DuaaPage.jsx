import React, { useEffect } from 'react';
import CategorySection from '../components/CategorySection';
import data from '../data/content.json';
import { BookHeart } from 'lucide-react';

export default function DuaaPage() {
  // Filter only Quran and Sunnah
  const duaaCategories = data.categories.filter(c => c.id === 'quran' || c.id === 'sunnah');

  // Scroll to top when loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <div style={{ 
            display: 'inline-block',
            background: 'var(--bg-secondary)', 
            padding: '1.5rem', 
            borderRadius: '50%',
            color: 'var(--accent-emerald)',
            marginBottom: '1rem'
          }}>
            <BookHeart size={48} />
        </div>
        <h1 className="section-title" style={{ margin: '0 auto 1rem auto' }}>الدعاء من القرآن والسنة</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>جامع الأدعية المأثورة عن النبي ﷺ والقرآن الكريم</p>
      </div>

      <main>
        {duaaCategories.map((category) => (
          <CategorySection key={category.id} category={category} />
        ))}
      </main>
    </div>
  );
}
