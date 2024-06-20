import React, { Fragment } from "react";
import Navbar from "./Navbar"; // Adjust the path based on your actual directory structure
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Fragment>
      {/*  */}
      <Navbar />

      <section className="hero">
        <div className="container mb-2 mt-5">
          <div className="row">
            <div className="col-12 offset-md-1 col-md-11 ">
              <div className="swiper-container hero-slider">
                <div className="swiper-wrapper">
                  <div className="swiper-slide slide-content d-flex align-items-center">
                    <div className="single-slide">
                      <h1 data-aos="fade-right" data-aos-delay="200">
                        WEBSITE APP Sollution
                      </h1>
                      <p data-aos="fade-right" data-aos-delay="600">
                        "Step into a realm of unparalleled IT expertise,where
                        our dedication to excellence is not
                        <br />
                        just a promise but a commitment to building the perfect
                        technological foundation for
                        <br />
                        your business success. Your journey to achievement
                        starts here."
                      </p>
                      <Link
                        data-aos="fade-right"
                        data-aos-delay="900"
                        href="#"
                        className="btn btn-primary"
                      >
                        See More
                      </Link>
                      <Link
                        data-aos="fade-right"
                        data-aos-delay="900"
                        href="#"
                        className="btn btn-primary"
                      >
                        Get Now
                      </Link>
                    </div>
                  </div>
                  <div className="swiper-slide slide-content d-flex align-items-center">
                    <div className="single-slide">
                      <h1 data-aos="fade-right" data-aos-delay="200">
                        WEBSITE APP Sollution
                      </h1>
                      <p data-aos="fade-right" data-aos-delay="600">
                        "Step into a realm of unparalleled IT expertise,where
                        our dedication to excellence is not
                        <br />
                        just a promise but a commitment to building the perfect
                        technological foundation for
                        <br />
                        your business success. Your journey to achievement
                        starts here."
                      </p>
                      <Link
                        data-aos="fade-right"
                        data-aos-delay="900"
                        href="#"
                        className="btn btn-primary"
                      >
                        See More
                      </Link>
                      <Link
                        data-aos="fade-right"
                        data-aos-delay="900"
                        href="#"
                        className="btn btn-primary"
                      >
                        Get Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <span className="arr-left">
            <i className="fa fa-angle-left mb-5"></i>
          </span>
          <span className="arr-right">
            <i className="fa fa-angle-right mb-5"></i>
          </span>
        </div>
        <div className="texture"></div>
        <div className="diag-bg"></div>
      </section>

      <section className="cta" data-aos="fade-up" data-aos-delay="0">
        <div className="container ">
          <div className="cta-content d-xl-flex align-items-center justify-content-around text-center text-xl-left ">
            <div className="content" data-aos="fade-right" data-aos-delay="200">
              <h2>FOR BUILDING THE MODERN WEBSITE</h2>
              <p>
                Packed with all the goodies you can get, Kallyas is our flagship
                premium template.
              </p>
            </div>
            <div
              className="subscribe-btn"
              data-aos="fade-left"
              data-aos-delay="400"
              data-aos-offset="0"
            >
              <Link href="#" className="btn btn-primary">
                Join Newsletter
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <div className="title text-center">
            <h6>Our Speakers</h6>
            <h1 className="title-blue">Why Choose Us</h1>
          </div>
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div
                className="col-sm-6 col-lg-3 media_body m-1"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}
              >
                <div
                  className="media"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="400"
                >
                  {/* <img className="mr-4" src="assets/images/service1.png" alt="Web Development" />  */}
                  <div className="media-body">
                    <h3 className="text-center">Our Requirement</h3>
                    <p>
                      Your vision fuels our creativity. Share your project
                      requirements to transform ideas into reality. Our
                      experienced team listens, understands, and collaborates
                      closely. Let's begin this journey together – share your
                      project details, and we'll craft a digital masterpiece.
                    </p>
                  </div>
                </div>
                <button className="btn btn-primary mb-2">on click</button>
              </div>

              <div
                className="col-sm-6 col-lg-4 media_body m-1"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}
              >
                <div
                  className="media"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="400"
                >
                  {/* <img className="mr-4" src="assets/images/service1.png" alt="Web Development" />  */}
                  <div className="media-body ">
                    <h3 className="text-center">Our Creativity </h3>
                    <p>
                      Embark on a creative journey with us. Our design team is
                      ready to transform your ideas into stunning visuals.
                      Committed to excellence, we create designs that exceed
                      expectations. Let's collaborate and bring your brand to
                      life with innovative concepts and captivating aesthetics.
                    </p>
                  </div>
                </div>
                <br />
                <br />
                <button className="btn btn-primary mb-2">on click</button>
              </div>
              <div
                className="col-sm-6 col-lg-3 media_body m-1"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}
              >
                <div
                  className="media"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="400"
                >
                  {/* <img className="mr-4" src="assets/images/service1.png" alt="Web Development" /> */}
                  <div className="media-body ">
                    <h3 className="text-center ">Develop & Launch</h3>
                    <p>
                      At WebsiteAppSolutions, we specialize in transforming
                      visions into reality through our development expertise. We
                      focus on crafting cutting-edge digital solutions tailored
                      to exceed your expectations, ensuring your digital
                      presence stands out.
                    </p>
                  </div>
                </div>
                {/* <br/> */}
                <button className="btn btn-primary mb-2">on click</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="recent-posts">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title text-center">
                <h6 className="title-primary">about</h6>
                <h1 className="title-blue">Our Services</h1>
                <p className="text-white">
                  We take pride in our work. Our services are crafted to elevate
                  your business and transform your ideas into digital realities
                  that stand out.
                </p>
              </div>
            </div>
            <div className="col-lg-6 ">
              <div
                className="single-rpost d-sm-flex align-items-center"
                data-aos="fade-right"
                data-aos-duration="800"
              >
                <div className="post-content text-sm-right">
                  <time datetime="2019-04-06T13:53">15 Oct, 2019</time>
                  <h3>
                    <Link href="#">Web Development</Link>
                  </h3>
                  <p>
                    WebsiteAppSolutions specializes in crafting exceptional
                    websites designed for online success. With our expertise in
                    development, innovation, and client-centric solutions, we
                    ensure that your digital presence stands out and drives
                    meaningful results.
                  </p>
                  <Link className="post-btn" to="/web_development">
                    <i className="fa fa-arrow-right"></i>
                  </Link>
                </div>
                <div className="post-thumb m-2">
                  <img
                    className="img-fluid"
                    src="/assets/images/webdev.jpeg"
                    alt="Post 1"
                    style={{
                      width: "100%",
                      height: "40vh",
                      borderRadius: "20px",
                      border: "5px solid #ffff",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="single-rpost d-sm-flex align-items-center"
                data-aos="fade-left"
                data-aos-duration="800"
              >
                <div className="post-thumb m-2">
                  <img
                    className="img-fluid"
                    src="/assets/images/appdeve.jpg"
                    alt="Post 1"
                    style={{
                      width: "100%",
                      height: "40vh",
                      borderRadius: "20px",
                      border: "5px solid #ffff",
                    }}
                  />
                </div>
                <div className="post-content">
                  <time datetime="2019-04-06T13:53">15 Oct, 2019</time>
                  <h3>
                    <Link href="#">App Development</Link>
                  </h3>
                  <p>
                    WebsiteAppSolutions: Elevate your brand with our expert
                    application development services. We specialize in
                    delivering tailored innovation with a commitment to
                    excellence, ensuring your digital solutions stand out in
                    today's competitive landscape.
                  </p>
                  <Link className="post-btn" to="/app_development">
                    <i className="fa fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="single-rpost d-sm-flex align-items-center"
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="800"
              >
                <div className="post-content text-sm-right">
                  <time datetime="2019-04-06T13:53">15 Oct, 2019</time>
                  <h3>
                    <Link href="#">UI/UX Design</Link>
                  </h3>
                  <p>
                    WebsiteAppSolutions: enhances user experience (UX) through a
                    seamless blend of aesthetic design and usability, ensuring
                    engaging interactions that delight your audience at every
                    turn.
                  </p>
                  <Link className="post-btn" to="/uiux_design">
                    <i className="fa fa-arrow-right"></i>
                  </Link>
                </div>
                <div className="post-thumb m-2">
                  <img
                    className="img-fluid"
                    src="/assets/images/UIUX.jpg"
                    alt="Post 1"
                    style={{
                      width: "100%",
                      height: "40vh",
                      borderRadius: "20px",
                      border: "5px solid #ffff",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="single-rpost d-sm-flex align-items-center"
                data-aos="fade-left"
                data-aos-delay="200"
                data-aos-duration="800"
              >
                <div className="post-thumb m-2">
                  <img
                    className="img-fluid"
                    src="/assets/images/graphic.jpg"
                    alt="Post 1"
                    style={{
                      width: "100%",
                      height: "40vh",
                      borderRadius: "20px",
                      border: "5px solid #ffff",
                    }}
                  />
                </div>
                <div className="post-content">
                  <time datetime="2019-04-06T13:53">15 Oct, 2019</time>
                  <h3>
                    <Link href="#">Graphic Desiging</Link>
                  </h3>
                  <p>
                    WebsiteAppSolutions: Where imagination merges with design
                    excellence, sculpting captivating brand visuals that
                    establish an enduring presence in the digital realm.
                  </p>
                  <Link className="post-btn" to="/graphic_design">
                    <i className="fa fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link to="/portfolio" className="btn btn-primary">
              See More
            </Link>
          </div>
        </div>
      </section>

      <section className="trust">
        <div className="container">
          <div className="row ">
            <div
              className=" col-md-6"
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="800"
            >
              <div className="title">
                <h6 className="title-primary">about </h6>
                <h1>Our Portfolio.</h1>
              </div>
              <p>
                "Our diverse portfolio reflects excellence in digital solutions,
                from websites to mobile apps and social media strategies.
                Explore how we craft impactful experiences for businesses like
                yours."
              </p>
              <h5>Web Design & Development</h5>
              <ul className="list-unstyled">
                <li>Web Content</li>
                <li>Website other</li>
                <li>Fashion</li>
                <li>Moblie & Tablette</li>
              </ul>
            </div>
            <div className="col-xl-6 gallery">
              <div className="row no-gutters h-100" id="lightgallery">
                <Link
                  href="https://lorempixel.com/600/400/"
                  className="w-50 h-100 gal-img"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="400"
                >
                  <img
                    className="img-fluid"
                    src="/assets/images/UIUX.jpg"
                    alt="Gallery 1"
                  />
                  <i className="fa fa-caret-right"></i>
                </Link>
                <Link
                  href="https://lorempixel.com/600/400/"
                  className="w-50 h-50 gal-img"
                  data-aos="fade-up"
                  data-aos-delay="400"
                  data-aos-duration="600"
                >
                  <img
                    className="img-fluid"
                    src="/assets/images/graphic.jpg"
                    alt="Gallery 2"
                  />
                  <i className="fa fa-caret-right"></i>
                </Link>
                <Link
                  href="https://lorempixel.com/600/400/"
                  className="w-50 h-50 gal-img gal-img3"
                  data-aos="fade-up"
                  data-aos-delay="0"
                  data-aos-duration="600"
                >
                  <img
                    className="img-fluid"
                    src="/assets/images/brandidentity.jpg"
                    alt="Gallery 3"
                  />
                  <i className="fa fa-caret-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing-table">
        <div className="container">
          <div className="title text-center">
            <h6 className="title-primary">Plans by WebsiteAppSolutions</h6>
            <h1 className="title-blue">WEB Development</h1>
          </div>
          <div className="row no-gutters ">
            <div className="col-md-4">
              <div
                className="single-pricing text-center"
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="600"
              >
                <span>Monthly</span>
                <h2>Basic Plan</h2>
                <p className="desc">Here goes some description</p>
                {/* <p className="price">$39.00</p> */}
                <p>Ideal for startups and small businesses</p>
                <p>Responsive website with up to 5 pages</p>
                <p>Basic design customization</p>
                <p>Contact form integration</p>
                <p>Standard SEO optimization</p>
                <br />
                <br />

                <Link href="#" className="btn btn-primary mb-3">
                  Buy Now
                </Link>
                <svg viewBox="0 0 170 193">
                  <path
                    fill-rule="evenodd"
                    fill="#9604a9"
                    d="M39.000,31.999 C39.000,31.999 -21.000,86.500 9.000,121.999 C39.000,157.500 91.000,128.500 104.000,160.999 C117.000,193.500 141.000,201.000 150.000,183.000 C159.000,165.000 172.000,99.000 167.000,87.000 C162.000,75.000 170.000,63.000 152.000,45.000 C134.000,27.000 128.000,15.999 116.000,11.000 C104.000,6.000 89.000,-0.001 89.000,-0.001 L39.000,31.999 Z"
                  />
                </svg>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="single-pricing text-center"
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-duration="600"
              >
                <span>Monthly</span>
                <h2>Premium Plan</h2>
                <p className="desc">Description goes here</p>
                {/* <p className="price">$39.00</p> */}
                <p>For businesses or e-commerce</p>
                <p>Responsive website with unlimited pages</p>
                <p>Customization and branding</p>
                <p>Integration of advanced features</p>
                <p>SEO optimization</p>
                <p>Content management system (CMS)</p>
                <p>Priority support</p>
                <Link href="#" className="btn btn-primary">
                  Buy Now
                </Link>
                <svg viewBox="0 0 170 193">
                  <path
                    fill-rule="evenodd"
                    fill="#9604a9"
                    d="M39.000,31.999 C39.000,31.999 -21.000,86.500 9.000,121.999 C39.000,157.500 91.000,128.500 104.000,160.999 C117.000,193.500 141.000,201.000 150.000,183.000 C159.000,165.000 172.000,99.000 167.000,87.000 C162.000,75.000 170.000,63.000 152.000,45.000 C134.000,27.000 128.000,15.999 116.000,11.000 C104.000,6.000 89.000,-0.001 89.000,-0.001 L39.000,31.999 Z"
                  />
                </svg>
              </div>
            </div>
            <div
              className="col-md-4"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="600"
            >
              <div className="single-pricing text-center">
                <span>Monthly</span>
                <h2>Standard Plan</h2>
                <p className="desc">Description goes here</p>
                {/* <p className="price">$39.00</p> */}
                <p>For growing businesses</p>
                <p>Responsive website with up to 10 pages</p>
                <p>Custom design tailored to your brand</p>
                <p>
                  Integration of additional features like galleries or sliders
                </p>
                <p>Enhanced SEO optimization</p>
                <p>Basic content management system (CMS)</p>
                <Link href="#" className="btn btn-primary">
                  Buy Now
                </Link>
                <svg viewBox="0 0 170 193">
                  <path
                    fill-rule="evenodd"
                    fill="#9604a9"
                    d="M39.000,31.999 C39.000,31.999 -21.000,86.500 9.000,121.999 C39.000,157.500 91.000,128.500 104.000,160.999 C117.000,193.500 141.000,201.000 150.000,183.000 C159.000,165.000 172.000,99.000 167.000,87.000 C162.000,75.000 170.000,63.000 152.000,45.000 C134.000,27.000 128.000,15.999 116.000,11.000 C104.000,6.000 89.000,-0.001 89.000,-0.001 L39.000,31.999 Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing-table">
        <div className="container">
          <div className="title text-center">
            <h6 className="title-primary">Plans by WebsiteAppSolutions</h6>
            <h1 className="title-blue">Digital Marketing</h1>
          </div>
          <div className="row no-gutters ">
            <div className="col-md-4">
              <div
                className="single-pricing text-center"
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="600"
              >
                <span>Monthly</span>
                <h2>Basic Plan</h2>
                <p className="desc">Here goes some description</p>
                {/* <p className="price">$39.00</p> */}
                <p>Basic SEO optimization</p>
                <p>Social media management (2 platforms)</p>
                <p>Limited content creation (2 posts/month)</p>
                <p>Monthly performance reports</p>
                <br />

                <Link href="#" className="btn btn-primary mb-3">
                  Buy Now
                </Link>
                <svg viewBox="0 0 170 193">
                  <path
                    fill-rule="evenodd"
                    fill="#9604a9"
                    d="M39.000,31.999 C39.000,31.999 -21.000,86.500 9.000,121.999 C39.000,157.500 91.000,128.500 104.000,160.999 C117.000,193.500 141.000,201.000 150.000,183.000 C159.000,165.000 172.000,99.000 167.000,87.000 C162.000,75.000 170.000,63.000 152.000,45.000 C134.000,27.000 128.000,15.999 116.000,11.000 C104.000,6.000 89.000,-0.001 89.000,-0.001 L39.000,31.999 Z"
                  />
                </svg>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="single-pricing text-center"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="600"
              >
                <span>Monthly</span>
                <h2>Premium Plan</h2>
                <p className="desc">Here goes some description</p>
                {/* <p className="price">$39.00</p> */}
                <p>Comprehensive SEO optimization</p>
                <p>Social media management (4 platforms)</p>
                <p>Extensive content creation (8 posts/month)</p>
                <p>Weekly performance reports</p>
                <p>Advanced PPC campaign management</p>
                <p>Customized analytics and strategy sessions</p>
                <Link href="#" className="btn btn-primary">
                  Buy Now
                </Link>
                <svg viewBox="0 0 170 193">
                  <path
                    fill-rule="evenodd"
                    fill="#9604a9"
                    d="M39.000,31.999 C39.000,31.999 -21.000,86.500 9.000,121.999 C39.000,157.500 91.000,128.500 104.000,160.999 C117.000,193.500 141.000,201.000 150.000,183.000 C159.000,165.000 172.000,99.000 167.000,87.000 C162.000,75.000 170.000,63.000 152.000,45.000 C134.000,27.000 128.000,15.999 116.000,11.000 C104.000,6.000 89.000,-0.001 89.000,-0.001 L39.000,31.999 Z"
                  />
                </svg>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="single-pricing text-center"
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-duration="600"
              >
                <span>Monthly</span>
                <h2>Standard Plan</h2>
                <p className="desc">Here goes some description</p>
                {/* <p className="price">$39.00</p> */}
                <p>Advanced SEO optimization</p>
                <p>Social media management (3 platforms)</p>
                <p>Regular content creation (4 posts/month)</p>
                <p>Bi-weekly performance reports</p>
                <p>Basic PPC campaign management</p>

                <Link href="#" className="btn btn-primary">
                  Buy Now
                </Link>
                <svg viewBox="0 0 170 193">
                  <path
                    fill-rule="evenodd"
                    fill="#9604a9"
                    d="M39.000,31.999 C39.000,31.999 -21.000,86.500 9.000,121.999 C39.000,157.500 91.000,128.500 104.000,160.999 C117.000,193.500 141.000,201.000 150.000,183.000 C159.000,165.000 172.000,99.000 167.000,87.000 C162.000,75.000 170.000,63.000 152.000,45.000 C134.000,27.000 128.000,15.999 116.000,11.000 C104.000,6.000 89.000,-0.001 89.000,-0.001 L39.000,31.999 Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing-table">
        <div className="container">
          <div className="title text-center">
            <h6 className="title-primary">Plans by WebsiteAppSolutions</h6>
            <h1 className="title-blue">App Development</h1>
          </div>
          <div className="row no-gutters ">
            <div className="col-md-4">
              <div
                className="single-pricing text-center"
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="600"
              >
                <span>Monthly</span>
                <h2>Basic Plan</h2>
                <p className="desc">Here goes some description</p>
                {/* <p className="price">$39.00</p> */}
                <p>Ideal for small businesses or startups</p>
                <p>Simple app development with essential functionalities</p>
                <p>Basic user interface design</p>
                <p>Limited support and maintenance</p>
                <Link href="#" className="btn btn-primary">
                  Buy Now
                </Link>
                <svg viewBox="0 0 170 193">
                  <path
                    fill-rule="evenodd"
                    fill="#9604a9"
                    d="M39.000,31.999 C39.000,31.999 -21.000,86.500 9.000,121.999 C39.000,157.500 91.000,128.500 104.000,160.999 C117.000,193.500 141.000,201.000 150.000,183.000 C159.000,165.000 172.000,99.000 167.000,87.000 C162.000,75.000 170.000,63.000 152.000,45.000 C134.000,27.000 128.000,15.999 116.000,11.000 C104.000,6.000 89.000,-0.001 89.000,-0.001 L39.000,31.999 Z"
                  />
                </svg>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="single-pricing text-center"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="600"
              >
                <span>Monthly</span>
                <h2>Premium Plan</h2>
                <p className="desc">Here goes some description</p>
                {/* <p className="price">$39.00</p> */}
                <p>
                  Designed for established businesses requiring advanced app
                  features
                </p>
                <p>Advanced app development with complex functionalities</p>
                <p>High-quality user interface design with custom animations</p>
                <p>Priority support and ongoing maintenance</p>
                <Link href="#" className="btn btn-primary">
                  Buy Now
                </Link>
                <svg viewBox="0 0 170 193">
                  <path
                    fill-rule="evenodd"
                    fill="#9604a9"
                    d="M39.000,31.999 C39.000,31.999 -21.000,86.500 9.000,121.999 C39.000,157.500 91.000,128.500 104.000,160.999 C117.000,193.500 141.000,201.000 150.000,183.000 C159.000,165.000 172.000,99.000 167.000,87.000 C162.000,75.000 170.000,63.000 152.000,45.000 C134.000,27.000 128.000,15.999 116.000,11.000 C104.000,6.000 89.000,-0.001 89.000,-0.001 L39.000,31.999 Z"
                  />
                </svg>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="single-pricing text-center"
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-duration="600"
              >
                <span>Monthly</span>
                <h2>Standard Plan</h2>
                <p className="desc">Here goes some description</p>
                {/* <p className="price">$39.00</p> */}
                <p>
                  Suitable for businesses seeking a comprehensive app solution
                </p>
                <p>
                  Customized app development with additional functionalities
                </p>
                <p>
                  Enhanced user interface designStandard support and maintenance
                </p>

                <Link href="#" className="btn btn-primary">
                  Buy Now
                </Link>
                <svg viewBox="0 0 170 193">
                  <path
                    fill-rule="evenodd"
                    fill="#9604a9"
                    d="M39.000,31.999 C39.000,31.999 -21.000,86.500 9.000,121.999 C39.000,157.500 91.000,128.500 104.000,160.999 C117.000,193.500 141.000,201.000 150.000,183.000 C159.000,165.000 172.000,99.000 167.000,87.000 C162.000,75.000 170.000,63.000 152.000,45.000 C134.000,27.000 128.000,15.999 116.000,11.000 C104.000,6.000 89.000,-0.001 89.000,-0.001 L39.000,31.999 Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pricing-table">
        <div className="container">
          <div className="title text-center">
            <h6 className="title-primary">Plans by WebsiteAppSolutions</h6>
            <h1 className="title-blue">Graphic Designing</h1>
          </div>
          <div className="row no-gutters">
            <div className="col-md-4">
              <div
                className="single-pricing text-center"
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="600"
              >
                <span>Monthly</span>
                <h2>Basic Plan</h2>
                {/* <p className="price">$39.00</p> */}
                <p>Ideal for startups and small businesses</p>
                <p>Basic logo design</p>
                <p>2 design concepts</p>
                <p>2 revisions</p>
                <Link href="#" className="btn btn-primary">
                  Buy Now
                </Link>
                <svg viewBox="0 0 170 193">
                  <path
                    fill-rule="evenodd"
                    fill="#9604a9"
                    d="M39.000,31.999 C39.000,31.999 -21.000,86.500 9.000,121.999 C39.000,157.500 91.000,128.500 104.000,160.999 C117.000,193.500 141.000,201.000 150.000,183.000 C159.000,165.000 172.000,99.000 167.000,87.000 C162.000,75.000 170.000,63.000 152.000,45.000 C134.000,27.000 128.000,15.999 116.000,11.000 C104.000,6.000 89.000,-0.001 89.000,-0.001 L39.000,31.999 Z"
                  />
                </svg>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="single-pricing text-center"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="600"
              >
                <span>Monthly</span>
                <h2>Premium Plan</h2>
                {/* <p className="price">$39.00</p> */}
                <p>For established businesses</p>
                <p>Premium logo design</p>
                <p>5 design concepts</p>
                <p>Unlimited revisions</p>
                <br />
                <br />
                <Link href="#" className="btn btn-primary">
                  Buy Now
                </Link>
                <svg viewBox="0 0 170 193">
                  <path
                    fill-rule="evenodd"
                    fill="#9604a9"
                    d="M39.000,31.999 C39.000,31.999 -21.000,86.500 9.000,121.999 C39.000,157.500 91.000,128.500 104.000,160.999 C117.000,193.500 141.000,201.000 150.000,183.000 C159.000,165.000 172.000,99.000 167.000,87.000 C162.000,75.000 170.000,63.000 152.000,45.000 C134.000,27.000 128.000,15.999 116.000,11.000 C104.000,6.000 89.000,-0.001 89.000,-0.001 L39.000,31.999 Z"
                  />
                </svg>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="single-pricing text-center"
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-duration="600"
              >
                <span>Monthly</span>
                <h2>Standard Plan</h2>
                {/* <p className="price">$39.00</p> */}
                <p>For growing businesses</p>
                <p>Custom logo design</p>
                <p>3 design concepts</p>
                <p>3 revisions</p>
                <Link href="#" className="btn btn-primary">
                  Buy Now
                </Link>
                <svg viewBox="0 0 170 193">
                  <path
                    fill-rule="evenodd"
                    fill="#9604a9"
                    d="M39.000,31.999 C39.000,31.999 -21.000,86.500 9.000,121.999 C39.000,157.500 91.000,128.500 104.000,160.999 C117.000,193.500 141.000,201.000 150.000,183.000 C159.000,165.000 172.000,99.000 167.000,87.000 C162.000,75.000 170.000,63.000 152.000,45.000 C134.000,27.000 128.000,15.999 116.000,11.000 C104.000,6.000 89.000,-0.001 89.000,-0.001 L39.000,31.999 Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial-and-clients">
        <div className="container">
          <div className="testimonials">
            <div className="swiper-container test-slider">
              <div className="swiper-wrapper">
                <div className="swiper-slide text-center">
                  <div className="row">
                    <div className="offset-lg-1 col-lg-10">
                      <div
                        className="test-img"
                        data-aos="fade-up"
                        data-aos-delay="0"
                        data-aos-offset="0"
                      >
                        <img
                          src="assets/images/test1.png"
                          alt="Testimonial 1"
                        />
                      </div>
                      <h5
                        data-aos="fade-up"
                        data-aos-delay="200"
                        data-aos-duration="600"
                        data-aos-offset="0"
                      >
                        John
                      </h5>
                      <span
                        data-aos="fade-up"
                        data-aos-delay="400"
                        data-aos-duration="600"
                        data-aos-offset="0"
                      >
                        UI/UX Designer
                      </span>
                      <p
                        data-aos="fade-up"
                        data-aos-delay="600"
                        data-aos-duration="600"
                        data-aos-offset="0"
                      >
                        Ash's tactics & books have helped me a lot in my
                        understanding on how social media advertising works.I
                        can say that he is one of the best development
                        professionals i have dealt with so far. His experience
                        is great & he is such a great & pleasant person to work
                        with as he understands what you are
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide text-center">
                  <div className="row">
                    <div className="offset-lg-1 col-lg-10">
                      <div
                        className="test-img"
                        data-aos="fade-up"
                        data-aos-delay="0"
                        data-aos-offset="0"
                      >
                        <img
                          src="assets/images/test1.png"
                          alt="Testimonial 1"
                        />
                      </div>
                      <h5
                        data-aos="fade-up"
                        data-aos-delay="200"
                        data-aos-duration="600"
                        data-aos-offset="0"
                      >
                        John
                      </h5>
                      <span
                        data-aos="fade-up"
                        data-aos-delay="400"
                        data-aos-duration="600"
                        data-aos-offset="0"
                      >
                        UI/UX Designer
                      </span>
                      <p
                        data-aos="fade-up"
                        data-aos-delay="600"
                        data-aos-duration="600"
                        data-aos-offset="0"
                      >
                        Ash's tactics & books have helped me a lot in my
                        understanding on how social media advertising works.I
                        can say that he is one of the best development
                        professionals i have dealt with so far. His experience
                        is great & he is such a great & pleasant person to work
                        with as he understands what you are
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide text-center">
                  <div className="row">
                    <div className="offset-lg-1 col-lg-10">
                      <div
                        className="test-img"
                        data-aos="fade-up"
                        data-aos-delay="0"
                        data-aos-offset="0"
                      >
                        <img
                          src="assets/images/test1.png"
                          alt="Testimonial 1"
                        />
                      </div>
                      <h5
                        data-aos="fade-up"
                        data-aos-delay="200"
                        data-aos-duration="600"
                        data-aos-offset="0"
                      >
                        John
                      </h5>
                      <span
                        data-aos="fade-up"
                        data-aos-delay="400"
                        data-aos-duration="600"
                        data-aos-offset="0"
                      >
                        UI/UX Designer
                      </span>
                      <p
                        data-aos="fade-up"
                        data-aos-delay="600"
                        data-aos-duration="600"
                        data-aos-offset="0"
                      >
                        Ash's tactics & books have helped me a lot in my
                        understanding on how social media advertising works.I
                        can say that he is one of the best development
                        professionals i have dealt with so far. His experience
                        is great & he is such a great & pleasant person to work
                        with as he understands what you are
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta cta2" data-aos="fade-up" data-aos-delay="0">
        <div className="container">
          <div className="cta-content d-xl-flex align-items-center justify-content-around text-center text-xl-left">
            <div className="content" data-aos="fade-right" data-aos-delay="200">
              <h2>FOR BUILDING THE MODERN WEBSITE</h2>
              <p>
                Packed with all the goodies you can get, Kallyas is our flagship
                premium template.
              </p>
            </div>
            <div
              className="subscribe-btn"
              data-aos="fade-left"
              data-aos-delay="400"
              data-aos-offset="0"
            >
              <Link href="#" className="btn btn-primary">
                Join Newsletter
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
}

export default Home;
