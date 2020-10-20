import React from 'react';
import Navbar from '../../Share/Navbar/Navbar';
import HeaderMain from '../HeaderMain/HeaderMain';
import './Header.css';

const Header = () => {
    return (
        <section >
            <div className="header-container">
                <Navbar></Navbar>
                <HeaderMain></HeaderMain>
            </div>
        </section>
    );
};

export default Header;