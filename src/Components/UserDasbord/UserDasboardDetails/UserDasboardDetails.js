import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import UserNavbar from '../UserNavbar/UserNavbar';
import './UserDasboardDetails.css';

const UserDasboardDetails = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <section id="User-Dasboard-Details">
            <div className="container">
                <div className="text-center">
                    <div className="py-4">
                        {loggedInUser.photo ? <img className="user-img" src={loggedInUser.photo} alt="Profile Icon" />
                            : <img className="user-img" src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-and-shapes-3/177800/129-512.png" alt="Profile Icon" />

                        }
                        <h4 className="display-5">Name: {loggedInUser.name}</h4>
                    </div>
                    {/* <div className="pb-5">
                        <UserNavbar></UserNavbar>
                    </div> */}
                    
                </div>
            </div>
        </section>
    );
};

export default UserDasboardDetails;