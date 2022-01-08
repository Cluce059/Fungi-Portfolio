import React, { useEffect, useState } from 'react';
import '../styles/toggle.css';
import { setTheme } from '../utils/themes';

function Toggle() {
    
    //default dark mode
    const [togClass, setTogClass] = useState(false);

    //light mode for screen readers
    const [ariaActive, setAriaActive] = useState(true);

    let theme = localStorage.getItem('theme');

    const toggleAndChangeTheme = () => {
        if(localStorage.getItem('theme') === 'theme-dark'){
            setTheme('theme-light');
            setAriaActive(true);
            setTogClass(false);
        } else {
            setTheme('theme-dark');
            setAriaActive(false);
            setTogClass(true);
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
    }, 
    [theme]
    );

  return (
        <div className="container--toggle">
            <input aria-label="dark mode toggle" role="switch" 
            aria-checked={ariaActive} onKeyPress={handleKeyPress} 
            type="checkbox" id="toggle" className="toggle--checkbox" 
            onClick={handleOnClick} checked={togClass} readOnly 
            />
        <label htmlFor="toggle" className="toggle--label">
          <span className="toggle--label-background"></span>
          dark mode toggle
        </label>
      </div>
    )
};

export default Toggle;

        