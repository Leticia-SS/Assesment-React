import './components.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='header-container'>
      <button className="menu-toggle-btn" onClick={toggleSidebar}>
      <FontAwesomeIcon icon={faBars} />
      </button>
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faXmark}/>
        </button>
        <nav className='menu-nav'>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="">Trenging</a></li>
            <li><a href="">Settings</a></li>
          </ul>
        </nav>
      </aside>
    </header>
  );
}

export default Header