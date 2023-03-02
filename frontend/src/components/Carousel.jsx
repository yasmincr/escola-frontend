import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel  from 'react-bootstrap/Carousel';

/* Imagens */
import planner from '../img/planner.jpg'
  
function Swiper() {
  return (
    <div style={{ display: 'block' }}>
      <Carousel fade>
          <img
          style={{objectFit: 'cover', height: '420px', objectPosition: 'center'}}
            className="d-block w-100"
            src={planner}
            alt=""
          />
      </Carousel>
    </div>
  );
}

export default Swiper;