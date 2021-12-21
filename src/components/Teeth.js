import React from 'react';
// import Modal from '../Modal';

function Teeth() {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  const Teeth = [
    {
      name: 'Fungus #1',
      category: 'Teeth',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Fungus #2',
      category: 'Teeth',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Fungus #3',
      category: 'Teeth',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    }
];


  return (
    <>  
      <div className="flex-row">
        {Teeth.map((image, i) => (
          <div>
          <img
            src={require(`../assets/small/Teeth/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
          />
          <h1>{Teeth.name}</h1>
          <p>{Teeth.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Teeth;