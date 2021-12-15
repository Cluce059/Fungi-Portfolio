import React, {useState} from 'react';
import Modal from '../Modal';

function Boletes() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const Boletes = [
    {
      name: 'Fungus #1',
      category: 'Boletes',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Fungus #2',
      category: 'Boletes',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Fungus #3',
      category: 'Boletes',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Fungus #4',
      category: 'Boletes',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    }
];


  return (
    <>  
      <div className="flex-row">
        {Boletes.map((image, i) => (
          <div>
          <img
            src={require(`../../assets/small/Boletes/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
          />
          <h1>{Boletes.name}</h1>
          <p>{Boletes.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Boletes;