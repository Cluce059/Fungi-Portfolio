import React, {useState} from 'react';

function Polypores() {
  const Polypores = [
    {
      name: 'Fungus #10',
      category: 'Polypores',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Fungus #11',
      category: 'Polypores',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Fungus #12',
      category: 'Polypores',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Fungus #13',
      category: 'Polypores',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
        name: 'Fungus #14',
        category: 'Polypores',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    }
];


  return (
    <>  
      <div className="flex-row">
        {Polypores.map((image, i) => (
          <div>
          <img
            src={require(`../../assets/small/Polypores/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
          />
          <h1>{Polypores.name}</h1>
          <p>{Polypores.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Polypores;