import React from 'react';
import './Navbar.css';
import logo from '../../../Images/logo/Logo.png';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import { useState } from 'react';


const Navbar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [newUser, setNewUser] = useState(false);

    return (

        <section className="bg-light nav-head sticky-top">
            <nav class="navbar navbar-expand-lg navbar-light ">
                <div className="container ">
                    <Link class="navbar-brand" to="/"><img className="main-logo-size" src={logo} alt="" /></Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto">
                            {/* <li>
                                <Link to="">Admin: {loggedInUser.name}</Link>
                            </li> */}
                            <li class="nav-item active">
                                <Link class="nav-link mr-2" to="/home">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link  mr-2" to="/events">Events</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link  dropdown-toggle mr-2" to="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Courses
                            </Link>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link class="dropdown-item " to="/">Web Design</Link>
                                    <Link class="dropdown-item " to="/">Web Programming</Link>
                                    <Link class="dropdown-item " to="/">Video Editing</Link>
                                    <Link class="dropdown-item " to="/">Digital Marketing</Link>
                                    <Link class="dropdown-item " to="/">CPA Marketing</Link>
                                    <Link class="dropdown-item " to="/">Social Media Marketing</Link>
                                    <Link class="dropdown-item " to="/">Graphic Design</Link>
                                    <Link class="dropdown-item " to="/">PhotoShop</Link>
                                    <Link class="dropdown-item " to="/">Fiverr</Link>
                                </div>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link  mr-2 " to="/pages">Pages</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link  mr-2" to="/blog">Blog</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link  mr-2" to="/contact">Contact</Link>
                            </li>
                        </ul>
                        <div className="">
                            <ul class="navbar-nav ">
                                <li className="m-1">
                                    {
                                        newUser ? <Link to="/sign_in"> <button className="btn btn-success">Sign Out</button> </Link>
                                            : <button className="btn btn-success">Sign In</button>
                                    }
                                </li>
                                {/* <li className="m-1">
                                  <Link to="sign_up"><button className="btn btn-primary">Registration</button></Link>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    );
};

export default Navbar;