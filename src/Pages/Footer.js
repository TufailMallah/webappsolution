import React, { Fragment } from "react";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <Fragment>
            <footer>
                <div className="footer-widgets">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-xl-6">
                                <div className="single-widget contact-widget" data-aos="fade-up" data-aos-delay="0">
                                    <img src="assets/images/logo.png" alt="Graphic Design" style={{ width: "30%", height: "auto", margin: "0 auto" }} />
                                    <h6 className="widget-title">&nbsp;</h6>
                                    <p>By subscribing to our mailing list you will always be update with the latest news from us.</p>
                                    {/* <div className="media">
                                        <i className="fa fa-map-marker"></i>
                                        <div className="media-body ml-3">
                                            <h6>Address</h6>
                                            Level 13, 2 Elizabeth St,<br />
                                            Melbourne, Victoria 3000 Australia
                                        </div>
                                    </div> */}
                                    <div className="media">
                                        <i className="fa fa-envelope-o"></i>
                                        <div className="media-body ml-3">
                                            <h6>Have any questions?</h6>
                                            <Link to="mailto:support@steelthemes.com">info@yourmail.com</Link>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <i className="fa fa-phone"></i>
                                        <div className="media-body ml-3">
                                            <h6>Call us & Hire us</h6>
                                            <Link to="tel:+610791803458"> +1234567890</Link>
                                        </div>
                                    </div>
                                    {/* <div className="media">
                                        <i className="fa fa-fax"></i>
                                        <div className="media-body ml-3">
                                            <h6>Fax</h6>
                                            <Link to="fax:911889047521432">(91) 188904752 1432</Link>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-6">
                                <div className="single-widget tags-widget" data-aos="fade-up" data-aos-delay="800">
                                    <h6 className="widget-title">Popular Tags</h6>
                                    <Link to="">Amazing</Link>
                                    <Link to="">Design</Link>
                                    <Link to="">Photoshop</Link>
                                    <Link to="">Art</Link>
                                    <Link to="">Wordpress</Link>
                                    <Link to="">jQuery</Link>
                                </div>
                                <div className="single-widget subscribe-widget" data-aos="fade-up" data-aos-delay="800">
                                    <h6 className="widget-title mt-3">Subscribe us</h6>
                                    <p>Sign up for our mailing list to get latest updates and offers</p>
                                    <form className="" method="get">
                                        <div className="input-group">
                                            <input className="field form-control" name="subscribe" type="email" placeholder="Email Address" />
                                            <span className="input-group-btn">
                                                <button type="submit" name="submit-mail"><i className="fa fa-check"></i></button>
                                            </span>
                                        </div>
                                    </form>
                                    <p>We respect your privacy</p>
                                    <ul className="nav social-nav">
                                        <li><Link to="https://www.facebook.com/fh5co" target="_blank"><i className="fa fa-facebook"></i></Link></li>
                                        <li><Link to=""><i className="fa fa-google-plus"></i></Link></li>
                                        {/* <li><Link to=""><i className="fa fa-twitter"></i></Link></li>
                                        <li><Link to=""><i className="fa fa-linkedin"></i></Link></li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="foot-note">
                    <div className="container">
                        <div className="footer-content text-center text-lg-left d-lg-flex justify-content-between align-items-center">
                            <p className="mb-0" data-aos="fade-right" data-aos-offset="0">&copy; 2019 All Rights Reserved. Design by <Link to="https://WebAppSolution.com/" target="_blank" className="fh5-link">WebAppSolution</Link>.</p>
                            <p className="mb-0" data-aos="fade-left" data-aos-offset="0"><Link to="">Terms Of Use</Link><Link to="">Privacy & Security Statement</Link></p>
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
    );
}

export default Footer;
