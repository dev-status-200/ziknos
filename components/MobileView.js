import React,{useEffect} from 'react';
import aos from 'aos'
import { Row,Col, Container, Button } from 'react-bootstrap';
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import {BiMobileVibration, BiCaretRight, BiCaretLeft} from 'react-icons/bi'
import { AiOutlineArrowRight } from "react-icons/ai";
import {ImInstagram} from 'react-icons/im'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const MobileView = () => {

    useEffect(() => {
     aos.init();
    }, []);
    
  return(
  <div data-aos="fade-in" data-aos-duration="700" data-aos-easing="ease-out-sine">
    <div className='mob-bg-hero' style={{height:"100%", width:"100%", overflowX:"hidden"}}> 
        <Row className="justify-content-md-center" data-aos="fade-up" data-aos-duration="700" data-aos-easing="ease-out-sine">
            <Col className='my-5' md="auto">
            <h1 className='white four xl text-center'>
              Imagination, Ideation<br/> & Innovation,<br/> <span className='orange'>everything is<br/> possible!</span>
            </h1>
            <p className='white sm-2 mt-5 mx-5 text-center'>
              Driven by endless imaginative thoughts, ideas and innovation, we are developing distinctive internet solutions that guarantee greater
              effectiveness and competitive advantage for your company and therefore, for your end-users
            </p>
            </Col>
        </Row>
    </div>
    <div style={{height:"100%", width:"100%", overflowX:"hidden"}}>
        <Row className="justify-content-md-center my-5 mx-3">
            <Col sm={12}>
                <div className='my-2 blue-bg' style={{minHeight:"3px"}}></div>
                <div className='mob-card-one text-center p-4' data-aos="slide-up" data-aos-duration="700" data-aos-easing="ease-out-sine">
                        <BiMobileVibration className='white xxl mob-card-icon p-2' />
                        <div className='sm-2 six bluish my-3'>App Development</div>
                        <div className='sm three bluish text-center'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s, when an unknown printer.
                        </div>
                        <button className='card-btn'> Read More </button>
                </div>
                <div className='my-2 orange-bg' style={{minHeight:"3px"}}></div>
            </Col>
            <Col sm={12}>
                <div className='my-2 blue-bg' style={{minHeight:"3px"}}></div>
                <div className='mob-card-one text-center p-4' data-aos="slide-up" data-aos-duration="700" data-aos-easing="ease-out-sine">
                        <BiMobileVibration className='white xxl mob-card-icon p-2' />
                        <div className='sm-2 six bluish my-3'>App Development</div>
                        <div className='sm three bluish text-center'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s, when an unknown printer.
                        </div>
                        <button className='card-btn'> Read More </button>
                </div>
                <div className='my-2 orange-bg' style={{minHeight:"3px"}}></div>
            </Col>
            <Col sm={12}>
                <div className='my-2 blue-bg' style={{minHeight:"3px"}}></div>
                <div className='mob-card-one text-center p-4' data-aos="slide-up" data-aos-duration="700" data-aos-easing="ease-out-sine">
                        <BiMobileVibration className='white xxl mob-card-icon p-2' />
                        <div className='sm-2 six bluish my-3'>App Development</div>
                        <div className='sm three bluish text-center'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s, when an unknown printer.
                        </div>
                        <button className='card-btn'> Read More </button>
                </div>
                <div className='my-2 orange-bg' style={{minHeight:"3px"}}></div>
            </Col>
            <Col sm={12}>
                <div className='my-2 blue-bg' style={{minHeight:"3px"}}></div>
                <div className='mob-card-one text-center p-4' data-aos="slide-up" data-aos-duration="700" data-aos-easing="ease-out-sine">
                        <BiMobileVibration className='white xxl mob-card-icon p-2' />
                        <div className='sm-2 six bluish my-3'>App Development</div>
                        <div className='sm three bluish text-center'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s, when an unknown printer.
                        </div>
                        <button className='card-btn'> Read More </button>
                </div>
                <div className='my-2 orange-bg' style={{minHeight:"3px"}}></div>
            </Col>
            <Col sm={12} data-aos="slide-up" data-aos-duration="700" data-aos-easing="ease-out-sine">
                <div className='my-2 orange-bg white sm six text-center p-2' style={{minHeight:"3px"}}> View More </div>
            </Col>
        </Row>
    </div>
    <div className='mob-bg-hero my-5 py-3' >
        <div className='s2-text text-center white lg py-3'>Imagination Ideation<span className='orange six'> <br/>is possible!</span></div>
        <div className='mob-2nd-card my-3 text-center bg-white mx-3 p-1'
             data-aos="slide-up" data-aos-duration="400" data-aos-easing="ease-out-sine"
        >
            <div className='mob-card-border'>
            <div className='bluish md seven my-2'> WEBSITE<br/> DEVELOPMENT<br/><BiCaretRight className="orange lg" /> </div>
            </div>
        </div>
        <div className='mob-2nd-card my-3 text-center bg-white mx-3 p-1'
             data-aos="slide-up" data-aos-duration="400" data-aos-easing="ease-out-sine"
        >
            <div className='mob-card-border'>
            <div className='bluish md seven my-2'> APPLICATION DEVELOPMENT<br/><BiCaretRight className="orange lg" /> </div>
            </div>
        </div>
        <div className='mob-2nd-card my-3 text-center bg-white mx-3 p-1'
             data-aos="slide-up" data-aos-duration="400" data-aos-easing="ease-out-sine"
        >
            <div className='mob-card-border'>
            <div className='bluish md seven my-2'> GRAPHICS<br/>DESIGNING<br/><BiCaretRight className="orange lg" /> </div>
            </div>
        </div>
    </div>
    <div className=''>
    <Container>
            <div className=''>
            <Swiper autoplay={true} pagination={true} modules={[Pagination]} className="mySwiper">
              <SwiperSlide><img src={'/img4.jpg'} /></SwiperSlide>
              <SwiperSlide><img src={'/img4.jpg'} /></SwiperSlide>
              <SwiperSlide><img src={'/img4.jpg'} /></SwiperSlide>
          </Swiper>
            </div>
          </Container>
    </div>
    <div className='mob-last-service my-2'>
        <div className='mob-last-section text-center p-2'>
            <div className='bluish lg six'> What We Do? </div>
            <div className='sm bluish four'> We Provide Global IT Services </div>
            <div><AiOutlineArrowRight className='orange md my-2' /></div>
        </div>
        <div className='mob-last-section text-center p-2'>
            <div className='bluish lg six'> What We Value? </div>
            <div className='sm bluish four'> A Satisfied Customer is the biggest achievement </div>
            <div><AiOutlineArrowRight className='orange md my-2' /></div>
        </div>
    </div>
    <div className='footer-normal mt-5 px-5 pt-4 pb-5'>
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

export default MobileView;
