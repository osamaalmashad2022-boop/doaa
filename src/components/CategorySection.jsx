import React from 'react';
import DuaCard from './DuaCard';

export default function CategorySection({ category }) {
  return (
    <section id={category.id} style={{ paddingTop: '80px', marginTop: '-40px' }}>
      <div className="container">
        <h2 className="section-title">{category.title}</h2>
        <div className="duaa-grid">
          {category.items.map((item, index) => (
            <DuaCard key={index} text={item.text} />
          ))}
        </div>
      </div>
    </section>
  );
}
