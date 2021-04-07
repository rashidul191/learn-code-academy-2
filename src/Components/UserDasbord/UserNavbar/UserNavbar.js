import React from 'react';
import { Link } from 'react-router-dom';
import './UserNavbar.css';
const UserNavbar = () => {
    return (
        <section>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">                
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <Link class="nav-link mr-5 user-link" to="/my-profile">My Profile</Link>
                        </li>

                        <li class="nav-item active">
                            <Link class="nav-link mx-5 user-link"  to="/student-message">Message</Link>
                        </li>

                        <li class="nav-item active">
                            <Link class="nav-link mx-5 user-link" to="/student-notification">Notifications</Link>
                        </li>

                        <li class="nav-item active">
                            <Link class="nav-link mx-5 user-link" to="/student-purchase">Purchase History</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </section>
    );
};

export default UserNavbar;