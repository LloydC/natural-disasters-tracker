import  { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';
import { ThemeContext } from '../context/theme.context';
import { LanguageContext } from '../context/language.context';

function Navbar() {

  const { dictionary } = useContext(LanguageContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  console.log(dictionary)
    return (
      <nav className={"Navbar " + theme}>
        <ul style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
        {dictionary.navbar.map(content => 
        <NavLink key={content.path} to={content.path} className={({ isActive }) => isActive ? "selected" : ""}>
          {content.text}
        </NavLink>)}

        <LanguageSelector />
        
        <button className="theme-btn" onClick={toggleTheme}>
        {theme === 'light' ? 'dark ' : 'light '}
      </button>
        </ul>
      </nav>
    );
  }
   
  export default Navbar;