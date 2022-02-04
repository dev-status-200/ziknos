import React, { useEffect } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap'
import {AiFillCalendar} from "react-icons/ai";
import aos from 'aos'

const globalItServices = () => {

    useEffect(() => {
        aos.init();
    }, []);
    

  return (
  <div >
    <div className='blue-gradient-bg'>
        <Container>
        <Row style={{width:"100%"}}>
            <Col md={6} className='py-5'>
            <div className='hero-text text-end'> 
            <h1 className='white four xxl'>
              Imagination, Ideation<br/> & Innovation,<br/> <span className='orange'>everything is<br/> possible!</span>
            </h1>
            <p className='white md mt-5'>
              Driven by endless imaginative thoughts, ideas and innovation, we are developing distinctive internet solutions that guarantee greater
              effectiveness and competitive advantage for your company and therefore, for your end-users
            </p>
            </div>
            </Col>
            <Col md={6}>
            </Col>
        </Row>
        </Container>
    </div>
    <div className='grey-bg py-3'>
        <Container data-aos="fade-in" data-aos-once={true} data-aos-duration="800" data-aos-easing="ease-out-sine">
            <h1 className='four'><span className='bluish'>Global IT</span> <span className='orange'>Services</span></h1>
            <p className='md'>Brainotech team consists of professional and experienced consultants, engineers, technicians, and designers
            that would work with you to achieve the best possible solution to your IT related problem. Our professional
            services include IT Hardware </p>
        </Container>
    </div>
    <div>
    <Container style={{overflowX:"hidden", overflowY:"hidden"}}>
    <Row data-aos="slide-right" data-aos-once={true} data-aos-duration="800" data-aos-easing="ease-out-sine">
        <Col className='my-5' md={4}>
        <Row>
            <Col xs={1} md={1}>
                <div  className='blue-verticle-line bluish'></div>
            </Col>
            <Col xs={10} md={10} className='orange-verticle-line'>
                <div className='text-center'> <AiFillCalendar className='white xxxl asset' /> </div>
            </Col>
        </Row>
        </Col>
        <Col md={8} className='my-5'>
            <h2>IT ASSET RECOVERY</h2>
            <p className='my-3 four m-grey sm-2'>
                We are having plenty of Technicians for planned Rollout and Migration 
                Projects and offer complete 24/7 support as per Client's desire. We are 
                having plenty of Technicians for planned Rollout and Migration Projects 
                and offer complete 24/7 support as per Client's desire.
            </p>
            <Row>
                <Col md={3}>
                <button className='blue-btn'> Read More</button>
                </Col>
                <Col md={9}>
                    <div className='line my-4'></div>
                </Col>
            </Row>
        </Col>
    </Row>
    <Row data-aos="slide-left" data-aos-once={true} data-aos-duration="800" data-aos-easing="ease-out-sine">
        <Col md={8} className='my-5'>
            <h2 className='text-end mx-5'>IT ASSET RECOVERY</h2>
            <p className='my-3 four m-grey sm-2 text-end mx-5'>
                We are having plenty of Technicians for planned Rollout and Migration 
                Projects and offer complete 24/7 support as per Client's desire. We are 
                having plenty of Technicians for planned Rollout and Migration Projects 
                and offer complete 24/7 support as per Client's desire.
            </p>
            <Row>
                <Col md={9}>
                    <div className='line-2 my-4'></div>
                </Col>
                <Col md={3}>
                <button className='blue-btn'> Read More</button>
                </Col>
            </Row>
        </Col>
        <Col className='my-5' md={4}>
        <Row>
            <Col xs={10} md={10} className='orange-verticle-line'>
                <div className='text-center'> <AiFillCalendar className='white xxxl asset' /> </div>
            </Col>
            <Col xs={1} md={1}>
                <div  className='blue-verticle-line bluish'></div>
            </Col>
        </Row>
        </Col>
    </Row>
    <Row data-aos="slide-right" data-aos-once={true} data-aos-duration="800" data-aos-easing="ease-out-sine">
        <Col className='my-5' md={4}>
        <Row>
            <Col xs={1} md={1}>
                <div  className='blue-verticle-line bluish'></div>
            </Col>
            <Col xs={10} md={10} className='orange-verticle-line'>
                <div className='text-center'> <AiFillCalendar className='white xxxl asset' /> </div>
            </Col>
        </Row>
        </Col>
        <Col md={8} className='my-5'>
            <h2>IT ASSET RECOVERY</h2>
            <p className='my-3 four m-grey sm-2'>
                We are having plenty of Technicians for planned Rollout and Migration 
                Projects and offer complete 24/7 support as per Client's desire. We are 
                having plenty of Technicians for planned Rollout and Migration Projects 
                and offer complete 24/7 support as per Client's desire.
            </p>
            <Row>
                <Col md={3}>
                <button className='blue-btn'> Read More</button>
                </Col>
                <Col md={9}>
                    <div className='line my-4'></div>
                </Col>
            </Row>
        </Col>
    </Row>
    <Row data-aos="slide-left" data-aos-once={true} data-aos-duration="800" data-aos-easing="ease-out-sine">
        <Col md={8} className='my-5'>
            <h2 className='text-end mx-5'>IT ASSET RECOVERY</h2>
            <p className='my-3 four m-grey sm-2 text-end mx-5'>
                We are having plenty of Technicians for planned Rollout and Migration 
                Projects and offer complete 24/7 support as per Client's desire. We are 
                having plenty of Technicians for planned Rollout and Migration Projects 
                and offer complete 24/7 support as per Client's desire.
            </p>
            <Row>
                <Col md={9}>
                    <div className='line-2 my-4'></div>
                </Col>
                <Col md={3}>
                <button className='blue-btn'> Read More</button>
                </Col>
            </Row>
        </Col>
        <Col className='my-5' md={4}>
        <Row>
            <Col xs={10} md={10} className='orange-verticle-line'>
                <div className='text-center'> <AiFillCalendar className='white xxxl asset' /> </div>
            </Col>
            <Col xs={1} md={1}>
                <div  className='blue-verticle-line bluish'></div>
            </Col>
        </Row>
        </Col>
    </Row>
    </Container>
    </div>
  </div>
  );
};

export default globalItServices;
