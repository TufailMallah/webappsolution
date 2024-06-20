import React, { Fragment, useState } from "react";
import axios from "axios";
import Navbar from './Navbar';
import Footer from './Footer'; 

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const { name, email, subject, message } = formData;

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/api/contact/create', formData);
            console.log('Response:', response.data);
            setIsSubmitted(true); // Set form submission status to true
            setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form data
        } catch (error) {
            console.error('Error:', error);
            // Handle error, maybe show an error message to the user
        }
    };
    
    return(
        <Fragment>
            <Navbar />
            
         <section className="contact_background" style={{height:"70vh"}}>
        
        <div className="container">
            <div className="row">
                <div className="col-12 offset-md-1 col-md-11">
                    <div className="swiper-container hero-slider">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide slide-content d-flex align-items-center">
                                {/* <div className="single-slide">
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
        <div className="texture"></div>
        <div className="diag-bg"></div>
    </section>


        <section> 
        <div className="container-fluid contact py-6 wow bounceInUp  mt-5 mb-5" data-wow-delay="0.1s">
        <div className="col-12 text-center text-light">

                            <h1 className="display-5 mb-0">Contact Us </h1>
                             <p className="mb-4">Get in touch with WebsiteAppSolutions to embark on your journey towards digital excellence.</p>
                        </div>
            <div className="container">
                <div className="p-5 bg-light rounded contact-form">
                   
                    <div className="row g-4">
                     
                    <div className="col-md-6 col-lg-7 text-light">
                                <form onSubmit={handleSubmit}>
                                    <input type="text" name="name" value={name} onChange={handleChange} className="w-100 form-control p-3 mb-4 border-primary text-light" placeholder="Your Name"/>
                                    <input type="email" name="email" value={email} onChange={handleChange} className="w-100 form-control p-3 mb-4 border-primary text-light" placeholder="Enter Your Email" />
                                    <input type="text" name="subject" value={subject} onChange={handleChange} className="w-100 form-control p-3 mb-4 border-primary text-light" placeholder="Enter Your Subject" />
                                    <textarea name="message" value={message} onChange={handleChange} className="w-100 form-control mb-4 p-3 border-primary text-light" rows="4" cols="10" placeholder="Your Message"></textarea>
                                    <div style={{background:"#9604a9", borderRadius:"10px"}}>

                                    {isSubmitted && <p className="text-white  p-2 rounded">Form submitted successfully!</p>}
                                    </div>


                                    <button
    type="submit"
    className="w-100 btn btn-primary form-control p-3 border-primary bg-primary btn-small"
    onMouseDown={(e) => e.target.style.backgroundColor = 'purple'}
    onMouseUp={(e) => e.target.style.backgroundColor = ''}
>
    Submit Now
</button>

                                </form>
                            </div>
                        <div className="col-md-6 col-lg-5 mt-3">
                            <div>
                                {/* <div class="d-inline-flex w-100 border border-primary p-4 rounded mb-4">
                                <i className="fa fa-location-arrow" aria-hidden="true"></i>
                                    <div class="">
                                        <h4>Address</h4>
                                        <p>123 Street, New York, USA</p>
                                    </div>
                                </div> */}
                                <div className="d-inline-flex w-100 border border-primary p-4 rounded mb-4 ">
                                <i className="fa fa-envelope text-light" aria-hidden="true"></i>
                                    <div className="">
                                        <h4>Mail Us</h4>
                                        <p className="mb-2">info@example.com</p>
                                        <p className="mb-0">support@example.com</p>
                                    </div>
                                </div>
                                <div className="d-inline-flex w-100 border border-primary p-4 rounded">
                                <i className="fa fa-phone text-light" aria-hidden="true"></i>
                                    <div className="">
                                        <h4>Telephone</h4>
                                        <p className="mb-2">(+012) 3456 7890 123</p>
                                        <p className="mb-0">(+704) 5555 0127 296</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>

            <Footer />
        </Fragment>
    )
}

export default Contact;