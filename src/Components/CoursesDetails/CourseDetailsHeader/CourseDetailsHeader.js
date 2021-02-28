import React from 'react';

const CourseDetailsHeader = () => {
    return (
        <section id="courseDetailsHeader ">
            <div className=" bg-dark my-5">
                <div className="container ">
                    <div className="row py-5 ">
                        <div className="col-lg-4 col-md-12 mx-2">
                            <iframe width="400" height="225" src="https://www.youtube.com/embed/TUdVSiem5xA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <div class=" text-white">
                                <div className="row">
                                    <h5 className="ml-5">$123</h5>
                                    <h6 className="mx-3"><del>$123</del></h6>
                                    <button className=" ml-5 btn btn-primary">Add To Cart</button>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 mx-2
                         text-white">
                            <div class="card-body">
                                <h3 class="">Compleat Web Programming Course</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit blanditiis, voluptas tempora, quibusdam autem veniam est voluptatem vel iure totam itaque commodi distinctio nostrum quam!</p>
                                <p> Enrolled 191 Students </p>
                                <h5 class=""> By <span className="text-success">Rashidul Islam</span></h5>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseDetailsHeader;