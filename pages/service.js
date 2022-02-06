import React, { useEffect, useState } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap'
import { AiFillCalendar } from "react-icons/ai";
import { ImInstagram } from 'react-icons/im'
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaUserAlt } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import aos from 'aos'

const service = () => {

    const [boxHover1, setBoxHover1] = useState(false);

    useEffect(() => {
        aos.init();
    }, []);

    return (
        <div style={{ overflowX: "hidden", width:"100%" }}>
        <div className='mobileView'>
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
        </div>
            <div className='blue-gradient-bg PC-View'>
                <Container>
                    <Row style={{ width: "100%" }}>
                        <Col md={6} className='py-5'>
                            <div className='hero-text text-end'>
                                <h1 className='white four xxl'>
                                    Imagination, Ideation<br /> & Innovation,<br /> <span className='orange'>everything is<br /> possible!</span>
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
            <div>
                <Container>
                    <Row>
                        <Col md={4}  data-aos="fade-up" data-aos-duration="700" data-aos-once={true} data-aos-easing="ease-out-sine">
                            <div className='left-menu mt-3'>
                                <div className='left-menu-item-blue'> Globat IT Services </div>
                                <div className='left-menu-item-white'> <FaUserAlt className='left-menu-icon' /> IT Asset Recovery </div>
                                <div className='left-menu-item-white'> <FaUserAlt className='left-menu-icon' /> Rollout and Migration </div>
                                <div className='left-menu-item-white'> <FaUserAlt className='left-menu-icon' /> Field Engineering </div>
                                <div className='left-menu-item-white'> <FaUserAlt className='left-menu-icon' /> On-Site Resources </div>
                                <div className='left-menu-item-white'> <FaUserAlt className='left-menu-icon' /> On-Site Resources </div>
                            </div>
                        </Col>
                        <Col md={8}>
                            <div className='PC-View grey-bg px-5 py-3 mt-3'>
                                <h1 className='four'><span className='bluish'>IT Rollout & Migration</span></h1>
                                <p className='sm-2 mt-4'>
                                    From changing the operating system platform or the middleware
                                    infrastructure to changing the version of the software solutions used, e-mail migration
                                    to moving to a data center: IT infrastructures are subject to constant change. Life
                                    cycles of only three to five years are not uncommon. This entails a large number of
                                    complex migration and IT rollout projects - some with strong interdependencies. IT
                                    rollout projects - some with strong interdependencies.
                                </p>
                            </div>
                            <div className='mobileView grey-bg px-5 py-3 mt-3 text-center'>
                                <h1 className='six md'><span className='bluish'>IT Rollout & Migration</span></h1>
                                <p className='sm mt-4'>
                                    From changing the operating system platform or the middleware
                                    infrastructure to changing the version of the software solutions used, e-mail migration
                                    to moving to a data center: IT infrastructures are subject to constant change. Life
                                    cycles of only three to five years are not uncommon. This entails a large number of
                                    complex migration and IT rollout projects - some with strong interdependencies. IT
                                    rollout projects - some with strong interdependencies.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='mobileView'>
            <div className='servicesBox my-3 mx-5 text-center'  data-aos="fade-in" data-aos-once={true} data-aos-duration="800" data-aos-easing="ease-out-sine">
                <div className='blue-bg' style={{minHeight:"2px"}}></div>
                <div className='orange-bg p-4 mt-2'>
                    <AiFillCalendar className='xxl white'/>
                </div>
                <h1 className='mt-4'>THE CHALLENGES</h1>
                <p className='m-grey mt-2'>A successful completion of rollout and migration projects can only be guaranteed through well-planned and organized IT project management: in time, in budget and in quality .</p>
                <p className='m-grey'>Central challenges are among others</p>
                <p className='m-grey'>Complete recording of all relevant framework conditions and dependencies (e.g. application compatibility)</p>
                <p className='m-grey'>Clear distribution of competencies and responsibilities for the affected components of the IT rollout</p>
                <p className='m-grey'>Clean documentation for later operation</p>
                <p className='m-grey'>Ensuring the acceptance of the affected and involved employees</p>
                <div className='blue-bg mt-3' style={{minHeight:"2px"}}></div>
                <h1 className='mt-4'>BEST SOLUTION TO THE CHALLENGES</h1>
                <div className='blue-bg mt-3' style={{minHeight:"2px"}}></div>
                <p className='m-grey mt-2'>A successful completion of rollout and migration projects can only be guaranteed through well-planned and organized IT project management: in time, in budget and in quality.</p>
                <p className='m-grey'>Central challenges are among others</p>
                <p className='m-grey'>Complete recording of all relevant framework conditions and dependencies (e.g. application compatibility)</p>
            </div>
            </div>
            <div className='PC-View'>
                <Container style={{ overflowX: "hidden", overflowY: "hidden" }}>
                    <Row data-aos="slide-right" data-aos-once={true} data-aos-duration="800" data-aos-easing="ease-out-sine">
                        <Col className='my-5' md={4}>
                            <Row>
                                <Col xs={1} md={1}>
                                    <div className='blue-verticle-line-desc bluish'></div>
                                </Col>
                                <Col xs={10} md={10} className='orange-verticle-line-desc'>
                                    <div className='text-center'> <AiFillCalendar className='white xxxl asset-desc' /> </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={8} className='my-5'>
                            <h2>THE CHALLENGES</h2>
                            <p className='my-3 four m-grey sm-2'>
                                A successful completion of rollout and migration projects can 
                                only be guaranteed through well-planned and organized IT 
                                project management: in time, in budget and in quality .
                            </p>
                            <p className='m-grey '>
                                 Central challenges are among others
                            </p>
                            <p className='m-grey '> 
                                 Complete recording of all relevant framework conditions and 
                                dependencies (e.g. application compatibility)
                            </p>
                            <p className='m-grey '>
                                 Clear distribution of competencies and responsibilities for the 
                                affected components of the IT rollout
                            </p>
                            <p className='m-grey '>
                                 Clean documentation for later operation
                            </p>
                            <p className='m-grey '>  
                                 Ensuring the acceptance of the affected and involved 
                                employees
                            </p>
                            <Row>
                                <Col>
                                    <div className='line my-4'></div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row data-aos="slide-left" data-aos-once={true} data-aos-duration="800" data-aos-easing="ease-out-sine">
                        <Col md={8} className='my-5'>
                            <h2 className=' mx-5'>BEST SOLUTION TO THE CHALLENGES</h2>
                            <p className='my-3 four m-grey sm-2 mx-5'>
                            A successful completion of rollout and migration projects can 
                            only be guaranteed through well-planned and organized IT 
                            project management: in time, in budget and in quality .</p>

                            <p className='four m-grey sm-2 mx-5'>  Central challenges are among others </p>

                            <p className='four m-grey sm-2 mx-5'>  Complete recording of all relevant framework conditions and 
                            dependencies (e.g. application compatibility)</p>
                            <Row>
                                <Col>
                                    <div className='line-2 my-4'></div>
                                </Col>
                            </Row>
                        </Col>
                        <Col className='my-5' md={4}>
                            <Row>
                                <Col xs={10} md={10} className='orange-verticle-line-right'>
                                    <div className='text-center'> <AiFillCalendar className='white xxxl asset-right' /> </div>
                                </Col>
                                <Col xs={1} md={1}>
                                    <div className='blue-verticle-line-right bluish'></div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='mobileView orange-bg m-3 p-3'>
            <h2 className='text-center white'>The First Thing We Do Is Build A Relationship</h2>
                <p className='text-center white mx-3 mt-3'>
                    Whether your employee is having issues, we are just a phone call away.<br/>Let us focus on keeping your IT infrastructure
                    running smoothly,<br/>so you can focus on running your business with a new piece of mind.
                </p>
                <div className='text-center'>
                    <button className='touch-btn'>Get In Touch</button>
                </div>
            </div>
            <div className='PC-View orange-bg m-3 p-5'>
                <h2 className='text-center white'>The First Thing We Do Is Build A Relationship</h2>
                <p className='text-center white mx-5 mt-3'>
                    Whether your employee is having issues, we are just a phone call away.<br/>Let us focus on keeping your IT infrastructure
                    running smoothly,<br/>so you can focus on running your business with a new piece of mind.
                </p>
                <div className='text-center'>
                    <button className='touch-btn'>Get In Touch</button>
                </div>
            </div>

            <div className='footer-normal px-5 pt-4 pb-5'>
                <Row>
                    <Col>
                        <div className='white five sm-2' style={{ cursor: "pointer", width: "90px" }}>About Us</div>
                        <div className='white five sm-2' style={{ cursor: "pointer", width: "50px" }}>Services</div>
                    </Col>
                    <Col>
                        <div className='white five sm-2' style={{ cursor: "pointer", width: "100px", float: "right" }}>
                            <div >Follow Us</div>
                            <span ><FaFacebookSquare /> </span>
                            <span ><FaTwitterSquare /> </span>
                            <span ><FaLinkedin /> </span>
                            <span ><ImInstagram /> </span>
                        </div>
                    </Col>
                </Row>
                <Row className='my-1'></Row>
            </div>
            <div className='footerBlack-normal p-2'><div className='white text-center'>2022 Ziknos, All Rights Reserved</div></div>
        </div>
    );
};

export default service;
