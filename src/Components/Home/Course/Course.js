import React from 'react';
//import CoursesDetails from '../../CoursesDetails/CoursesDetails';
import webPic from '../../../Images/Annotation 2020-054.jpg'
import './Course.css';
const Course = () => {
    return (
        <section id="course-section ">
            <div className="container py-5 ">
                <div className="text-center">
                    <h4 className="text-success">*** Popular Course ***</h4>
                </div>
                <div>
                    <div id="CoursesDetails-section">
                        <div className="container ">
                            <div className="">
                            </div>
                            <div class="row row-cols-1 row-cols-md-3 g-4">
                                <div class="col-lg-4 col-md-6 col-sm-12">
                                    <div class="card h-100">
                                        <img className="img-fluid img-thumbnail rounded" src={webPic} alt="" />
                                        <div class="card-body">
                                            <h5 class="card-title">Compleat Web Programming Course</h5>
                                            <h5 class="card-text"> <small>  By <span className="text-success">Rashidul Islam</span> </small> </h5>
                                        </div>
                                        <div className="container">
                                            <p>Enrolled 191 </p>
                                        </div>
                                        <div class="card-footer">
                                            <h5>$123</h5>
                                            <h6><del>$123</del></h6>
                                            <button className="btn btn-primary">Add To Cart</button>
                                        </div>
                                       
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-12">
                                    <div class="card h-100">
                                        <img src="..." class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                        </div>
                                        <div class="card-footer">
                                            <small class="text-muted">Last updated 3 mins ago</small>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-12">
                                    <div class="card h-100">
                                        <img src="..." class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                        </div>
                                        <div class="card-footer">
                                            <small class="text-muted">Last updated 3 mins ago</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Course;