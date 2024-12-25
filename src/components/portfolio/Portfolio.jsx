import React, { useState } from 'react';
import './portfolio.css';
import IMG1 from '../../assets/P1.png';
import IMG2 from '../../assets/P2.png';
import IMG3 from '../../assets/P3.png';
import IMG4 from '../../assets/P4.png';
import IMG5 from '../../assets/P5.png';
import IMG6 from '../../assets/P6.png';
import IMG7 from '../../assets/P7.png';
import IMG8 from '../../assets/P8.png';
import IMG9 from '../../assets/P9.png';
import IMG10 from '../../assets/P10.png';
import IMG11 from '../../assets/P11.png';
import IMG12 from '../../assets/P12.png';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'ECOM-FRONT<-->Laravel & Vue.',
  },
  {
    id: 2,
    image: IMG2,
    title: 'ECOM-FRONT<-->Laravel & Vue.',
  },
  {
    id: 3,
    image: IMG3,
    title: 'ECOM-FRONT<-->Laravel & Vue.',
  },
  {
    id: 4,
    image: IMG4,
    title: 'ECOM-BACK<-->Laravel & Vue.',
  },
  {
    id: 5,
    image: IMG5,
    title: 'ECOM-BACK<-->Laravel & Vue.',
  },
  {
    id: 6,
    image: IMG6,
    title: 'ECOM-BACK<-->Laravel & Vue.',
  },
  {
    id: 7,
    image: IMG7,
    title: 'HOTEL-FRONT<-->Laravel & Vue.',
  },
  {
    id: 8,
    image: IMG8,
    title: 'HOTEL-FRONT<-->Laravel & Vue.',
  },
  {
    id: 9,
    image: IMG9,
    title: 'HOTEL-FRONT<-->Laravel & Vue.',
  },
  {
    id: 10,
    image: IMG10,
    title: 'HOTEL-BACK<-->Laravel & Vue.',
  },
  {
    id: 11,
    image: IMG11,
    title: 'HOTEL-BACK<-->Laravel & Vue.',
  },
  {
    id: 12,
    image: IMG12,
    title: 'HOTEL-BACK<-->Laravel & Vue.',
  }
];

const Portfolio = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
    setZoomLevel(1); // Reset zoom when opening a new image
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  const zoomIn = () => {
    setZoomLevel((prevZoom) => Math.min(prevZoom + 0.1, 3)); // Limit to max zoom 3x
  };

  const zoomOut = () => {
    setZoomLevel((prevZoom) => Math.max(prevZoom - 0.1, 0.5)); // Limit to min zoom 0.5x
  };

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Photo Gallery</h2>
      <div className="container portfolio-container">
        {data.map(({ id, image, title }) => (
          <article key={id} className='portfolio-item'>
            <div className="portfolio-item-img">
              <img src={image} alt={title} onClick={() => openModal(image)} />
              <h3>{title}</h3>
            </div>
          </article>
        ))}
      </div>

      {modalOpen && (
        <div className="modal" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // Prevent closing modal on content click
          >
            <span className="close" onClick={closeModal}>&times;</span>
            <div className="zoom-controls">
              <button onClick={zoomIn} className="zoom-btn">+</button>
              <button onClick={zoomOut} className="zoom-btn">-</button>
            </div>
            <img
              src={selectedImage}
              alt="Enlarged"
              style={{ transform: `scale(${zoomLevel})` }} // Apply zoom level
            />
          </div>
        </div>
      )}

    </section>
  );
};

export default Portfolio;
