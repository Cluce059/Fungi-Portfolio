import React, { useEffect, useState } from 'react';
import '../styles/toggle.css';
import { setTheme } from '../utils/theme';

function Toggle() {
    const [toggleClass, setClass] = useState('dark');
    let theme = localStorage.getItem('theme')

  const [togClass, setTogClass] = useState('dark');
  //get current theme
  let theme = localStorage.getItem('theme');

    const handleOnClick = () => {
        //default='theme-dark'
        changeThemeState()
    }

        const changeThemeState()
        //see if theme is theme-dark
        //set state to theme-light
        //or set to theme-dark otherwise


        //declare fnctn
        // if session theme is dark
        //set state to dark
        //else set to light

  return (
        <div className="container--toggle">
              {
                togClass === "light" ?
                <input type="checkbox" id="toggle" className="toggle--checkbox" onClick={handleOnClick} checked />
                :
                <input type="checkbox" id="toggle" className="toggle--checkbox" onClick={handleOnClick} />
            }
            <label htmlFor="toggle" className="toggle--label">
                <span className="toggle--label-background"></span>
            </label>
        </div>
    )
}

export default Toggle;