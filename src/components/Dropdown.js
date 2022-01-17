import React, { useState } from 'react';
import '../styles/dropdown.css';
import { Link } from 'react-router-dom';
import DropItems from './DropDownItems';

function Dropdown(prop) {
 
  const [click, setClick] = useState(false);
 
 return (
    <>
      <ul
        onClick={prop.onCloseMobileView}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
        id='dropdown_menu dropdown_menu--animated dropdown_menu-6'
      >
        {DropItems.map((item, index) => {
          return (
            <li key={index}
            className='dropdown-item'
            >
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;