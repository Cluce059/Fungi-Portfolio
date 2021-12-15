import React, { useState } from 'react';
import './Dropdown.css';
import { Link } from 'react-router-dom';

function Dropdown(prop) {
 
const DropItems = [
  {
    title: 'Boletes',
    path: '/Boletes',
    cName: 'dropdown-link'
  },
  {
    title: 'Gilled',
    path: '/Gilled',
    cName: 'dropdown-link'

  },
  {
    title: 'Polypores',
    path: '/Polypores',
    cName: 'dropdown-link'

  },
  {
    title: 'Unclassified',
    path: '/Unclassified',
    cName: 'dropdown-link'

  }
];


  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={prop.onCloseMobileView}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {DropItems.map((item, index) => {
          return (
            <li key={index}>
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