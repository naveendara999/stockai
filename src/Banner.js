import React from 'react';
import hero from './/Assets/images/relation.png';
import { Button } from './Button';
const Banner = () => {
  return (
    <div className='m-0' style={{ background: '#f4f4f4' }}>
      <div
        className='row m-0 '
        style={{ minHeight: '100vh', paddingTop: '80px' }}
      >
        <div
          className='col-md-6 banner-col text-container'
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <div style={{ textAlign: 'center' }}>
            <h1
              className='animate__animated animate__fadeInDown pt-4 pt-md-0'
              style={{
                marginBottom: '30px',
                fontSize: '44px',
                lineHeight: '48px',
                fontWeight: '700',
                color: '#181f2a',
              }}
            >
              Buy in Uptrend. Ride it till it ends
            </h1>
            <p
              className='animate__animated animate__fadeInDown'
              style={{
                display: 'block',
                paddingTop: '20px',
                paddingBottom: '20px',
                fontSize: '22px',
                fontWeight: '400',
              }}
            >
              Our Artificial Intelligence finds the best entry for the stocks in
              the strong uptrend and alerts when the trend ends
            </p>
            <div className='mb-5'>
              <Button buttonText='Create account with your email' />
            </div>
          </div>
        </div>
        <div className='col-md-6 banner-col img-container p-0'>
          <div style={{ textAlign: 'right', height: '100%' }}>
            <img
              className='animate__animated
            animate__fadeInRight'
              alt=''
              src={hero}
              style={{ objectFit: 'cover', height: '100%', width: '100%' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
