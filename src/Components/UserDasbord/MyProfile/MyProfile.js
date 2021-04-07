import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import Footer from '../../Share/Footer/Footer';
import UserDasboardDetails from '../UserDasboardDetails/UserDasboardDetails';
import UserDasbord from '../UserDasbord';
import './MyProfile.css';

const MyProfile = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <section id="">
            <UserDasbord></UserDasbord>

            <div className="container ">
                <div>
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item active">
                                    <Link class="nav-link mx-5  user-link" to="/student/my-course">My Course</Link>
                                </li>
                                <li class="nav-item active">
                                    <Link class="nav-link mx-5 user-nav-bar " to="/student/my-profile">My Profile</Link>
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
                <div>
                    <h3 className="text-center ">My Profile</h3>
                    <div className="py-4">
                        <div className="profile-body row">
                            <h5 className="mx-5">Full Name: </h5>
                            <p className="lead ml-5">{loggedInUser.name}</p>
                        </div>
                        <div className="profile-body row">
                            <h5 className="mx-5">Email: </h5>
                            <p className="lead ml-5">{loggedInUser.email}</p>
                        </div>
                        <div className="profile-body row">
                            <h5 className="mx-5">Address: </h5>
                            <p className="lead ml-5"></p>
                        </div>
                        <div className="profile-body row">
                            <h5 className="mx-5">Phone: </h5>
                            <p className="lead ml-5"></p>
                        </div>
                        <div className="profile-body row">
                            <h5 className="mx-5">Country: </h5>
                            <p className="lead ml-5">Bangladesh</p>
                        </div>
                        <div className="profile-body row">
                            <h5 className="mx-5">Facebook Link: </h5>
                            <p className="lead ml-5"></p>
                        </div>
                        <div className="profile-body row">
                            <h5 className="mx-5">About: </h5>
                            <p className="lead ml-5"></p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </section>
    );
};

export default MyProfile;