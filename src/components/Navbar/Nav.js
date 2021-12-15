import React, { useState} from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import { NavLink } from 'react-router-dom';
import './Nav.css';
import Dropdown from '../Dropdown/Dropdown';
import { FaGripLines, FaTimes, FaAngleDown } from 'react-icons/fa';

function Nav() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileView = () => setClick(false);

  const onMouseEnter = () => {
    window.innerWidth < 960 ? setDropdown(false) : setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth < 960 ? setDropdown(false) : setDropdown(false);
  };

  const extendElement = () => {
    dropdown ? setDropdown(false) : setDropdown(true);
  }

    return (
        <>
            <nav className='navbar'>
            <NavLink to='/' className='nav-logo' onClick={closeMobileView}>
                    <span>🍄</span>HOME
                </NavLink>
                <div className='menu-icon' onClick={handleClick}>
                <div className='nav-icon' onClick={handleClick}>
                    {click ? <FaTimes/> : <FaGripLines/>}
                </div>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className='nav-item'>
                    <NavLink to='/' className='nav-link' onClick={closeMobileView}>
                      Home
                    </NavLink>
                  </li>
                  <li className='nav-item'
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    onClick={extendElement}
                  >
                    <NavLink to='/categories'
                    className='nav-link'
                    >
                      Categories <FaAngleDown className='caret-icon'/>
                    </NavLink>
                    {dropdown && <Dropdown  onCloseMobileView={closeMobileView}/>}
                  </li>
                  <li className='nav-item'>
                    <NavLink
                      to='/contact'
                      className='nav-link'
                      onClick={closeMobileView}
                    >
                         Get in Touch
                    </NavLink>
                  </li>
                </ul>
            </nav>
        </>
    )
}

export default Nav;