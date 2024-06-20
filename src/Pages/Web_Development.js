import React, { Fragment } from "react";
import Navbar from './Navbar';
import Footer from './Footer'; 
 

function Web_Development() {

    return(
        <Fragment>
        <Navbar />

<section class="webdev_background" style={{ height: "70vh", display: "flex", alignItems: "center" }}>
    <div className="container">
        <div className="row mt-5">
            <div className="col-12  col-md-11 ">
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                    <h1 style={{ textAlign: "center" }}>Website Development</h1>
                </div>
            </div>
        </div>
    </div>
</section>
   <section>
      <div className="container">
        <div className="row m-5">
          <div className="col-md-12">
            <h1 className="text-center">Website Development</h1>
          </div>
          <div className="row mt-5 justify-content-center">
            <div className="col-md-8 ">
              <div className="row mb-4 mr-3">
                <div className="col-12 custom-bg-1 custom-border-radius p-3 mb-4 ">
                  <h3>Services Description</h3>
                  <p>At Website App Solutions, we transcend mere website creation; we architect online experiences that leave a lasting impression.</p>
                </div>
                <div className="col-12 custom-bg-2 custom-border-radius p-3">
                  <h3>Tailored Solutions</h3>
                  <p>Our website development services are customized to your unique needs. Whether you're a startup, a growing business, or an established enterprise, we possess the expertise to construct a website that mirrors your brand identity and resonates with your target audience.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 custom-bg-3 custom-border-radius p-3">
              <h3>Responsive Design</h3>
              <p>In an era of diverse devices, we prioritize responsive design. Your website seamlessly adapts to various screen sizes, ensuring an optimal user experience across desktops, tablets, and mobiles.</p>
            </div>
          </div>




          <div className="row mt-5">
            <div className="col-md-12 custom-bg-1 custom-border-radius p-3">
              {/* <h3>Scalability and Future-Proofing</h3> */}
              <p>Begin your digital journey with Website App Solutions, where each line of code propels you toward online success. Let our website development services serve as the cornerstone of your digital strategy, converting visitors into customers and ideas into reality.</p>
            </div>
          </div>



          <div className="row mt-5">
            <div className="col-md-4 custom-bg-3 custom-border-radius p-3 mb-4">
              <h3>E-commerce Excellence</h3>
              <p>Unleash the full potential of online retail with our e-commerce development expertise. We construct secure, user-friendly platforms that facilitate seamless transactions, enrich customer engagement, and drive sales.</p>
            </div>
            <div className="col-md-8 ">
              <div className="row mb-4 ml-3">
                <div className="col-12 custom-bg-1 custom-border-radius p-3 mb-4 ">
                  <h3>Content Management Systems (CMS)</h3>
                  <p>Take charge of your content with our user-friendly CMS solutions. Effortlessly update and manage your website, with our guidance ensuring you harness the full potential of these robust tools.</p>
                </div>
                <div className="col-12 custom-bg-2 custom-border-radius p-3">
                  <h3>Security Assurance</h3>
                  <p>Security is paramount for your website. From fortified payment gateways to comprehensive data protection measures, we implement robust security protocols to safeguard your online presence.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>

    <section className="uiux-section">
      <div className="container">
        <div className="row m-5">
          {/* Empty row for spacing */}
        </div>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="row mt-2">
              <div className="col-md-6 mb-4">
                <div className="image-container">
                  <img
                    src="/assets/images/web4.jpg"
                    alt="UI/UX Design"
                    className="img-fluid custom-image mb-3"
                    style={{height:"26vh"}}
                  />
                  <img
                    src="/assets/images/web2.jpg"
                    alt="UI/UX Design"
                    className="img-fluid custom-image"
                    style={{height:"26vh"}}
                  />
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="image-container">
                  <img
                    src="/assets/images/web3.jpg"
                    alt="UI/UX Design"
                    className="img-fluid custom-image mb-3"

                  />
                  <img
                    src="/assets/images/web5.jpg"
                    alt="UI/UX Design"
                    className="img-fluid custom-image"
                    style={{height:"26vh"}}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="image-container">
              <img
                src="/assets/images/web1.jpg"
                alt="UI/UX Design"
                className="img-fluid custom-image"
                
              />
            </div>
          </div>
        </div>
      </div>
    </section>


<Footer />
        </Fragment>

    )
    
}

export default Web_Development;