import React from 'react';
import { useContext } from 'react';
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
            <Footer></Footer>
        </section>
    );
};

export default MyProfile;