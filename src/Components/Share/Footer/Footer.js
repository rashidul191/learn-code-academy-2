import React from 'react';
import './Footer.css';
import logo from '../../../Images/logo/Logo.png';

const Footer = () => {
    return (
        <section id="footer-section bg-light text-center">
            <div className="container p-5">
                <div className="row">
                    <div className="col-md-3">
                        <img className="footer-logo-size" src={logo} alt="" />
                        <div>
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item active">
                                    <a class="nav-link mr-2" href="#home">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link  mr-2" href="#events">Events</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link mr-2" href="#courses">Courses</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link  mr-2 " href="#pages">Pages</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link  mr-2" href="#blog">Blog</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link  mr-2" href="#contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h5>Course</h5>
                        <div>
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item active">
                                    <a class="nav-link mr-2" href="#home">HTML</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link  mr-2" href="#events">CSS</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link mr-2" href="#courses">Web Design</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link  mr-2 " href="#pages">Pages</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link  mr-2" href="#blog">Blog</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link  mr-2" href="#contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <h5>Newsletters</h5>
                        <p className="">Sed ut perspicatis unde omnis iste natus error sit voluptatem accu santinum doloremque laudantium totam rem apeiam</p>
                        <div class="">
                            <form class="d-flex">
                                <input class="form-control " type="email" placeholder="Enter Your Email" aria-label="email"/>
                                <button class="btn btn-outline-danger" type="submit">Subscribe</button>
                            </form>
                        </div>
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