import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import DuaaPage from './pages/DuaaPage';
import { ThemeProvider } from './context/ThemeContext';
import './index.css';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
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
