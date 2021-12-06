import React, { useState }  from 'react';
import Nav from './components/Nav.js' ;
import About from './components/About.js';
import Gallery from './components/Gallery';

function App() {
  const [categories] = useState([
    {
      name: "Glassware",
      description:"Cups, glasses, plates, and bowls",
    },
    { name: "Functional", 
      description: "Pipes, chillums, waterpipes, concentrate accessories" 
    },
    { name: "Commissions", 
      description: "custom pieces and repairs"
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}>
      </Nav>
      <main>
      <Gallery currentCategory={currentCategory}></Gallery>
      </main>
    </div>
  );
}

export default App;