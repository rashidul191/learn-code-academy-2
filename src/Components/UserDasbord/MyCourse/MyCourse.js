import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Share/Footer/Footer';
import UserDasbord from '../UserDasbord';
import './MyCourse.css';

const MyCourse = () => {
    return (
        <section>
            <UserDasbord></UserDasbord>
            <div className="container pb-5">
                <div>
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item active">
                                    <Link class="nav-link mx-5 user-nav-bar" to="/student/my-course">My Course</Link>
                                </li>
                                <li class="nav-item active">
                                    <Link class="nav-link mx-5 user-link" to="/student/my-profile">My Profile</Link>
                                </li>
                                <li class="nav-item active">
                                    <Link class="nav-link mx-5 user-link" to="/student/message">Message</Link>
                                </li>
                                <li class="nav-item active">
                                    <Link class="nav-link mx-5 user-link" to="/student/notification">Notifications</Link>
                                </li>
                                <li class="nav-item active">
                                    <Link class="nav-link mx-5 user-link" to="/student/purchase">Purchase History</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-12">
                        <h1>Course Play list comming soon......</h1>
                    </div>
                    <div className="col-lg-4 col-md-12">

                    </div>
                    <div className="col-lg-4 col-md-12">

                    </div>

                </div>
            </div>
            <Footer></Footer>
        </section>
    );
};

export default MyCourse;