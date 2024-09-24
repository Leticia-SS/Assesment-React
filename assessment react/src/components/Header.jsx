import './components.css'
import { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='header-container'>
      <button className="menu-toggle" onClick={toggleSidebar}>
        ☰
      </button>
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          ×
        </button>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Trenging</a></li>
            <li><a href="#about">Settings</a></li>
          </ul>
        </nav>
      </aside>
    </header>
  );
}

export default Header