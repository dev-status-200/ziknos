import Head from 'next/head'
import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import { Row, Col, Container,Button } from 'react-bootstrap'

import aos from 'aos'
import {BiMobileVibration, BiCaretRight, BiCaretLeft} from 'react-icons/bi'
import { AiOutlineArrowRight } from "react-icons/ai";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Router from 'next/router'

export default function Home() {

  const [box1, setBox1] = useState(false)
  const [box2, setBox2] = useState(false)

  const [boxHover1, setBoxHover1] = useState(false)
  const [boxHover2, setBoxHover2] = useState(false)
  const [boxHover3, setBoxHover3] = useState(false)

  const [nextServices, setNextServices] = useState(false);

  useEffect(() => {
    aos.init()
  }, [])

  return (
  <div  data-aos="fade-in" data-aos-duration="700" data-aos-easing="ease-out-sine">
  <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet" />
  </Head>

    <Container fluid>
      <Row className='justify-content-md-center blue-gradient-bg' style={{overflowY:"hidden",overflowX:"hidden"}}>
        <Col md={6} data-aos="slide-left" data-aos-duration="800" data-aos-once={true} data-aos-easing="ease-out-sine">
          <div className='my-5 py-5' style={{ alignContent:"end",textAlign:"end"}}>
            <div className='hero-text'> 
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
    <Row>
        <Col md={5}>
        <Row>
        <Col md={6}>
          <div className='card-top-line my-2'></div>
            <div  data-aos="slide-down" data-aos-once={true} data-aos-duration="800" data-aos-easing="ease-out-sine">
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
            <div className='card-top-line my-2'></div>
            </div>
          </Col>
          <Col md={6}>
          <div className='card-top-line my-2'></div>
            <div  data-aos="slide-down" data-aos-once={true} data-aos-duration="800" data-aos-easing="ease-out-sine">
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
            <div className='card-top-line my-2'></div>
            </div>
          </Col>
        </Row>
        </Col>
        <Col md={5}>
        <Row>
        <Col md={6}>
          <div className='card-top-line my-2'></div>
            <div  data-aos="slide-down" data-aos-once={true} data-aos-duration="800" data-aos-easing="ease-out-sine">
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
            <div className='card-top-line my-2'></div>
            </div>
          </Col>
        <Col md={6}>
          <div className='card-top-line my-2'></div>
            <div  data-aos="slide-down" data-aos-once={true} data-aos-duration="800" data-aos-easing="ease-out-sine">
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
            <div className='card-top-line my-2'></div>
            </div>
          </Col>
        </Row>
        </Col>
        <Col md={1}>
          <div className='next-btn' onClick={()=>Router.push('/globalItServices')}>
              <BiCaretRight className='next-btn-icon' />
          </div>
        </Col>
      </Row>

      </div>
    </div>
    <div className='servicesV2 pt-5' data-aos="fade-up" data-aos-once={true}  data-aos-duration="500" data-aos-easing="ease-out-sine">
        <div className='s2-text text-center white xxl'>Imagination Ideation<span className='orange six'> is possible!</span></div>
        <div className='white text-center lg three'>Lorem Ipsum iahsdb iahsrdnai oujre sfnesi isenfiosfm iueufnesi osdfns disfnsi isdjfni </div>
        <Row className='justify-content-md-center' style={{width:"100%"}}>
          <Col className='mx-1' md="auto mt-5"  style={{padding:"0px"}}>
            <div className={boxHover1?'blue-box py-1':'white-box'} onMouseEnter={()=>setBoxHover1(true)} onMouseLeave={()=>setBoxHover1(false)}>
            <div className='white-box-top-text'>View More <span className='lg orange'><AiOutlineArrowRight/></span></div>
              <div className='box-space'>
                  <div style={{height:"40px"}}>WEBSITE</div>
                  <div>DEVELOPMENT</div>
              </div>
            </div>
          </Col>
          <Col className='mx-1' md="auto mt-5" style={{padding:"0px"}}>
          <div className={boxHover2?'blue-box py-1':'white-box'} onMouseEnter={()=>setBoxHover2(true)} onMouseLeave={()=>setBoxHover2(false)}> {/* blue-box */}
              <div className='white-box-top-text'>View More <span className='lg orange'><AiOutlineArrowRight/></span></div>
              <div className='box-space'>
                  <div style={{height:"40px"}}>WEBSITE</div>
                  <div>DEVELOPMENT</div>
              </div>
            </div>
          </Col>
          <Col className='mx-1' md="auto mt-5" style={{padding:"0px"}}> 
          <div className={boxHover3?'blue-box py-1':'white-box'} onMouseEnter={()=>setBoxHover3(true)} onMouseLeave={()=>setBoxHover3(false)}>
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
  </div>
)
}