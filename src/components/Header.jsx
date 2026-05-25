import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Moon, Sun, BookOpen, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header glass">
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <BookOpen className="text-gold" size={28} />
          <h2 style={{ fontSize: '1.25rem', fontWeight: '800' }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }} onClick={closeMenu}>الدعاء من القرآن والسنة</Link>
          </h2>
        </div>
        
        {/* Desktop Nav */}
        <ul className="nav-links desktop-only">
          <li><a href="/#virtues">فضل الدعاء</a></li>
          <li><a href="/#times">أوقات الإجابة</a></li>
          <li><a href="/#names">أسماء الله الحسنى</a></li>
          <li><a href="/duaa#quran">من القرآن</a></li>
          <li><a href="/duaa#sunnah">من السنة</a></li>
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <button 
            onClick={toggleTheme} 
            className="btn-icon"
            aria-label="تبديل المظهر"
            title={theme === 'light' ? 'تفعيل الوضع الليلي' : 'تفعيل الوضع الفاتح'}
          >
            {theme === 'light' ? <Moon size={22} /> : <Sun size={22} />}
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="btn-icon mobile-only" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="القائمة"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="mobile-menu glass">
          <ul className="mobile-nav-links">
            <li><a href="/#virtues" onClick={closeMenu}>فضل الدعاء</a></li>
            <li><a href="/#times" onClick={closeMenu}>أوقات الإجابة</a></li>
            <li><a href="/#names" onClick={closeMenu}>أسماء الله الحسنى</a></li>
            <li><a href="/duaa#quran" onClick={closeMenu}>من القرآن</a></li>
            <li><a href="/duaa#sunnah" onClick={closeMenu}>من السنة</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}
