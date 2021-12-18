import React, {useState} from 'react';

function gillsAndRidges() {
  const gillsAndRidges = [
    {
      name: 'Fungus #1',
      category: 'gillsAndRidges',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Fungus #2',
      category: 'gillsAndRidges',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Fungus #3',
      category: 'gillsAndRidges',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Fungus #4',
      category: 'gillsAndRidges',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
        name: 'Fungus #5',
        category: 'gillsAndRidges',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Fungus #6',
      category: 'gillsAndRidges',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Fungus #7',
      category: 'gillsAndRidges',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Fungus #8',
      category: 'gillsAndRidges',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Fungus #9',
      category: 'gillsAndRidges',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
        name: 'Fungus #10',
        category: 'gillsAndRidges',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Fungus #11',
      category: 'gillsAndRidges',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
  },
  {
    name: 'Fungus #12',
    category: 'gillsAndRidges',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
  },
  {
    name: 'Fungus #18',
    category: 'gillsAndRidges',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
  }

];


  return (
    <>  
      <div className="flex-row">
        {gillsAndRidges.map((image, i) => (
          <div>
          <img
            src={require(`../../assets/small/gillsAndRidges/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
          />
          <h1>{gillsAndRidges.name}</h1>
          <p>{gillsAndRidges.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default gillsAndRidges;