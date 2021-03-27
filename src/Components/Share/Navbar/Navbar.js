import React from 'react';
import './Navbar.css';
import logo from '../../../Images/logo/Logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <section className="bg-light nav-head sticky-top">
            <nav class="navbar navbar-expand-lg navbar-light ">
                <div className="container ">
                    <a class="navbar-brand" href="#"><img className="main-logo-size" src={logo} alt="" /></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                                <Link to="/home"> <a class="nav-link mr-2" href="">Home</a> </Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link  mr-2" href="#events">Events</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link  dropdown-toggle mr-2" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Courses
                            </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item " href="#">Web Design</a>
                                    <a class="dropdown-item " href="#">Web Programming</a>
                                    <a class="dropdown-item " href="#">Video Editing</a>
                                    <a class="dropdown-item " href="#">Digital Marketing</a>
                                    <a class="dropdown-item " href="#">CPA Marketing</a>
                                    <a class="dropdown-item " href="#">Social Media Marketing</a>
                                    <a class="dropdown-item " href="#">Graphic Design</a>
                                    <a class="dropdown-item " href="#">PhotoShop</a>
                                    <a class="dropdown-item " href="#">Fiverr</a>
                                </div>
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
                        <div className="">
                            <ul class="navbar-nav ">
                                <li className="m-1">
                                  <Link to="sign_in"><button className="btn btn-success">Login</button></Link>
                                </li>
                                <li className="m-1">
                                    <button className="btn btn-primary">Registration</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    );
};

export default Navbar;