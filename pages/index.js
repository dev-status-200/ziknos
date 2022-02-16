import Head from 'next/head'
import React, {useState, useEffect} from 'react'
import { Row, Col, Container,Button } from 'react-bootstrap'

import aos from 'aos'
import {BiMobileVibration, BiCaretRight, BiCaretLeft} from 'react-icons/bi'
import { AiOutlineArrowRight } from "react-icons/ai";
import { ImInstagram } from 'react-icons/im'
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Router from 'next/router'

import MobileView from '../components/MobileView'


export default function Home() {

  const [box1, setBox1] = useState(false);
  const [box2, setBox2] = useState(false);

  const [boxHover1, setBoxHover1] = useState(false);
  const [boxHover2, setBoxHover2] = useState(false);
  const [boxHover3, setBoxHover3] = useState(false);
  const [rightButton, setButtonRight] = useState(false);

  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    aos.init();
  })

  return (
  <div  data-aos="fade-in" data-aos-duration="700" data-aos-easing="ease-out-sine">
  <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet" />
  </Head>
    <div className='mobileView'>
      <MobileView/>
    </div>
    <div className='PC-View'>


      <Container fluid>
      <Row className='justify-content-md-center blue-gradient-bg' style={{overflowY:"hidden",overflowX:"hidden"}}>
        <Col md={6} data-aos="slide-left" data-aos-duration="800" data-aos-once={true} data-aos-easing="ease-out-sine">
        <div className='lg-space'></div>
          <div className='my-5 py-5' style={{ alignContent:"end",textAlign:"end"}}>
            <div className='hero-text size-flexible-one'>
            <h1 className='white four xxl'>
              Imagination, Ideation<br/> & Innovation,<br/> <span className='orange'>everything is<br/> possible!</span>
            </h1>
            <p className='white md mt-5'>
              Driven by endless imaginative thoughts, ideas and innovation, we are developing distinctive internet solutions that guarantee greater
              effectiveness and competitive advantage for your company and therefore, for your end-users
            </p>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <div className='circle-one' onMouseEnter={()=>setBox1(true)} onMouseLeave={()=>setBox1(false)}>
            <p className='white box1-text' style={{fontSize:'30px'}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
            the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
            </p>
          </div>
          <div className={box1===false?'circle-two':'circle-two-changed'} onMouseEnter={()=>setBox2(true)} onMouseLeave={()=>setBox2(false)}>
          <p className='white box2-text' style={{fontSize:'30px'}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
            the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
            </p>
          </div>
          <div className={(box1===false && box2===false)?'circle-three':'circle-three-changed'}></div>
        </Col>
      </Row>
    </Container>


    <div className='services'>
      <div className='cards-space' style={{overflowX:"hidden"}}> 
      <div style={{position:"relative",zIndex:"5", backgroundColor:"white", height:"50px"}}></div>
      <Row className='text-center'>
        <Col md={1} lg={1}></Col>
        <Col md={5} lg={5}>
        <Row  className='lg-alignment-left'>
        <Col md={6} lg={5}>
          <div className='card-top-line my-2'></div>
            <div className='cdd' data-aos="slide-down" data-aos-once={true} data-aos-duration="800" data-aos-easing="ease-out-sine">
              <div className='card-border'>
                <div className='service-logo-bg' >
                  <BiMobileVibration className='service-logo' />
                </div>
                <div className='service-name-bg'>
                    <div className='service-name my-4'>Application Developments</div>
                </div>
                <div className='service-desc-bg'>
                  <div className='service-desc'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting 
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer.
                  </div>
                  <button className='card-btn'> Read More </button>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6} lg={5}>
          <div className='card-top-line my-2'></div>
            <div className='cdd' data-aos="slide-down" data-aos-once={true} data-aos-duration="800" data-aos-easing="ease-out-sine">
              <div className='card-border'>
                <div className='service-logo-bg' >
                  <BiMobileVibration className='service-logo' />
                </div>
                <div className='service-name-bg'>
                    <div className='service-name my-4'>Application Development</div>
                </div>
                <div className='service-desc-bg'>
                  <div className='service-desc'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting 
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer.
                  </div>
                  <button className='card-btn'> Read More </button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        </Col>
        <Col md={5} lg={5}>
        <Row className='lg-alignment-right'>
        <Col md={6} lg={5}>
          <div className='card-top-line my-2'></div>
            <div className='cdd' data-aos="slide-down" data-aos-once={true} data-aos-duration="800" data-aos-easing="ease-out-sine">
              <div className='card-border'>
                <div className='service-logo-bg' >
                  <BiMobileVibration className='service-logo' />
                </div>
                <div className='service-name-bg'>
                    <div className='service-name my-4'>Application Development</div>
                </div>
                <div className='service-desc-bg'>
                  <div className='service-desc'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting 
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer.
                  </div>
                  <button className='card-btn'> Read More </button>
                </div>
              </div>
            </div>
          </Col>
        <Col md={6} lg={5}>
          <div className='card-top-line my-2'></div>
            <div className='cdd' data-aos="slide-down" data-aos-once={true} data-aos-duration="800" data-aos-easing="ease-out-sine">
              <div className='card-border'>
                <div className='service-logo-bg' >
                  <BiMobileVibration className='service-logo' />
                </div>
                <div className='service-name-bg'>
                    <div className='service-name my-4'>Application Development</div>
                </div>
                <div className='service-desc-bg'>
                  <div className='service-desc'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting 
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer.
                  </div>
                  <button className='card-btn'> Read More </button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        </Col>
        <Col md={1} lg={1} style={{cursor:"pointer"}} className='lg-alignment-right-btn' >
        <div style={{width:"50px", height:"460px"}} onMouseEnter={()=>setButtonRight(true)} onMouseLeave={()=>setButtonRight(false)}>
          {!rightButton && <div className={'next-btn'}>
            
          </div>}
          {rightButton && <div className={'next-button-changed'}  data-aos="slide-right" data-aos-duration="350" data-aos-easing="ease-out">
            <BiCaretRight className='next-btn-icon' data-aos="fade-right" data-aos-duration="450" data-aos-easing="ease-out" />
          </div>}
        </div>
        </Col>
      </Row>
      </div>
    </div>


    <div className='servicesV2 pt-5' data-aos="fade-up" data-aos-once={true}  data-aos-duration="500" data-aos-easing="ease-out-sine">
        <div className='s2-text text-center white xxl'>Imagination Ideation<span className='orange six'> is possible!</span></div>
        <div className='white text-center lg three'>Lorem Ipsum iahsdb iahsrdnai oujre sfnesi isenfiosfm iueufnesi osdfns disfnsi isdjfni </div>
        <Row className='justify-content-md-center' style={{width:"100%"}}>
          <Col className='mx-3' md="auto"  style={{padding:"0px", marginTop:"70px"}}>
            <div className={boxHover1?'blue-box':'white-box'} onMouseEnter={()=>setBoxHover1(true)} onMouseLeave={()=>setBoxHover1(false)}>
            <div className='white-box-top-text'>View More <span className='lg orange'><AiOutlineArrowRight/></span></div>
              <div className='box-space'>
                  <div style={{height:"40px"}}>WEBSITE</div>
                  <div>DEVELOPMENT</div>
              </div>
            </div>
          </Col>
          <Col className='mx-3' md="auto"  style={{padding:"0px", marginTop:"70px"}}>
          <div className={boxHover2?'blue-box':'white-box'} onMouseEnter={()=>setBoxHover2(true)} onMouseLeave={()=>setBoxHover2(false)}> {/* blue-box */}
              <div className='white-box-top-text'>View More <span className='lg orange'><AiOutlineArrowRight/></span></div>
              <div className='box-space'>
                  <div style={{height:"40px"}}>WEBSITE</div>
                  <div>DEVELOPMENT</div>
              </div>
            </div>
          </Col>
          <Col className='mx-3' md="auto"  style={{padding:"0px", marginTop:"70px"}}> 
          <div className={boxHover3?'blue-box':'white-box'} onMouseEnter={()=>setBoxHover3(true)} onMouseLeave={()=>setBoxHover3(false)}>
          <div className='white-box-top-text'>View More <span className='lg orange'><AiOutlineArrowRight/></span></div>
              <div className='box-space'>
                  <div style={{height:"40px"}}>WEBSITE</div>
                  <div>DEVELOPMENT</div>
              </div>
            </div>
          </Col>
        </Row>
    </div>
    <div className='openings' data-aos="fade-up" data-aos-once={true}  data-aos-duration="500" data-aos-easing="ease-out-sine">
          <Container>
            <div className='my-5'>
            <Swiper autoplay={true} pagination={true} modules={[Pagination]} className="mySwiper">
              <SwiperSlide><img src={'/img4.jpg'} /></SwiperSlide>
              <SwiperSlide><img src={'/img4.jpg'} /></SwiperSlide>
              <SwiperSlide><img src={'/img4.jpg'} /></SwiperSlide>
          </Swiper>
            </div>
          </Container>
    </div>
    <div className='empty-space'>
          <div className='my-4 white'> .</div>
    </div>
    <div className='last-box1'>
      <div className='boxOne p-3'>
        <div className='text-center  xxl six' ><a className='link' href='/globalItServices' style={{textDecoration:"none"}}> What We Do?</a> </div>
        <div className='text-center  lg'> We Provide Global IT Services </div>
        <div className='text-center orange xxl'><AiOutlineArrowRight/></div>
      </div>
      <div className='boxOne p-3'>
        <div className='text-center  xxl six'> What We Value? </div>
        <div className='text-center  lg'> A Satisfied Customer is the biggest achievement </div>
        <div className='text-center orange xxl'><AiOutlineArrowRight/></div>
      </div>
    </div>
    <div className='footer px-5 pt-4 pb-5'>
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
    <div className='footerBlack p-2'><div className='white text-center'>2022 Ziknos, All Rights Reserved</div></div>
    </div>
    
  </div>
)
}