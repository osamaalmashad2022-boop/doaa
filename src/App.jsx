import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import DuaaPage from './pages/DuaaPage';
import { ThemeProvider } from './context/ThemeContext';
import './index.css';

function ScrollHandler() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollHandler />
        {/* Decorative background elements */}
        <div className="bg-circle bg-circle-1"></div>
        <div className="bg-circle bg-circle-2"></div>

        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/duaa" element={<DuaaPage />} />
        </Routes>

        <footer className="footer">
          <div className="container">
            <p>© {new Date().getFullYear()} الدعاء من القرآن والسنة. جميع الحقوق محفوظة.</p>
            <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', opacity: 0.7 }}>
              نسأل الله أن ينفع به وأن يجعله صدقة جارية.
            </p>
            <p style={{ marginTop: '0.5rem', fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>
              وقف لله تعالى 🌹
            </p>
          </div>
        </footer>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
