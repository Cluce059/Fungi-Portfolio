import React from 'react';

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
      } = props;

    return (
        <header>
            <h3>
                <a href='/'>
                    <span>💎</span>DGLASS
                </a>
            </h3>
            <nav>
                <ul className="flex-row">
                    <li className ="mx-2">
                        <a href="#about">
                            Bio
                        </a>
                    </li>
                    <li>
                        <span>
                            Contact
                        </span>
                    </li>
                    {categories.map((category) => (
                        <li className={`mx-2 
                        ${
                            currentCategory.name === category.name && 'navActive'
                        }`} key = {category.name}>
                            <span onClick={() => {
                                setCurrentCategory(category);
                              
                            }}
                            >
                                {(category.name)}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Nav;