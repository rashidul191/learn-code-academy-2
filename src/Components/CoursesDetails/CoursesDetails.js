import React from 'react';
import Footer from '../Share/Footer/Footer';
import Navbar from '../Share/Navbar/Navbar';
import CourseDetailsBody from './CourseDetailsHeader/CourseDetailsBody/CourseDetailsBody';
import CourseDetailsHeader from './CourseDetailsHeader/CourseDetailsHeader';
const CoursesDetails = () => {
      return (
            <section>
                  <Navbar></Navbar>
                  <CourseDetailsHeader></CourseDetailsHeader>
                  <CourseDetailsBody></CourseDetailsBody>
                  <Footer></Footer>
            </section>
      );
};

export default CoursesDetails;