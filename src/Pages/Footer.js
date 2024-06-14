import React, { Fragment } from "react";
import { Link } from 'react-router-dom';

function Footer() {

    return(
        <Fragment>
<footer>

<div class="footer-widgets">
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-xl-6">
                <div class="single-widget contact-widget" data-aos="fade-up" data-aos-delay="0">
                <img src="assets/images/logo.png" alt="Graphic Design" style={{width:"30%",height:"auto" ,alignContent:"center"}}/>
                    <h6 class="widget-tiltle">&nbsp;</h6>
                    <p>By subscribing to our mailing list you will always be update with the latest news from
                        us.
                    </p>
                    <div class="media">
                        <i class="fa fa-map-marker"></i>
                        <div class="media-body ml-3">
                            <h6>Address</h6>
                            Level 13, 2 Elizabeth St,<br/>
                            Melbourne, Victoria 3000 Australia
                        </div>
                    </div>
                    <div class="media">
                        <i class="fa fa-envelope-o"></i>
                        <div class="media-body ml-3">
                            <h6>Have any questions?</h6>
                            <Link href="mailto:support@steelthemes.com">Support@Steelthemes.com</Link>
                        </div>
                    </div>
                    <div class="media">
                        <i class="fa fa-phone"></i>
                        <div class="media-body ml-3">
                            <h6>Call us & Hire us</h6>
                            <Link href="tel:+610791803458"> +61 (0) 7 9180 3458</Link>
                        </div>
                    </div>
                    <div class="media">
                        <i class="fa fa-fax"></i>
                        <div class="media-body ml-3">
                            <h6>Fax</h6>
                            <Link href="fax:911889047521432">(91) 188904752 1432</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div class="col-md-6 col-xl-3">
                <div class="single-widget twitter-widget" data-aos="fade-up" data-aos-delay="200">
                    <h6 class="widget-tiltle">Fresh Tweets</h6>
                    <div class="media">
                        <i class="fa fa-twitter"></i>
                        <div class="media-body ml-3">
                            <h6><Link href="">@Themes,</Link> Html Version Out Now</h6>
                            <span>10 Mins Ago</span>
                        </div>
                    </div>
                    <div class="media">
                        <i class="fa fa-twitter"></i>
                        <div class="media-body ml-3">
                            <h6><Link href="">@Envato,</Link> the best selling item of the day!</h6>
                            <span>20 Mins Ago</span>
                        </div>
                    </div>
                    <div class="media">
                        <i class="fa fa-twitter"></i>
                        <div class="media-body ml-3">
                            <h6><Link href="">@Collis,</Link> We Planned to Update the Enavto Author Payment Method
                                Soon!</h6>
                            <span>10 Mins Ago</span>
                        </div>
                    </div>
                    <div class="media">
                        <i class="fa fa-twitter"></i>
                        <div class="media-body ml-3">
                            <h6><Link href="">@SteelThemes,</Link> Html Version Out Now</h6>
                            <span>15 Mins Ago</span>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <div class="col-md-6 col-xl-3">
                <div class="single-widget recent-post-widget" data-aos="fade-up" data-aos-delay="400">
                    <h6 class="widget-tiltle">Latest Updates</h6>
                    <div class="media">
                        <Link class="rcnt-img" href=""><img src="assets/images/rcnt-post1.png"
                                alt="Recent Post" /></Link>
                        <div class="media-body ml-3">
                            <h6><Link href="">An engaging</Link></h6>
                            <p><i class="fa fa-user"></i>Mano <i class="fa fa-eye"></i> 202 Views</p>
                        </div>
                    </div>
                    <div class="media">
                        <Link class="rcnt-img" href=""><img src="assets/images/rcnt-post2.png"
                                alt="Recent Post" /></Link>
                        <div class="media-body ml-3">
                            <h6><Link href="">Statistics and analysis. The key to succes.</Link></h6>
                            <p><i class="fa fa-user"></i>Rosias <i class="fa fa-eye"></i> 20 Views</p>
                        </div>
                    </div>
                    <div class="media">
                        <Link class="rcnt-img" href=""><img src="assets/images/rcnt-post3.png"
                                alt="Recent Post" /></Link>
                        <div class="media-body ml-3">
                            <h6><Link href="">Envato Meeting turns into a photoshooting.</Link></h6>
                            <p><i class="fa fa-user"></i>Kien <i class="fa fa-eye"></i> 74 Views</p>
                        </div>
                    </div>
                    <div class="media">
                        <Link class="rcnt-img" href=""><img src="assets/images/rcnt-post4.png"
                                alt="Recent Post" /></Link>
                        <div class="media-body ml-3">
                            <h6><Link href="">An engaging embedded the video posts</Link></h6>
                            <p><i class="fa fa-user"></i>Robert <i class="fa fa-eye"></i> 48 Views</p>
                        </div>
                    </div>
                </div>
            </div> */}
            <div class="col-md-6 col-xl-6">
                <div class="single-widget tags-widget" data-aos="fade-up" data-aos-delay="800">
                    <h6 class="widget-tiltle">Popular Tags</h6>
                    <Link href="">Amazing</Link>
                    <Link href="">Design</Link>
                    <Link href="">Photoshop</Link>
                    <Link href="">Art</Link>
                    <Link href="">Wordpress</Link>
                    <Link href="">jQuery</Link>
                </div>
                <div class="single-widget subscribe-widget" data-aos="fade-up" data-aos-delay="800">
                    <h6 class="widget-tiltle">Subscribe us</h6>
                    <p>Sign up for our mailing list to get latest updates and offers</p>
                    <form class="" method="get">
                        <div class="input-group">
                            <input class="field form-control" name="subscribe" type="email"
                                placeholder="Email Address" />
                            <span class="input-group-btn">
                                <button type="submit" name="submit-mail"><i class="fa fa-check"></i></button>
                            </span>
                        </div>
                    </form>
                    <p>We respect your privacy</p>
                    <ul class="nav social-nav">
                        <li><Link href="https://www.facebook.com/fh5co" target="_blank"><i class="fa fa-facebook"></i></Link></li>
                        <li><Link href=""><i class="fa fa-google-plus"></i></Link></li>
                        {/* <li><Link href=""><i class="fa fa-twitter"></i></Link></li>
                        <li><Link href=""><i class="fa fa-linkedin"></i></Link></li> */}
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="foot-note">
    <div class="container">
        <div
            class="footer-content text-center text-lg-left d-lg-flex justify-content-between align-items-center">
            <p class="mb-0" data-aos="fade-right" data-aos-offset="0">&copy; 2019 All Rights Reserved. Design by <Link href="https://uppercubes.com/" target="_blank" class="fh5-link">UpperCubes</Link>.</p>
            <p class="mb-0" data-aos="fade-left" data-aos-offset="0"><Link href="">Terms Of Use</Link><Link
                    href="">Privacy & Security
                    Statement</Link></p>
            </div>
        </div>
    </div>

</footer>
        </Fragment>

    )
    
}

export default Footer;