import React from 'react';
import Footer from '../Share/Footer/Footer';
import PaymentIcons from '../Share/PaymentIcons/PaymentIcons';
import Course from './Course/Course';
import Header from './Header/Header';

const Home = () => {
    return (

        <section>
            <Header></Header>
            <Course></Course>
            <PaymentIcons></PaymentIcons>
            <Footer></Footer>

        </section>
    );
};

export default Home;