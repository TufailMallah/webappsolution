import React, { Fragment } from "react";
import Navbar from './Navbar';
import Footer from './Footer'; 

function Graphic_Design() {

    return(
        <Fragment>
        <Navbar />

        <section className="graphic_background" style={{ height: "70vh", display: "flex", alignItems: "center" }}>
    <div className="container">
        <div className="row mt-5">
            <div className="col-12   col-md-11 ">
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                    <h1 style={{ textAlign: "center" }}>Graphic Desigen</h1>
                </div>
            </div>
        </div>
    </div>
</section>



<section>
      <div className="container">
        <div className="row m-5">
          <div className="col-md-12">
            <h1 className="text-center">Graphic Design</h1>
          </div>
          <div className="row mt-5 justify-content-center">
            <div className="col-md-8 ">
              <div className="row mb-4 mr-3">
                <div className="col-12 custom-bg-1 custom-border-radius p-3 mb-4 ">
                  <h3>Description</h3>
                  <p>Website App Solutions is more than a design studio; we are curators of visual storytelling, providing a spectrum of creative services that breathe life into your brand and ideas.</p>
                </div>
                <div className="col-12 custom-bg-2 custom-border-radius p-3">
                  <h3>Graphic Design</h3>
                  <p>Our graphic design services transcend traditional boundaries, crafting visuals that speak volumes. From logo creation to marketing collateral, we blend creativity with strategy to leave an indelible mark on your audience.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 custom-bg-3 custom-border-radius p-3">
              <h3>UI/UX Design</h3>
              <p>In the digital realm, first impressions matter. Website App Solutions specializes in creating user-centric interfaces that marry aesthetics with functionality. Elevate your digital presence with designs that seamlessly guide users through an engaging and intuitive journey.</p>
            </div>
          </div>




          <div className="row mt-5">
            <div className="col-md-12 custom-bg-1 custom-border-radius p-3">
              <h3>2D & 3D Animation</h3>
              <p>Transform your narratives into dynamic visual experiences with our animation expertise. From captivating 2D animations to immersive 3D environments, our team brings stories to life, enhancing engagement and leaving a lasting impact.</p>
            </div>
          </div>



          <div className="row mt-5">
            <div className="col-md-4 custom-bg-3 custom-border-radius p-3 mb-4">
              <h3>Gaming Graphics</h3>
              <p>Enter the world of gaming with graphics that captivate and immerse. Our gaming graphics services cover character design, environment creation, and UI elements, ensuring a visually stunning and cohesive gaming experience.</p>
            </div>
            <div className="col-md-8 ">
              <div className="row mb-4 ml-3">
                <div className="col-12 custom-bg-1 custom-border-radius p-3 mb-4 ">
                  <h3>Innovative Concepts</h3>
                  <p>Website App Solutions thrives on pushing creative boundaries. We turn conceptual ideas into tangible visual realities, leveraging the latest design trends and technologies to ensure your brand stands out in a crowded digital landscape</p>
                </div>
                <div className="col-12 custom-bg-2 custom-border-radius p-3">
                  <h3>Collaborative Process</h3>
                  <p>Your vision is at the heart of our creative process. Website App Solutions engages closely with clients, fostering collaboration to ensure that every design element aligns seamlessly with brand identity, objectives, and resonates authentically with the target audience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>

    <section className="custom-bg-2">
      <div className="container  ">
        <div className="row m-5">
          

        <div className="col-12 custom-border-radius p-5">
                  {/* <h3>Security Assurance</h3> */}
                  <p>Embark on a visual odyssey with Website App Solutions where each pixel is a brushstroke in crafting your unique narrative. Let our graphic design, UI/UX, animation, and gaming graphics services be the creative force propelling your brand to new heights. Immerse, captivate, and inspire with Website App Solutions.</p>
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
                    src="/assets/images/graphic5.jpeg"
                    alt="UI/UX Design"
                    className="img-fluid custom-image mb-3"
                  />
                  <img
                    src="/assets/images/graphic1.jpeg"
                    alt="UI/UX Design"
                    className="img-fluid custom-image"
                  />
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="image-container">
                  <img
                    src="/assets/images/graphic2.jpeg"
                    alt="UI/UX Design"
                    className="img-fluid custom-image mb-3"
                  />
                  <img
                    src="/assets/images/graphic3.jpeg"
                    alt="UI/UX Design"
                    className="img-fluid custom-image"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="image-container">
              <img
                src="/assets/images/graphic4.jpeg"
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

export default Graphic_Design;