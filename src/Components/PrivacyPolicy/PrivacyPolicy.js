import React from 'react';
import Footer from '../Share/Footer/Footer';
import Navbar from '../Share/Navbar/Navbar';
import PrivacyPolicyDetails from './PrivacyPolicyDetails/PrivacyPolicyDetails';

const PrivacyPolicy = () => {
    return (
     <section>
         <Navbar></Navbar>
         <PrivacyPolicyDetails></PrivacyPolicyDetails>
         <Footer></Footer>
     </section>
    );
};

export default PrivacyPolicy;