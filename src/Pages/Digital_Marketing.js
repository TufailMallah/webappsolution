import React, { Fragment } from "react";
import Navbar from './Navbar';
import Footer from './Footer'; 
 

function Digital_Marketing() {

    return(
        <Fragment>
        <Navbar />

<section class="digital_background" style={{ height: "70vh", display: "flex", alignItems: "center" }}>
    <div className="container">
        <div className="row mt-5">
            <div className="col-12  col-md-11 ">
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                    <h1 style={{ textAlign: "center" }}>Digital Marketing</h1>
                </div>
            </div>
        </div>
    </div>
</section>
   <section>
      <div className="container">
        <div className="row m-5">
          <div className="col-md-12">
            <h1 className="text-center">Digital Marketing</h1>
          </div>
          <div className="row mt-5 justify-content-center">
            <div className="col-md-8 ">
              <div className="row mb-4 mr-3">
                <div className="col-12 custom-bg-1 custom-border-radius p-3 mb-4 ">
                  <h3>Strategic Planning</h3>
                  <p>Begin your digital journey with a customized strategy. We analyze your market, identify opportunities, and devise a plan that aligns with your business objectives.</p>
                </div>
                <div className="col-12 custom-bg-2 custom-border-radius p-3">
                  <h3>Search Engine Optimization (SEO)</h3>
                  <p>Elevate your online visibility with our SEO expertise. We optimize your digital presence to rank higher on search engines, driving organic traffic and enhancing your brand's discoverability.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 custom-bg-3 custom-border-radius p-3">
              <h3>Social Media Management</h3>
              <p>Engage and connect with your audience on a personal level. Our social media management services ensure your brand remains dynamic, relevant, and actively participates in online conversations.</p>
            </div>
          </div>




          <div className="row mt-5">
            <div className="col-md-12 custom-bg-1 custom-border-radius p-3">
              {/* <h3>Scalability and Future-Proofing</h3> */}
              <p>Embark on a digital transformation with Website App Solutions - where every click, like, and share contributes to your brand's success. Let our digital marketing services be the driving force behind your online triumph, turning virtual engagements into tangible business outcomes.</p>
            </div>
          </div>



          <div className="row mt-5">
            <div className="col-md-4 custom-bg-3 custom-border-radius p-3 mb-4">
              <h3>Content Marketing</h3>
              <p>Craft compelling narratives that resonate. Our content marketing strategies not only tell your story but also establish your brand as an authority in your industry, driving customer loyalty and engagement.</p>
            </div>
            <div className="col-md-8 ">
              <div className="row mb-4 ml-3">
                <div className="col-12 custom-bg-1 custom-border-radius p-3 mb-4 ">
                  <h3>Pay-Per-Click (PPC) Campaigns</h3>
                  <p>Leverage targeted advertising to reach the right audience at the right time. Our PPC campaigns maximize ROI, driving traffic, conversions, and ensuring your ad spend delivers measurable results.</p>
                </div>
                <div className="col-12 custom-bg-2 custom-border-radius p-3">
                  <h3>Analytics and Performance Tracking</h3>
                  <p>Data is the heartbeat of successful digital marketing. Website App Solutions employs robust analytics tools to monitor performance, derive insights, and continually refine strategies for optimal results.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>

    <section className="custom-bg-2">
      <div className="container">
        {/* <div className="row m-5"> */}
          {/* <div className="col-md-12">
            <div className="custom-border-radius p-5">
              <p>
                Embark on a visual odyssey with Website App Solutions where each pixel is a brushstroke in crafting your unique narrative. Let our graphic design, UI/UX, animation, and gaming graphics services be the creative force propelling your brand to new heights. Immerse, captivate, and inspire with Website App Solutions.
              </p>
            </div>
          </div>
        </div> */}
        <div className="row">
          <div className="col-md-4 mb-4">
            <img src="/assets/images/webdev.jpeg" alt="Graphic Design" className="img-fluid custom-image"/>
          </div>
          <div className="col-md-4 mb-4">
            <img src="/assets/images/webdev.jpeg" alt="UI/UX Design" className="img-fluid custom-image"/>
          </div>
          <div className="col-md-4 mb-4">
            <img src="/assets/images/webdev.jpeg" alt="Animation & Gaming Graphics" className="img-fluid custom-image"/>
          </div>
        </div>
      </div>
    </section>




<Footer />
        </Fragment>

    )
    
}

export default Digital_Marketing;