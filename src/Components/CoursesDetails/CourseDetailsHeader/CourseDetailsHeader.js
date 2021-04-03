import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const CourseDetailsHeader = () => {
    // const histroy = useHistory()
    // const handleBuyNow = () => {
    //     histroy.push('/checkout');
    // }

    return (
        <section id="courseDetailsHeader ">
            <div className="container ">
                <p className="lead py-2">Home/Course/CourseDetails</p>
            </div>
            <div className=" bg-dark">
                <div className="container ">
                    <div className="py-5">
                        <div className="row ">
                            <div className="col-lg-4 col-md-12 mx-2">
                                <iframe width="400" height="225" src="https://www.youtube.com/embed/TUdVSiem5xA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <div className="col-lg-6 col-md-12 mx-2
                         text-white">
                                <div class="card-body">
                                    <h3 class="">Compleat Web Programming Course</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit blanditiis, voluptas tempora, quibusdam autem veniam est voluptatem vel iure totam itaque commodi distinctio nostrum quam!</p>
                                    <p>By <span className="text-success">Rashidul Islam</span><br />Enrolled 191 <br />4.7 ⭐⭐⭐⭐⭐</p>
                                </div>
                            </div>
                        </div>

                        <div class=" text-white">
                            <div className="row">
                                <h4 className="mx-4">$123.99</h4>
                                <button className=" ml-5 btn btn-primary">Add To Cart</button>
                                <Link to="/checkout"> <button className="btn btn-info">Buy Now</button></Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseDetailsHeader;