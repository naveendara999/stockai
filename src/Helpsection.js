import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import hero from './/Assets/images/listeposter.png';
import ai from './/Assets/images/aiimage.jpeg';
import how from './/Assets/images/howitworks.png';
import play from './/Assets/images/playicon.png';
function Helpsection() {
  return (
    <div className='my-5'>
      <Container>
        <Row>
          <Col
            md={6}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
            className=' mt-5 mt-md-0 order-md-0 px-md-3 px-0'
          >
            <div style={{ textAlign: 'right', height: '100%' }}>
              <img
                alt=''
                src={hero}
                style={{ objectFit: 'cover', height: '100%', width: '100%' }}
              />
              <img
                className='playicon  img-fluid wow fadeInUp animated'
                alt=''
                src={play}
              />
            </div>
          </Col>
          <Col
            md={6}
            style={{
              alignItems: 'center',
              textAlign: 'left',
            }}
          >
            <div style={{ textAlign: 'left' }}>
              <h2
                className='wow fadeInLeft mb-3'
                style={{ fontWeight: '700', color: ' #181f2a' }}
              >
                How do we help you?
              </h2>
            </div>

            <div style={{ margin: '0', padding: '0', boxSizing: 'border-box' }}>
              <li className='li'>
                <FontAwesomeIcon icon={faCheckSquare} size='1x' className='i' />
                View daily uptrend stocks
                <span>Top stocks in uptrend each day that you can buy</span>
              </li>
              <li className='li'>
                <FontAwesomeIcon icon={faCheckSquare} size='1x' className='i' />
                View daily uptrend stocks
                <span>Top stocks in uptrend each day that you can buy</span>
              </li>
              <li className='li'>
                <FontAwesomeIcon icon={faCheckSquare} size='1x' className='i' />
                View daily uptrend stocks
                <span>Top stocks in uptrend each day that you can buy</span>
              </li>
              <li className='li'>
                <FontAwesomeIcon icon={faCheckSquare} size='1x' className='i' />
                View daily uptrend stocks
                <span>Top stocks in uptrend each day that you can buy</span>
              </li>
              <li className='li'>
                <FontAwesomeIcon icon={faCheckSquare} size='1x' className='i' />
                View daily uptrend stocks
                <span>Top stocks in uptrend each day that you can buy</span>
              </li>
              <li className='li'>
                <FontAwesomeIcon icon={faCheckSquare} size='1x' className='i' />
                View daily uptrend stocks
                <span>Top stocks in uptrend each day that you can buy</span>
              </li>
            </div>
          </Col>
        </Row>
        {/* // */}
        <Row className='my-5'>
          <Col
            md={6}
            style={{
              alignItems: 'center',
              textAlign: 'left',
            }}
          >
            <div style={{ textAlign: 'left' }}>
              <h2
                className='wow fadeInLeft mb-3'
                style={{ fontWeight: '700', color: ' #181f2a' }}
              >
                Everyone has their own style of INVESTING.
              </h2>
            </div>

            <div style={{ margin: '0', padding: '0', boxSizing: 'border-box' }}>
              <li className='li'>
                <FontAwesomeIcon icon={faCheckSquare} size='1x' className='i' />
                View daily uptrend stocks
                <span>Top stocks in uptrend each day that you can buy</span>
              </li>
              <li className='li'>
                <FontAwesomeIcon icon={faCheckSquare} size='1x' className='i' />
                View daily uptrend stocks
                <span>Top stocks in uptrend each day that you can buy</span>
              </li>
              <li className='li'>
                <FontAwesomeIcon icon={faCheckSquare} size='1x' className='i' />
                View daily uptrend stocks
                <span>Top stocks in uptrend each day that you can buy</span>
              </li>
              <li className='li'>
                <FontAwesomeIcon icon={faCheckSquare} size='1x' className='i' />
                View daily uptrend stocks
                <span>Top stocks in uptrend each day that you can buy</span>
              </li>
              <li className='li'>
                <FontAwesomeIcon icon={faCheckSquare} size='1x' className='i' />
                View daily uptrend stocks
                <span>Top stocks in uptrend each day that you can buy</span>
              </li>
              <li className='li'>
                <FontAwesomeIcon icon={faCheckSquare} size='1x' className='i' />
                View daily uptrend stocks
                <span>Top stocks in uptrend each day that you can buy</span>
              </li>
            </div>
          </Col>
          <Col
            md={6}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
            className=' mt-5 mt-md-0 order-md-0 px-md-3 px-0'
          >
            <div style={{ textAlign: 'right', height: '100%' }}>
              <img
                alt=''
                src={ai}
                style={{ objectFit: 'cover', height: '100%', width: '100%' }}
              />
            </div>
          </Col>
        </Row>
        {/* // */}
        <Row>
          <Col
            md={6}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
            className=' mt-5 mt-md-0 order-md-0 px-md-3 px-0'
          >
            <div style={{ textAlign: 'right', height: '100%' }}>
              <img
                alt=''
                src={how}
                style={{ objectFit: 'cover', height: '100%', width: '100%' }}
              />
            </div>
          </Col>
          <Col
            md={6}
            style={{
              alignItems: 'center',
              textAlign: 'left',
            }}
          >
            <div style={{ textAlign: 'left' }}>
              <h2
                className='wow fadeInLeft mb-3'
                style={{ fontWeight: '700', color: ' #181f2a' }}
              >
                How does liste.ai works ?
              </h2>
            </div>

            <div style={{ margin: '0', padding: '0', boxSizing: 'border-box' }}>
              <li className='li'>
                <FontAwesomeIcon icon={faCheckSquare} size='1x' className='i' />
                View daily uptrend stocks
                <span>Top stocks in uptrend each day that you can buy</span>
              </li>
              <li className='li'>
                <FontAwesomeIcon icon={faCheckSquare} size='1x' className='i' />
                View daily uptrend stocks
                <span>Top stocks in uptrend each day that you can buy</span>
              </li>
              <li className='li'>
                <FontAwesomeIcon icon={faCheckSquare} size='1x' className='i' />
                View daily uptrend stocks
                <span>Top stocks in uptrend each day that you can buy</span>
              </li>
              <li className='li'>
                <FontAwesomeIcon icon={faCheckSquare} size='1x' className='i' />
                View daily uptrend stocks
                <span>Top stocks in uptrend each day that you can buy</span>
              </li>
              <li className='li'>
                <FontAwesomeIcon icon={faCheckSquare} size='1x' className='i' />
                View daily uptrend stocks
                <span>Top stocks in uptrend each day that you can buy</span>
              </li>
              <li className='li'>
                <FontAwesomeIcon icon={faCheckSquare} size='1x' className='i' />
                View daily uptrend stocks
                <span>Top stocks in uptrend each day that you can buy</span>
              </li>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Helpsection;
