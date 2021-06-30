import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import hero from './../Assets/images/relation.png';
import ai from './../Assets/images/aiimage.jpeg';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'red' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'green' }}
      onClick={onClick}
    />
  );
}

const settings = {
  className: 'center',
  centerMode: true,
  infinite: true,
  centerPadding: '60px',
  slidesToShow: 1,
  speed: 500,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

function CarasoulSection() {
  return (
    <div className='container pt-5 pb-3' style={{ textAlign: 'center' }}>
      <h2
        className='wow fadeInLeft  mb-3'
        style={{ fontWeight: '700', color: ' #181f2a' }}
      >
        Top picks from the past
      </h2>
      <div>
        <Slider {...settings}>
          <div>
            <img
              alt=''
              src={hero}
              style={{ maxWidth: '100%', overflow: 'hidden' }}
            />
          </div>
          <div>
            <img
              alt=''
              src={ai}
              style={{ maxWidth: '100%', overflow: 'hidden' }}
            />
          </div>
          <div>
            <img
              alt=''
              src={hero}
              style={{ maxWidth: '100%', overflow: 'hidden' }}
            />
          </div>
          <div>
            <img
              alt=''
              src={ai}
              style={{ maxWidth: '100%', overflow: 'hidden' }}
            />
          </div>
          <div>
            <img
              alt=''
              src={hero}
              style={{ maxWidth: '100%', overflow: 'hidden' }}
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default CarasoulSection;
