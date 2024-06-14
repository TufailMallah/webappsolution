import React, { Fragment } from "react";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <Fragment>
        {/* <div className="css-loader">
                <div className="loader-inner line-scale d-flex align-items-center justify-content-center"></div>
            </div>
            */}
            <header className="position-absolute w-100">
      <div className="container">
        <div className="top-header d-none d-sm-flex justify-content-between align-items-center">
          <div className="contact">
            <a href="tel:+1234567890" className="tel">
              <i className="fa fa-phone" aria-hidden="true"></i>+1234567890
            </a>
            <a href="mailto:info@yourmail.com">
              <i className="fa fa-envelope" aria-hidden="true"></i>info@yourmail.com
            </a>
          </div>
          <nav className="d-flex aic">
            <Link to="/login" className="login">
              <i className="fa fa-user" aria-hidden="true"></i>Login
            </Link>
            <ul className="nav social d-none d-md-flex">
              <li>
                <a href="https://www.facebook.com/fh5co" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <Link to="/google-plus" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-google-plus"></i>
                </Link>
              </li>
              {/* <li>
                <Link to="/twitter" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-twitter"></i>
                </Link>
              </li>
              <li>
                <Link to="/linkedin" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </Link>
              </li> */}
            </ul>
          </nav>
        </div>
        <nav className="navbar navbar-expand-md navbar-light">
          <Link className="navbar-brand" to="/">
            <img src="assets/images/logo.png" alt="Multipurpose" />
          </Link>
          <div className="group d-flex align-items-center">
            <button className="navbar-toggler" type="button" data-toggle="collapse"
              data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
              aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/portfolio">Portfolio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link d-sm-none" to="/login">Login <i className="fa fa-user"></i></Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
        </Fragment>
    );
}

export default Navbar;
