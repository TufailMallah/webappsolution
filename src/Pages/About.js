import React, { Fragment, useEffect } from "react";
import Navbar from './Navbar'; 
import Footer from './Footer'; 

function About() {
    useEffect(() => {
        // Ensure no overflow on load
        document.body.style.overflowX = 'hidden';
    }, []);

    return (
        <Fragment>
            <Navbar />
            
            <section className="about_background" style={{ height: "70vh", overflow: "hidden" }}>
                <div className="container-fluid p-0">
                    <div className="row no-gutters">
                        <div className="col-12">
                            <div className="swiper-container hero-slider">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide slide-content d-flex align-items-center">
                                        {/* Content for slides can go here */}
                                    </div>
                                    {/* Additional slides can be added here */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="texture"></div>
                <div className="diag-bg"></div>
            </section>

            <section className="about">
                <div className="container">
                    <div className="row mt-5 mb-5">
                        <div className="col-12 mb-5" data-aos="fade-up" data-aos-delay="300">
                            <h1 className="text-center">About Us</h1>
                            <p className="text-center">WebsiteAppSolutions: Turning Ideas into Experiences.</p>
                        </div>
                        <div className="col-md-5 mb-4" data-aos="fade-up" data-aos-delay="0" data-aos-offset="0">
                            <img src="assets/images/about1.jpg" alt="" className="about_img img-fluid" style={{ maxWidth: '100%', height: 'auto' }} />
                        </div>
                        <div className="col-md-7 mt-5" data-aos="fade-left" data-aos-delay="0" data-aos-offset="0">
                            <h3>WHO WE ARE</h3>
                            <p>WebsiteAppSolutions is a dynamic design and branding agency with a global presence. We specialize in crafting thoughtful digital experiences and captivating brand aesthetics that resonate with audiences worldwide.</p>
                            <br />
                            <br />
                            <p>We are WebAppSolution, a design and branding agency with partners worldwide. We design thoughtful digital experiences and beautiful brand aesthetics.</p>
                            <h3>Our Mission</h3>
                            <ul>
                                <li>
                                    <i className="fa-solid fa-circle-check"></i>
                                    Proven Success: At WebsiteAppSolutions, we have a track record of delivering successful software projects.
                                </li>
                                <li>
                                    <i className="fa-solid fa-circle-check"></i>
                                    Global Proficiency: Our global approach integrates diverse perspectives to ensure your software resonates with a universal audience.
                                </li>
                                <li>
                                    <i className="fa-solid fa-circle-check"></i>
                                    Agile Development: Embracing agility in our development processes allows us to make swift and adaptable adjustments to evolving project requirements, ensuring optimal outcomes and client satisfaction.
                                </li>
                            </ul>
                            <p>Join our satisfied clientele who have partnered with us to achieve excellence in software development. Trust WebsiteAppSolutions to bring your ideas to life and create unforgettable experiences for your audience.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="stats-section">
                <div className="container">
                    <div className="row text-center mb-5">
                        <div className="col-md-12 animate__animated animate__fadeInUp">
                            <h1>We always try to understand</h1>
                            <h1>users expectation</h1>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-sm-6 col-md-3 mb-4 animate__animated animate__fadeInUp" data-wow-delay="0.1s">
                            <div className="stat-card">
                                <div className="stat-icon">
                                    <i className="fa fa-check-circle"></i>
                                </div>
                                <h2>980+</h2>
                                <p>Completed Projects</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3 mb-4 animate__animated animate__fadeInUp" data-wow-delay="0.2s">
                            <div className="stat-card">
                                <div className="stat-icon">
                                    <i className="fa fa-heart"></i>
                                </div>
                                <h2>950+</h2>
                                <p>Happy Clients</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3 mb-4 animate__animated animate__fadeInUp" data-wow-delay="0.3s">
                            <div className="stat-card">
                                <div className="stat-icon">
                                    <i className="fa fa-tasks"></i>
                                </div>
                                <h2>780+</h2>
                                <p>Ongoing Projects</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3 mb-4 animate__animated animate__fadeInUp" data-wow-delay="0.4s">
                            <div className="stat-card">
                                <div className="stat-icon">
                                    <i className="fa fa-trophy"></i>
                                </div>
                                <h2>70+</h2>
                                <p>Winning Awards</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-5 mb-5 bg-white text-dark rounded animate__animated animate__fadeInUp" data-wow-delay="0.5s">
                            <div className="contact-section text-dark p-4 rounded">
                                <h3>Have any questions about us?</h3>
                                <p>Don't hesitate to contact us</p>
                                <a href="/contact" className="btn btn-purple">Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </Fragment>
    );
}

export default About;
