import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import DropItems from '../components/DropDownItems';

function Categories() {
  return (
    <section>
        <ul>
        {DropItems.map((item, index) => {
          return (
            <li key={index}
            className='dropdown-item'
            >
              <Link
                className={item.cName}
                to={item.path}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
        </ul>
      
    </section>
  );
}

export default Categories;