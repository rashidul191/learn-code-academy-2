import React from 'react';
import './Footer.css';
import logo from '../../../Images/logo/Logo.png';
import paymentIcons from "../../../Images/SSLCommerz-Pay-With-logo-All-Size-04.jpg";

const Footer = () => {
    return (
        <section id="footer-section bg-light text-center">
            <div className="container p-5">
                <div className="row ">
                    <div className="col-md-4">
                        <img className="footer-logo-size" src={logo} alt="" />
                        <div className="pt-4 text-success">
                            <p>356 West Shewrepara Mirpur, Dhaka 1216</p>
                            <p>Official: lc.academy@gmail.com</p>
                            <p>facebook.com/groupe/learncodeacademy</p>
                            <p>HelpLine: +880123456789 <br />(Available: 09:00am to 11:00pm)</p>
                        </div>
                    </div>
                    <div className="col-md-3">
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
                    <div className="col-md-4">
                        <img className="pay-with" src={paymentIcons} alt="Pay With" />
                    </div>
                </div>
                <div className="text-center btn-outline-secondary mx-5">
                    <p> Copyright &copy; RASHIDUL 2021 </p>
                </div>

            </div>

        </section>
    );
};

export default Footer;