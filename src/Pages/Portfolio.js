import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
import Navbar from './Navbar'; // Assuming Navbar is in the same directory. Adjust the path if necessary.
import Footer from './Footer'; 

function Portfolio() {
    return (
        <Fragment>


            <Navbar />

            <section class="portfolio_background" style={{height:"70vh"}}>
        
        <div class="container">
            <div class="row">
                <div class="col-12 offset-md-1 col-md-11">
                    <div class="swiper-container hero-slider">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide slide-content d-flex align-items-center">
                                {/* <div class="single-slide">
                                    <h1 data-aos="fade-right" data-aos-delay="200">Creative<br/> Multipurpose websites
                                    </h1>
                                    <p data-aos="fade-right" data-aos-delay="600">Crafted by innovative creators for
                                        Expecting
                                        Peoples’s predefined dummy text<br/> chunks as necessary, making this the first.
                                    </p>
                                    <a data-aos="fade-right" data-aos-delay="900" href="#" class="btn btn-primary">See
                                        More</a>
                                    <a data-aos="fade-right" data-aos-delay="900" href="#" class="btn btn-primary">Get
                                        Now</a>
                                </div> */}
                            </div>
                            {/* <div class="swiper-slide slide-content d-flex align-items-center">
                                <div class="single-slide">
                                    <h1 data-aos="fade-right" data-aos-delay="200">Creative<br/> Multipurpose websites
                                    </h1>
                                    <p data-aos="fade-right" data-aos-delay="600">Crafted by innovative creators for
                                        Expecting
                                        Peoples’s predefined dummy text<br/> chunks as necessary, making this the first.
                                    </p>
                                    <a data-aos="fade-right" data-aos-delay="900" href="#" class="btn btn-primary">See
                                        More</a>
                                    <a data-aos="fade-right" data-aos-delay="900" href="#" class="btn btn-primary">Get
                                        Now</a>
                                </div>
                            </div> */}
                        </div>

                    </div>
                </div>
            </div>

            {/* <span class="arr-left"><i class="fa fa-angle-left"></i></span>
            <span class="arr-right"><i class="fa fa-angle-right"></i></span> */}
        </div>
        <div class="texture"></div>
        <div class="diag-bg"></div>
    </section>



    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-5 mb-5">
            <h1 className="text-center">Portfolio</h1>
            <p>What is a basic definition of text? Text is the exact, original words written by an author. Text is also a specific work as written by the original author. Text is also commonly used to refer to a text message or to send a text message. Text has several other senses as a noun.</p>
            <div className="row">
              <div className="col-md-4">
                <Link to="/web_development">
                  <div className="image-container">
                    <img className="img-fluid" src="/assets/images/webdev.jpeg" alt="Gallery 4" style={{ width: "100%", height: "auto" }} />
                    <div className="overlay">
                      <p>Web Development</p>
                    </div>
                  </div>
                </Link>
                <Link to="/app_development">
                  <div className="image-container">
                    <img className="img-fluid" src="/assets/images/appdeve.jpg" alt="Gallery 5" style={{ width: "100%", height: "auto" }} />
                    <div className="overlay">
                      <p>App Development</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-4">
                <Link to="/digital_marketing">
                  <div className="image-container">
                    <img className="img-fluid" src="/assets/images/digital_marketing.jpeg" alt="Gallery 3" style={{ width: "100%", height: "45vh" }} />
                    <div className="overlay">
                      <p>Digital Marketing</p>
                    </div>
                  </div>
                </Link>
                <Link to="/uiux_design">
                  <div className="image-container">
                    <img className="img-fluid" src="/assets/images/UIUX.jpg" alt="Gallery 5" style={{ width: "100%", height: "auto" }} />
                    <div className="overlay">
                      <p>UI/UX Design</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-4">
                <Link to="/brand_identity">
                  <div className="image-container">
                    <img className="img-fluid" src="/assets/images/brandidentity.jpg" alt="Gallery 1" style={{ width: "100%", height: "auto" }} />
                    <div className="overlay">
                      <p>Brand Identity</p>
                    </div>
                  </div>
                </Link>
                <Link to="/graphic_design">
                  <div className="image-container">
                    <img className="img-fluid" src="/assets/images/graphic.jpg" alt="Gallery 2" style={{ width: "100%", height: "auto" }} />
                    <div className="overlay">
                      <p>Graphic Design</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>




    
            <Footer />
        </Fragment>
    );
}

export default Portfolio;
