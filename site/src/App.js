import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'; 
import { ReactComponent as Logo } from './assets/strekoza.svg';
import { ReactComponent as BurgerIcon } from './assets/image/burger.svg';
import { ReactComponent as CloseIcon } from './assets/image/close.svg';
import Home from './pages/Home';
import About from './pages/About';
import Case from './pages/Case';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/case" element={<Case />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle('menu-open', !isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove('menu-open');
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Logo className="logo-svg" />
        </div>
        
        {/* Кнопка бургер-меню для мобильных */}
        <button 
          className="burger-button"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
        >
          {isMenuOpen ? <CloseIcon /> : <BurgerIcon />}
        </button>
        
        {/* Навигация для десктопа */}
        <nav className={`nav-center ${isMenuOpen ? 'active' : ''}`}>
          <NavLink to="/case" className={({isActive}) => isActive ? "nav-link active" : "nav-link"} onClick={closeMenu}>
            ра<i>б</i>оты
          </NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? "nav-link active" : "nav-link"} onClick={closeMenu}>
            о<i>б</i>о <i>м</i>не
          </NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? "nav-link active" : "nav-link"} onClick={closeMenu}>
            <i>к</i>онт<i>а</i>кты
          </NavLink>
          
          {/* Кнопка заказа в мобильном меню */}
          <div className="mobile-order-button">
            <a 
              href="https://t.me/strekoza_designer" 
              target="_blank" 
              rel="noopener noreferrer"
              className="order-button"
              onClick={closeMenu}
            >
              заказать услугу
            </a>
          </div>
        </nav>
        
        {/* Кнопка заказа для десктопа */}
        <div className="order-button-container">
          <a 
            href="https://t.me/strekoza_designer" 
            target="_blank" 
            rel="noopener noreferrer"
            className="order-button"
          >
            заказать услугу
          </a>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      © strekoza, 2023–2025
    </footer>
  );
}

export default App;