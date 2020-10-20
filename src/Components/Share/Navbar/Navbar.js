import React from 'react';
import './Navbar.css';
import logo from '../../../Images/logo/Logo.png';

const Navbar = () => {
    return (
        <section>
            <nav class="navbar navbar-expand-lg navbar-light ">
                <a class="navbar-brand" href="#"><img className="main-logo-size" src={logo} alt="" /></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link mr-2" href="#">Home </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link  mr-2" href="#">Events</a>
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
                                <a class="dropdown-item " href="#">Fiver</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link  mr-2 " href="#">Pages</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link  mr-2" href="#">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link  mr-2" href="#">Contact</a>
                        </li>
                    </ul>
                    <div className="">
                        <ul class="navbar-nav ">
                            <li>
                                <a class="nav-link  mr-2" href="#">F</a>
                            </li>
                            <li>
                                <a class="nav-link  mr-2" href="#">Y</a>
                            </li>
                            <li>
                                <button className="signIn-btn">SING IN With GOOGLE</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    );
};

export default Navbar;