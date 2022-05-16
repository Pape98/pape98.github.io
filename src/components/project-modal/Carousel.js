import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const ImageCarousel = ({ images }) => {
  const carouselItems = images.map(url => {
    return (
      <Carousel.Item>
        <div
          className='carouselImage'
          style={{
            backgroundImage: `url(${url})`,
          }}
        ></div>
      </Carousel.Item>
    );
  });

  return <Carousel>{carouselItems}</Carousel>;
};

export default ImageCarousel;
