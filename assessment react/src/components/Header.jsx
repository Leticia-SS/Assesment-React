import './components.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faBars, faHouse, faHashtag, faGear } from '@fortawesome/free-solid-svg-icons';


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
            <li><a href="/"><FontAwesomeIcon icon={faHouse} /> Home</a></li>
            <li><a href=""><FontAwesomeIcon icon={faHashtag} /> Trending</a></li>
            <li><a href=""><FontAwesomeIcon icon={faGear} /> Settings</a></li>
          </ul>
        </nav>
      </aside>
    </header>
  );
}

export default Header