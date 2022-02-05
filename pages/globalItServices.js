import React, { useEffect, useState } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap'
import {AiFillCalendar} from "react-icons/ai";
import {ImInstagram} from 'react-icons/im'
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import aos from 'aos'
import Router from 'next/router'

const globalItServices = () => {

    const [boxHover1, setBoxHover1] = useState(false);

    useEffect(() => {
        aos.init();
    }, []);    

  return (
  <div style={{overflowX:"hidden"}}>
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
                <button className='blue-btn' onClick={()=>Router.push('/rollout')}> Read More</button>
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
                <button className='blue-btn' onClick={()=>Router.push('/rollout')}> Read More</button>
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
                <button className='blue-btn' onClick={()=>Router.push('/rollout')}> Read More</button>
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
                <button className='blue-btn' onClick={()=>Router.push('/rollout')}> Read More</button>
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
    <div className=''  data-aos="fade-up" data-aos-once={true} data-aos-duration="800" data-aos-easing="ease-out-sine">
        <Row className="justify-content-md-center my-5">
            <Col md="auto">
                <div className='box-normal px-3 py-2'>
                    <div className='md'>View More <span><AiOutlineArrowRight className='orange' /></span></div>
                    <div className='empty-normal-1'></div>
                    <div className='lg six box_normal-text'style={{height:"34px"}}>DESKTOP</div>
                    <div className='lg six box_normal-text'>SUPPORT</div>
                </div>
            </Col>
            <Col md="auto">
                <div className='box-normal px-3 py-2'>
                    <div className='md'>View More <span><AiOutlineArrowRight className='orange' /></span></div>
                    <div className='empty-normal-1'></div>
                    <div className='lg six box_normal-text'style={{height:"34px"}}>CLOUD</div>
                    <div className='lg six box_normal-text'>COMPUTING</div>
                </div>
            </Col>
            <Col md="auto">
                <div className='box-normal px-3 py-2'>
                    <div className='md'>View More <span><AiOutlineArrowRight className='orange' /></span></div>
                    <div className='empty-normal-1'></div>
                    <div className='lg six box_normal-text'style={{height:"34px"}}>DATA</div>
                    <div className='lg six box_normal-text'>DESTRUCTION</div>
                </div>
            </Col>
        </Row>
    </div>
    <div className='footer-normal px-5 pt-4 pb-5'>
    <Row>
      <Col>
        <div className='white five sm-2' style={{cursor:"pointer", width:"90px"}}>About Us</div>
        <div className='white five sm-2' style={{cursor:"pointer", width:"50px"}}>Services</div>
      </Col>
      <Col>
      <div className='white five sm-2' style={{cursor:"pointer", width:"100px", float:"right"}}>
      <div >Follow Us</div>
      <span ><FaFacebookSquare/> </span>
      <span ><FaTwitterSquare/> </span>
      <span ><FaLinkedin/> </span>
      <span ><ImInstagram/> </span>
      </div>
      </Col>
    </Row>
    <Row className='my-1'></Row>
    </div>
    <div className='footerBlack-normal p-2'><div className='white text-center'>2022 Ziknos, All Rights Reserved</div></div>
  </div>
  );
};

export default globalItServices;
