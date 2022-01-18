/**REFERENCE:
 * 
 * https://dev.to/abbeyperini/an-accessible-dark-mode-toggle-in-react-aop
 */


import React, { useEffect, useState } from 'react';
import '../styles/toggle.css';
import { setTheme } from '../utils/theme';

function Toggle() {
    
    //default dark mode
    const [togClass, setTogClass] = useState(false);

    //screan reader state aria = string value to label toggle state
    const [ariaActive, setAriaActive] = useState(true);

    let theme = localStorage.getItem('theme');

    const toggleAndChangeTheme = () => {
        if(localStorage.getItem('theme') === 'theme-dark'){
            setTheme('theme-light');
            setTogClass(true);
            setAriaActive(false);
        } else {
            setTheme('theme-dark');
            setAriaActive(true);
            setTogClass(false);
        }
    };

    const handleOnClick = () => {
        toggleAndChangeTheme();
    };

    //focus & toggle on 'enter' 
    const handleKeyPress = (e) => {
        if(e.code === "Enter"){
            toggleAndChangeTheme();

        }
    };
    
    useEffect(() => {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setAriaActive(true);
            setTogClass(false);
        } else if (localStorage.getItem('theme') === 'theme-light') {
            setAriaActive(false);
            setTogClass(true);
        }
    }, [theme]
    );


  return (
      <>
        <div className="container--toggle">

        {
            togClass === "light" ?
           
            <input aria-label="dark mode toggle" role="switch" 
            aria-checked="false" onKeyPress={handleKeyPress} 
            type="checkbox" id="toggle" className="toggle--checkbox" 
            onClick={handleOnClick} checked={togClass} readOnly 
            />
            :
              <input aria-label="dark mode toggle" role="switch" 
              aria-checked="true" onKeyPress={handleKeyPress} 
              type="checkbox" id="toggle" className="toggle--checkbox" 
              onClick={handleOnClick} checked={togClass} readOnly 
              />
        }           
        <label htmlFor="toggle" className="toggle--label">
          <span className="toggle--label-background"></span>
          mode
        </label>
      </div>
      <div class="copyright">&copy; Untitled. All rights reserved. Includes code by: <a href="https://abbeyperini.dev">Abbey Perini</a>.</div>
      </>
    )
};

export default Toggle;

        