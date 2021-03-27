import React from 'react';
import './Footer.css';
import logo from '../../../Images/logo/Logo.png';
import paymentIcons from "../../../Images/SSLCommerz-Pay-With-logo-All-Size-04.jpg";

const Footer = () => {
    return (
        <section id="footer-section  text-center">
            <div className="bg-dark text-light">
                <div className="container  p-5">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <img className="footer-logo-size" src={logo} alt="" />
                            <div className="pt-4">
                                <p>356 West Shewrepara Mirpur, Dhaka 1216</p>
                                <p>Official: lc.academy@gmail.com</p>
                                <p>facebook.com/groupe/learncodeacademy</p>
                                <p>HelpLine: +880123456789 <br />(Available: 09:00am to 11:00pm)</p>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div>
                                <ul class="navbar-nav ">
                                    <li class="nav-item active">
                                        <a class="nav-link mr-2" href="#about">About Us</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link  mr-2" href="#success">Success</a>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link mr-2" href="#terms">Terms and Conditions</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link  mr-2 " href="#privacy">Privacy Policy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12">
                            <img className="pay-with rounded" src={paymentIcons} alt="Pay With" />
                        </div>
                    </div>
                    <div className="text-center  mx-5">
                        <p className="pt-3"> Copyright &copy; LCA 2021 </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;