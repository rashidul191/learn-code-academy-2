import React from 'react';
import Footer from '../Share/Footer/Footer';
import Navbar from '../Share/Navbar/Navbar';
import UserDasboardDetails from './UserDasboardDetails/UserDasboardDetails';
import './UserDasbord.css';

const UserDasbord = () => {
    return (
        <section id="User-Dasbord">
            <Navbar></Navbar>
            <UserDasboardDetails></UserDasboardDetails>
            {/* <Footer></Footer> */}
        </section>
    );
};

export default UserDasbord;