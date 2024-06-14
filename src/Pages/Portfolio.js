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
                    <img className="img-fluid" src="/assets/images/webdev.jpeg" alt="Gallery 4" style={{ width: "100%", height: "50vh" }} />
                    <div className="overlay">
                      <p>Web Development</p>
                    </div>
                  </div>
                </Link>
                <Link to="/app_development">
                  <div className="image-container">
                    <img className="img-fluid" src="/assets/images/appdeve.jpg" alt="Gallery 5" style={{ width: "100%", height: "80vh" }} />
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
                    <img className="img-fluid" src="/assets/images/UIUX.jpg" alt="Gallery 5" style={{ width: "100%", height: "70vh" }} />
                    <div className="overlay">
                      <p>UI/UX Design</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-4">
                <Link to="/brand_identity">
                  <div className="image-container">
                    <img className="img-fluid" src="/assets/images/brandidentity.jpg" alt="Gallery 1" style={{ width: "100%", height: "70vh" }} />
                    <div className="overlay">
                      <p>Brand Identity</p>
                    </div>
                  </div>
                </Link>
                <Link to="/graphic_design">
                  <div className="image-container">
                    <img className="img-fluid" src="/assets/images/graphic.jpg" alt="Gallery 2" style={{ width: "100%", height: "45vh" }} />
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




    {/* <section>
    <div class="untree_co-section pb-0" id="home-section">
    <div class="container">
      <div class="row justify-content-center text-center">
        <div class="col-md-7">
          <h1 class="heading gsap-reveal-hero "><strong>Minimal<span class="text-primary">.</span> Portfolio</strong></h1>
          <h2 class="subheading gsap-reveal-hero mb-4">
            A minimal, clean, and AJAX driven free portfolio template created by the fine folks at <strong>Untree.co</strong>. Read our <a href="https://untree.co/license" target="_blank">template license</a> here.
          </h2>
          <p class="gsap-reveal-hero"><a href="https://untree.co/" target="_blank" class="btn btn-outline-black">More free templates here</a></p>    
        </div>
      </div>
      
    </div>
  </div>


  <div class="untree_co-section untree_co-section-4 pb-0"  id="portfolio-section">
    <div class="container">


      <div class="relative"><div class="loader-portfolio-wrap"><div class="loader-portfolio"></div></div> </div>
      <div id="portfolio-single-holder"></div>

      <div class="portfolio-wrapper">

        <div id="posts" class="row">

          <div class="item web branding col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
            <a href="portfolio-single-1.html" class="portfolio-item ajax-load-page isotope-item gsap-reveal-img" data-id="1">
              <div class="overlay">
                <span class="wrap-icon icon-link2"></span>
                <div class="portfolio-item-content">
                  <h3>Obsessed Book</h3>
                  <p>web, branding</p>
                </div>
              </div>
              <img src="assets/images/gallery2.jpg" class="lazyload  img-fluid" alt="Images" />
            </a>
          </div>

          <div class="item web branding col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
            <a href="portfolio-single-2.html" class="portfolio-item ajax-load-page isotope-item gsap-reveal-img" data-id="2">
              <div class="overlay">
                <span class="wrap-icon icon-link2"></span>
                <div class="portfolio-item-content">
                  <h3>Book Binding</h3>
                  <p>illustration, application</p>
                </div>
              </div>
              <img src="assets/images/gallery2.jpg" class="lazyload  img-fluid" alt="Images" />
            </a>
          </div>

          <div class="item web branding col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
            <a href="portfolio-single-3.html" class="portfolio-item ajax-load-page isotope-item gsap-reveal-img" data-id="3">
              <div class="overlay">
                <span class="wrap-icon icon-link2"></span>
                <div class="portfolio-item-content">
                  <h3>Fresh Fruits</h3>
                  <p>web, branding</p>
                </div>
              </div>
              <img src="assets/images/gallery2.jpg" class="lazyload  img-fluid" alt="Images" style={{height}}/>
            </a>
          </div>

          <div class="item web branding col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
            <a href="portfolio-single-3.html" class="portfolio-item ajax-load-page isotope-item gsap-reveal-img" data-id="3">
              <div class="overlay">
                <span class="wrap-icon icon-link2"></span>
                <div class="portfolio-item-content">
                  <h3>Powerful Speaker</h3>
                  <p>web, branding</p>
                </div>
              </div>
              <img src="assets/images/gallery2.jpg" class="lazyload  img-fluid" alt="Images" />
            </a>
          </div>

          <div class="item web branding col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
            <a href="portfolio-single-3.html" class="portfolio-item ajax-load-page isotope-item gsap-reveal-img" data-id="3">
              <div class="overlay">
                <span class="wrap-icon icon-link2"></span>
                <div class="portfolio-item-content">
                  <h3>Wireless Headset</h3>
                  <p>web, branding</p>
                </div>
              </div>
              <img src="assets/images/gallery2.jpg" class="lazyload  img-fluid" alt="Images" />
            </a>
          </div>


          <div class="item web branding col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
            <a href="portfolio-single-1.html" class="portfolio-item ajax-load-page isotope-item gsap-reveal-img" data-id="1">
              <div class="overlay">
                <span class="wrap-icon icon-link2"></span>
                <div class="portfolio-item-content">
                  <h3>Black & White Cubic</h3>
                  <p>web, branding</p>
                </div>
              </div>
              <img src="assets/images/gallery2.jpg" class="lazyload  img-fluid" alt="Images" />
            </a>
          </div>

          <div class="item web branding col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
            <a href="portfolio-single-2.html" class="portfolio-item ajax-load-page isotope-item gsap-reveal-img" data-id="2">
              <div class="overlay">
                <span class="wrap-icon icon-link2"></span>
                <div class="portfolio-item-content">
                  <h3>Nike Shoe</h3>
                  <p>illustration, application</p>
                </div>
              </div>
              <img src="assets/images/gallery2.jpg" class="lazyload  img-fluid" alt="Images" />
            </a>
          </div>

          <div class="item web branding col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
            <a href="portfolio-single-3.html" class="portfolio-item ajax-load-page isotope-item gsap-reveal-img" data-id="3">
              <div class="overlay">
                <span class="wrap-icon icon-link2"></span>
                <div class="portfolio-item-content">
                  <h3>Old Typewriter</h3>
                  <p>web, branding</p>
                </div>
              </div>
              <img src="assets/images/gallery2.jpg" class="lazyload  img-fluid" alt="Images" />
            </a>
          </div>

          <div class="item web branding col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
            <a href="portfolio-single-3.html" class="portfolio-item ajax-load-page isotope-item gsap-reveal-img" data-id="3">
              <div class="overlay">
                <span class="wrap-icon icon-link2"></span>
                <div class="portfolio-item-content">
                  <h3>Walking Man</h3>
                  <p>web, branding</p>
                </div>
              </div>
              <img src="assets/images/gallery2.jpg" class="lazyload  img-fluid" alt="Images" />
            </a>
          </div>

          <div class="item web branding col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
            <a href="portfolio-single-3.html" class="portfolio-item ajax-load-page isotope-item gsap-reveal-img" data-id="3">
              <div class="overlay">
                <span class="wrap-icon icon-link2"></span>
                <div class="portfolio-item-content">
                  <h3>Progress Journal</h3>
                  <p>web, branding</p>
                </div>
              </div>
              <img src="assets/images/gallery2.jpg" class="lazyload  img-fluid" alt="Images" />
            </a>
          </div>

          <div class="item web branding col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
            <a href="portfolio-single-3.html" class="portfolio-item ajax-load-page isotope-item gsap-reveal-img" data-id="3">
              <div class="overlay">
                <span class="wrap-icon icon-link2"></span>
                <div class="portfolio-item-content">
                  <h3>The Dog</h3>
                  <p>web, branding</p>
                </div>
              </div>
              <img src="assets/images/gallery2.jpg" class="lazyload  img-fluid" alt="Images" />
            </a>
          </div>

          <div class="item web branding col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
            <a href="portfolio-single-3.html" class="portfolio-item ajax-load-page isotope-item gsap-reveal-img" data-id="3">
              <div class="overlay">
                <span class="wrap-icon icon-link2"></span>
                <div class="portfolio-item-content">
                  <h3>Beautiful Woman</h3>
                  <p>web, branding</p>
                </div>
              </div>
              <img src="assets/images/gallery2.jpg" class="lazyload  img-fluid" alt="Images" />
            </a>
          </div>

          <div class="item web branding col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
            <a href="portfolio-single-3.html" class="portfolio-item ajax-load-page isotope-item gsap-reveal-img" data-id="3">
              <div class="overlay">
                <span class="wrap-icon icon-link2"></span>
                <div class="portfolio-item-content">
                  <h3>Book Binding</h3>
                  <p>web, branding</p>
                </div>
              </div>
              <img src="assets/images/gallery2.jpg" class="lazyload  img-fluid" alt="Images" />
            </a>
          </div>


        </div>
      </div>


       
      </div>
    </div>
    </section> */}
            <Footer />
        </Fragment>
    );
}

export default Portfolio;
