import React, {useState} from 'react';

function Unclassified() {
  const Unclassified = [
    {
      name: 'Fungus #15',
      category: 'Unclassified',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
  },
  {
      name: 'Fungus #16',
      category: 'Unclassified',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
  },
  {
      name: 'Fungus #17',
      category: 'Unclassified',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
  },
  {
      name: 'Fungus #18',
      category: 'Unclassified',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
  },
  {
      name: 'Fungus #19',
      category: 'Unclassified',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
  }
];


  return (
    <>  
      <div className="flex-row">
        {Unclassified.map((image, i) => (
          <div>
          <img
            src={require(`../../assets/small/Unclassified/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
          />
          <h1>{Unclassified.name}</h1>
          <p>{Unclassified.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Unclassified;