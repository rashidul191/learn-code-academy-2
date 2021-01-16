import React from 'react';
import './Course.css';
import webDesign from '../../../Images/Annotation 2020-054.jpg';
const Course = () => {
    return (
        <section id="course-section ">
            <div className="bg-dark">
                <div className="container   py-5 ">
                    <div className="text-center">
                        <h6 className="text-success">***  Popular Course ***</h6>
                        <h2 className="text-light">Course Categories</h2>
                    </div>
                    <div class="row row-cols-1 row-cols-md-3 g-4 py-5">
                        <div class="col">
                            <div class="card h-100">
                                <img src={webDesign} class="card-img-top" alt="webDesign" />
                                <div class="card-body">
                                    <h5 class="card-title">Web Design</h5>
                                    <p class="card-text">Web Design Course</p>
                                    <div className="d-flex">
                                        <p>$63</p>
                                        <p>It is a good course</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={webDesign} class="card-img-top" alt="webDesign" />
                                <div class="card-body">
                                    <h5 class="card-title">HTML</h5>
                                    <p class="card-text">HTML Bangla Course</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={webDesign} class="card-img-top" alt="webDesign" />
                                <div class="card-body">
                                    <h5 class="card-title">Fiverr</h5>
                                    <p class="card-text">Fiverr Bangla Course</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={webDesign} class="card-img-top" alt="webDesign" />
                                <div class="card-body">
                                    <h5 class="card-title">Digital Marketing</h5>
                                    <p class="card-text">Digital Marketing Course</p>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className="text-center ">
                        <a className=" btn btn-primary" href="#">Lone More --></a>
                    </div>
                </div>               
            </div>
        </section>
    );
};

export default Course;