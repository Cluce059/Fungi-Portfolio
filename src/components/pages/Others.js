import React, {useState} from 'react';

function Others() {
  const Others = [
    {
      name: 'Fungus #1',
      category: 'Others',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
  },
  {
      name: 'Fungus #2',
      category: 'Others',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
  },
  {
      name: 'Fungus #3',
      category: 'Others',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
  },
  {
      name: 'Fungus #4',
      category: 'Others',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
  },
  {
      name: 'Fungus #5',
      category: 'Others',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
  }
];


  return (
    <>  
      <div className="flex-row">
        {Others.map((image, i) => (
          <div>
          <img
            src={require(`../../assets/small/Others/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
          />
          <h1>{Others.name}</h1>
          <p>{Others.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Others;