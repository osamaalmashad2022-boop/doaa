import React from 'react';
import Hero from '../components/Hero';
import CategorySection from '../components/CategorySection';
import data from '../data/content.json';

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        {data.categories.map((category) => (
          <CategorySection key={category.id} category={category} />
        ))}
      </main>
    </>
  );
}
