import React, { useState } from 'react';
import '../styles/dropdown.css';
import { Link } from 'react-router-dom';

function Dropdown(prop) {
 
const DropItems = [
  {
    title: 'Polypores',
    path: '/Polypores',
    cName: 'dropdown-link'
  },
  {
    title: 'Gills & ridges',
    path: '/gillsAndRidges',
    cName: 'dropdown-link'

  },
  {
    title: 'Teeth',
    path: '/Teeth',
    cName: 'dropdown-link'

  },
  {
    title: 'Others',
    path: '/Others',
    cName: 'dropdown-link'

  }
];


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