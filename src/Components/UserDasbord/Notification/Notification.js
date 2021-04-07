import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Share/Footer/Footer';
import UserDasbord from '../UserDasbord';

const Notification = () => {
    return (
        <section>
            <UserDasbord></UserDasbord>
            <div className="container">
                <div className="py-5">
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item active">
                                    <Link class="nav-link mx-5 user-link" to="/student/my-course">My Course</Link>
                                </li>
                                <li class="nav-item active">
                                    <Link class="nav-link mx-5 user-link" to="/student/my-profile">My Profile</Link>
                                </li>
                                <li class="nav-item active">
                                    <Link class="nav-link mx-5 user-link" to="/student/message">Message</Link>
                                </li>
                                <li class="nav-item active">
                                    <Link class="nav-link mx-5 user-nav-bar " to="/student/notification">Notifications</Link>
                                </li>
                                <li class="nav-item active">
                                    <Link class="nav-link mx-5 user-link" to="/student/purchase">Purchase History</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div>
                    <h1>Notification comming soon.......</h1>
                </div>
            </div>
            <Footer></Footer>
        </section>
    );
};

export default Notification;