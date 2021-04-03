import React from 'react';
import Footer from '../Share/Footer/Footer';
import Navbar from '../Share/Navbar/Navbar';
import TeConditionsDatils from './TeConditionsDatils/TeConditionsDatils';

const TeConditions = () => {
    return (
        <section id="TeConditions">
            <Navbar></Navbar>
            <TeConditionsDatils></TeConditionsDatils>
            <Footer></Footer>
        </section>
    );
};

export default TeConditions;