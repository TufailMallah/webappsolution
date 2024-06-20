import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnet,
  faBezierCurve,
  faMobile,
  faDesktop,
  faChartSimple,
  faCodeBranch,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Services() {
  return (
    <Fragment>
      <Navbar />

      <section class="service_background" style={{ height: "70vh" }}>
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
      <div class="container-fluid service py-6 mt-5">
        <div class="container">
          <div
            class="text-center wow bounceInUp animate__animated animate__fadeIn"
            data-wow-delay="0.1s"
          >
            <h1 class="display-5 mb-5">Our Services</h1>
            <p>
              At WebsiteAppSolutions, we take immense pride in our work. Our
              comprehensive range of services is meticulously crafted to elevate
              your business to new heights. We transform your ideas into
              standout digital realities, ensuring that your online presence not
              only meets but exceeds your expectations. By leveraging
              cutting-edge technologies and innovative design principles, we
              create digital solutions that are both functional and visually
              captivating. Let us help you bring your vision to life and make
              your digital footprint truly remarkable.
            </p>
          </div>
          <div class="row g-4 mb-3 mt-5">
            <div
              class="col-lg-4 col-md-6 col-sm-12 wow bounceInUp animate__animated animate__fadeInUp mb-5 text-dark"
              data-wow-delay="0.1s"
            >
              <div class="bg-light service-item">
                <div class="service-content d-flex flex-column p-4 mb-5">
                  <div class="service-content-icon text-center">
                    <FontAwesomeIcon icon={faDesktop} className="custom-icon" />
                    <h4 class="mb-3">Website Development</h4>
                    <p class="mb-4">
                      Crafting exceptional websites that elevate your brand. Our
                      focus on innovation ensures online success, driving
                      meaningful audience engagement and setting you apart in
                      the digital realm.
                    </p>
                  </div>
                  {/* <a href="#" class="btn-primary px-4 py-2  read-more-btn">Read More</a> */}
                  <Link
                    className=" btn btn-primary px-4 py-2  read-more-btn"
                    to="/web_development"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div
              class="col-lg-4 col-md-6 col-sm-12 wow bounceInUp animate__animated animate__fadeInUp mb-5 text-dark"
              data-wow-delay="0.3s"
            >
              <div class="bg-light service-item">
                <div class="service-content d-flex flex-column p-4 mb-5">
                  <div class="service-content-icon text-center">
                    <FontAwesomeIcon
                      icon={faChartSimple}
                      className="custom-icon"
                    />
                    <h4 class="mb-3">Digital Marketing</h4>
                    <p class="mb-4">
                      Excel in elevating your brand through strategic digital
                      solutions. Trust us for tangible results in dominating the
                      online sphere and boosting your brand's presence.
                    </p>
                  </div>
                  <Link
                    className=" btn btn-primary px-4 py-2  read-more-btn"
                    to="/digital_marketing"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div
              class="col-lg-4 col-md-6 col-sm-12 wow bounceInUp animate__animated animate__fadeInUp mb-5 text-dark"
              data-wow-delay="0.5s"
            >
              <div class="bg-light service-item">
                <div class="service-content d-flex flex-column p-4 mb-5">
                  <div class="service-content-icon text-center">
                    <FontAwesomeIcon icon={faMobile} className="custom-icon" />
                    <h4 class="mb-3">Mobile App Development</h4>
                    <p class="mb-4">
                      Your partner for expert application development,
                      delivering tailored innovation to set your brand apart and
                      drive success in the digital market.
                    </p>
                  </div>
                  <Link
                    className="btn btn-primary px-4 py-2  read-more-btn"
                    to="/app_development"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div
              class="col-lg-4 col-md-6 col-sm-12 wow bounceInUp animate__animated animate__fadeInUp mb-5 text-dark"
              data-wow-delay="0.1s"
            >
              <div class="bg-light service-item">
                <div class="service-content d-flex flex-column p-4 mb-5">
                  <div class="service-content-icon text-center ">
                    <FontAwesomeIcon
                      icon={faCodeBranch}
                      className="custom-icon"
                    />
                    <h4 class="mb-3">Brand Identity</h4>
                    <p class="mb-4">
                      Crafting captivating identities that set you apart in the
                      digital landscape. Let's collaborate for an unforgettable
                      brand identity that leaves a lasting impact.
                    </p>
                  </div>
                  <Link
                    className="btn btn-primary px-4 py-2  read-more-btn"
                    to="/brand_identity"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div
              class="col-lg-4 col-md-6 col-sm-12 wow bounceInUp animate__animated animate__fadeInUp mb-5 text-dark"
              data-wow-delay="0.3s"
            >
              <div class="bg-light service-item">
                <div class="service-content d-flex flex-column p-4 mb-5">
                  <div class="service-content-icon text-center">
                    <FontAwesomeIcon
                      icon={faBezierCurve}
                      className="custom-icon"
                    />
                    <h4 class="mb-3">Graphic Designing</h4>
                    <p class="mb-4">
                      Crafting captivating visuals that leave a lasting
                      impression and set your brand apart in today's competitive
                      landscape, ensuring your brand stands out.
                    </p>
                  </div>
                  <Link
                    className=" btn btn-primary px-4 py-2  read-more-btn"
                    to="/graphic_design"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div
              class="col-lg-4 col-md-6 col-sm-12 wow bounceInUp animate__animated animate__fadeInUp mb-5 text-dark"
              data-wow-delay="0.5s"
            >
              <div class="bg-light service-item">
                <div class="service-content d-flex flex-column p-4 mb-5">
                  <div class="service-content-icon text-center">
                    <FontAwesomeIcon icon={faMagnet} className="custom-icon" />
                    <h4 class="mb-3">UI/UX Design</h4>
                    <p class="mb-4">
                      Elevate user experience with our unmatched expertise,
                      crafting engaging solutions that not only meet but exceed
                      user expectations, setting your brand apart from the
                      competition.
                    </p>
                  </div>
                  <Link
                    className="btn btn-primary px-4 py-2  read-more-btn"
                    to="/uiux_design"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <section class="pricing-table">
    <div class="container">
        <div class="title text-center">
            <h6 class="title-primary">Our prices</h6>
            <h1 class="title-blue">Price Table List</h1>
        </div>
        <div class="row no-gutters ">
            <div class="col-md-4">
                <div class="single-pricing text-center" data-aos="fade-up" data-aos-delay="0"
                    data-aos-duration="600">
                    <span>Monthly</span>
                    <h2>Starter</h2>
                    <p class="desc">Here goes some description</p>
                    <p class="price">$39.00</p>
                    <p>Create excepteur sint occaecat cupidatat non proident</p>
                    <a href="#" class="btn btn-primary">Buy Now</a>
                    <svg viewBox="0 0 170 193">
                        <path fill-rule="evenodd" fill="#9604a9" d="M39.000,31.999 C39.000,31.999 -21.000,86.500 9.000,121.999 C39.000,157.500 91.000,128.500 104.000,160.999 C117.000,193.500 141.000,201.000 150.000,183.000 C159.000,165.000 172.000,99.000 167.000,87.000 C162.000,75.000 170.000,63.000 152.000,45.000 C134.000,27.000 128.000,15.999 116.000,11.000 C104.000,6.000 89.000,-0.001 89.000,-0.001 L39.000,31.999 Z" />
                    </svg>
                </div>
            </div>
            <div class="col-md-4">
                <div class="single-pricing text-center" data-aos="fade-up" data-aos-delay="300"
                    data-aos-duration="600">
                    <span>Monthly</span>
                    <h2>Starter</h2>
                    <p class="desc">Here goes some description</p>
                    <p class="price">$39.00</p>
                    <p>5GB Storage Space</p>
                    <p>20GB Monthly Bandwidth</p>
                    <p>My SQL Databases</p>
                    <p>100 Email Account</p>
                    <a href="#" class="btn btn-primary">Buy Now</a>
                    <svg viewBox="0 0 170 193">
                        <path fill-rule="evenodd"  fill="#9604a9" d="M39.000,31.999 C39.000,31.999 -21.000,86.500 9.000,121.999 C39.000,157.500 91.000,128.500 104.000,160.999 C117.000,193.500 141.000,201.000 150.000,183.000 C159.000,165.000 172.000,99.000 167.000,87.000 C162.000,75.000 170.000,63.000 152.000,45.000 C134.000,27.000 128.000,15.999 116.000,11.000 C104.000,6.000 89.000,-0.001 89.000,-0.001 L39.000,31.999 Z" />
                    </svg>
                </div>
            </div>
            <div class="col-md-4">
                <div class="single-pricing text-center" data-aos="fade-up" data-aos-delay="600"
                    data-aos-duration="600">
                    <span>Monthly</span>
                    <h2>Starter</h2>
                    <p class="desc">Here goes some description</p>
                    <p class="price">$39.00</p>
                    <p>Create excepteur sint occaecat cupidatat non proident</p>
                    <a href="#" class="btn btn-primary">Buy Now</a>
                    <svg viewBox="0 0 170 193">
                        <path fill-rule="evenodd"  fill="#9604a9" d="M39.000,31.999 C39.000,31.999 -21.000,86.500 9.000,121.999 C39.000,157.500 91.000,128.500 104.000,160.999 C117.000,193.500 141.000,201.000 150.000,183.000 C159.000,165.000 172.000,99.000 167.000,87.000 C162.000,75.000 170.000,63.000 152.000,45.000 C134.000,27.000 128.000,15.999 116.000,11.000 C104.000,6.000 89.000,-0.001 89.000,-0.001 L39.000,31.999 Z" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
</section> */}
      <Footer />
    </Fragment>
  );
}

export default Services;
