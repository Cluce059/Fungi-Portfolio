import React, {useState} from 'react';

function Gilled() {
  const Gilled = [
    {
      name: 'Fungus #5',
      category: 'Gilled',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Fungus #6',
      category: 'Gilled',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Fungus #7',
      category: 'Gilled',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Fungus #8',
      category: 'Gilled',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
        name: 'Fungus #9',
        category: 'Gilled',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    }
];


  return (
    <>  
      <div className="flex-row">
        {Gilled.map((image, i) => (
          <div>
          <img
            src={require(`../../assets/small/Gilled/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
          />
          <h1>{Gilled.name}</h1>
          <p>{Gilled.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Gilled;