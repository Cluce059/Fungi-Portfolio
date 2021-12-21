import React from 'react';

function Polypores() {
  const Polypores = [
    {
      name: 'Fungus #1',
      category: 'Polypores',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Fungus #2',
      category: 'Polypores',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Fungus #3',
      category: 'Polypores',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Fungus #4',
      category: 'Polypores',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
        name: 'Fungus #5',
        category: 'Polypores',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Fungus #6',
      category: 'Polypores',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Fungus #7',
      category: 'Polypores',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Fungus #8',
      category: 'Polypores',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Fungus #9',
      category: 'Polypores',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
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
    },
    {
        name: 'Fungus #15',
        category: 'Polypores',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Fungus #16',
      category: 'Polypores',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Fungus #17',
      category: 'Polypores',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Fungus #18',
      category: 'Polypores',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Fungus #19',
      category: 'Polypores',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
        name: 'Fungus #20',
        category: 'Polypores',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Fungus #21',
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
            src={require(`../assets/small/Polypores/${i}.jpg`).default}
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