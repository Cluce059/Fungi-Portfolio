import React, { useState } from 'react';
import Modal from './Modal';

const PhotoList = ({ category }) => {
  //const [isModalOpen, setIsModalOpen] = useState(false);
  //const [currentPhoto, setCurrentPhoto] = useState();
    console.log(category)
  const [photos] = useState([
    {
      name: 'Glass Item #1',
      category: 'Comissions',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Glass Item #2',
      category: 'Comissions',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Glass Item #3',
      category: 'Comissions',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Glass Item #4',
      category: 'Comissions',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Glass Item #5',
      category: 'Functional',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Glass Item #6',
      category: 'Functional',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Glass Item #7',
      category: 'Functional',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Glass Item #8',
      category: 'Functional',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
        name: 'Glass Item #9',
        category: 'Functional',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Glass Item #10',
      category: 'Glassware',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Glass Item #11',
      category: 'Glassware',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Glass Item #12',
      category: 'Glassware',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Glass Item #13',
      category: 'Glassware',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
        name: 'Glass Item #14',
        category: 'Glassware',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    }
]);

  const currentPhotos = photos.filter((photo) => photo.category === category);
  console.log(currentPhotos)
  /*
  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);

    glass-port\src\assets\small\Glassware\0.jpg
  };
*/
  return (
    <div>
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../assets/small/${category}/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
