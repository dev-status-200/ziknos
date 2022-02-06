import React,{useEffect} from 'react';
import aos from 'aos'
import { Row,Col, Container, Button } from 'react-bootstrap';
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import {BiMobileVibration, BiCaretRight, BiCaretLeft} from 'react-icons/bi'
import { AiOutlineArrowRight } from "react-icons/ai";
import {ImInstagram} from 'react-icons/im'
import {AiFillCalendar} from "react-icons/ai";

const MBGlobalService = () => {
  
    useEffect(() => {
        aos.init();
    }, []);
    
    
  return (<div>
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
    <div className='grey-bg text-center p-3'>
        <h1 className='bluish'>Global <span className='orange'>IT Services</span></h1>
        <div className='sm mt-4 four'>
            Brainotech team consists of professional and experienced consultants, engineers, technicians, and designers that would work
            with you to achieve the best possible solution to your IT related problem. Our professional services include IT Hardware
        </div>
    </div>
    <div className='servicesBox my-3 mx-5 text-center'  data-aos="fade-in" data-aos-once={true} data-aos-duration="800" data-aos-easing="ease-out-sine">
        <div className='blue-bg' style={{minHeight:"2px"}}></div>
        <div className='orange-bg p-4 mt-2'>
            <AiFillCalendar className='xxl white'/>
        </div>
        <h1 className='mt-4'>IT ASSET RECOVERY</h1>
        <p className='m-grey mt-2'>We are having plenty of Technicians for planned Rollout and Migration Projects and offer complete 24/7 support as per Client's desire. We are having plenty of Technicians for planned Rollout and Migration Projects and offer complete 24/7 support as per Client's desire.</p>
        <button className='blue-btn my-2'><a href="/rollout" style={{textDecoration:"none", color:"white"}}>Read More</a></button>
        <div className='blue-bg mt-3' style={{minHeight:"2px"}}></div>
    </div>
    <div className='servicesBox my-3 mx-5 text-center'  data-aos="fade-in" data-aos-once={true} data-aos-duration="800" data-aos-easing="ease-out-sine">

        <div className='orange-bg p-4 mt-2'>
            <AiFillCalendar className='xxl white'/>
        </div>
        <h1 className='mt-4'>IT ASSET RECOVERY</h1>
        <p className='m-grey mt-2'>We are having plenty of Technicians for planned Rollout and Migration Projects and offer complete 24/7 support as per Client's desire. We are having plenty of Technicians for planned Rollout and Migration Projects and offer complete 24/7 support as per Client's desire.</p>
        <button className='blue-btn my-2'><a href="/rollout" style={{textDecoration:"none", color:"white"}}>Read More</a></button>
        <div className='blue-bg mt-3' style={{minHeight:"2px"}}></div>
    </div>
    <div className='servicesBox my-3 mx-5 text-center'  data-aos="fade-in" data-aos-once={true} data-aos-duration="800" data-aos-easing="ease-out-sine">

        <div className='orange-bg p-4 mt-2'>
            <AiFillCalendar className='xxl white'/>
        </div>
        <h1 className='mt-4'>IT ASSET RECOVERY</h1>
        <p className='m-grey mt-2'>We are having plenty of Technicians for planned Rollout and Migration Projects and offer complete 24/7 support as per Client's desire. We are having plenty of Technicians for planned Rollout and Migration Projects and offer complete 24/7 support as per Client's desire.</p>
        <button className='blue-btn my-2'><a href="/rollout" style={{textDecoration:"none", color:"white"}}>Read More</a></button>
        <div className='blue-bg mt-3' style={{minHeight:"2px"}}></div>
    </div>
    <div className='servicesBox my-3 mx-5 text-center'  data-aos="fade-in" data-aos-once={true} data-aos-duration="800" data-aos-easing="ease-out-sine">

        <div className='orange-bg p-4 mt-2'>
            <AiFillCalendar className='xxl white'/>
        </div>
        <h1 className='mt-4'>IT ASSET RECOVERY</h1>
        <p className='m-grey mt-2'>We are having plenty of Technicians for planned Rollout and Migration Projects and offer complete 24/7 support as per Client's desire. We are having plenty of Technicians for planned Rollout and Migration Projects and offer complete 24/7 support as per Client's desire.</p>
        <button className='blue-btn my-2'><a href="/rollout" style={{textDecoration:"none", color:"white"}}>Read More</a></button>
        <div className='blue-bg mt-3' style={{minHeight:"2px"}}></div>
    </div>

        <div className='mob-2nd-card my-3 mt-5 text-center bg-white mx-3 p-1'
             data-aos="slide-up" data-aos-duration="400" data-aos-easing="ease-out-sine"
        >
            <div className='mob-card-border'>
            <div className='bluish md seven my-2 mx-3 mt-3'> WEBSITE<br/> DEVELOPMENT<br/> </div>
            <div className='bluish sm mx-3 my-3'> View More <AiOutlineArrowRight className="orange sm" /></div>
            </div>
        </div>
        <div className='mob-2nd-card my-3 text-center bg-white mx-3 p-1'
             data-aos="slide-up" data-aos-duration="400" data-aos-easing="ease-out-sine"
        >
            <div className='mob-card-border'>
            <div className='bluish md seven my-2 mx-3 mt-3'> APPLICATION<br/> DEVELOPMENT<br/> </div>
            <div className='bluish sm mx-3 my-3'> View More <AiOutlineArrowRight className="orange sm" /></div>
            </div>
        </div>
        <div className='mob-2nd-card my-3 text-center bg-white mx-3 p-1'
             data-aos="slide-up" data-aos-duration="400" data-aos-easing="ease-out-sine"
        >
            <div className='mob-card-border'>
            <div className='bluish md seven my-2 mx-3 mt-3'> GRAPHIC<br/> DESIGNING<br/> </div>
            <div className='bluish sm mx-3 my-3'> View More <AiOutlineArrowRight className="orange sm" /></div>
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
  </div>);
};

export default MBGlobalService;
