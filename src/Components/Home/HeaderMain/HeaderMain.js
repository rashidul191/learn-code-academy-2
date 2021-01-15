import React from 'react';
import './HeaderMain.css';
import headerPic from '../../../Images/logo/header-pic1.jpg';

const HeaderMain = () => {
    return (
        <section id="header-main">
            <div className="container r">
                <div className="row py-5 px-5">
                    <div className="col-lg-8  col-md-12 pl-5  ">
                        <small>... Welcome to <span className="text-danger"> Learn Code Academy </span></small>
                        <h2 className="" >More than 200 <br /> Online Courses</h2>
                        <nav class="navbar navbar-light">
                            <form class="d-flex">
                                <input class="form-control " type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </nav>
                        <div className="row ">
                            <div className="col-lg-4 col-md-3 col-sm-4 ">
                                <small>Sed ut perspiciatis under omnis <br /> natus error sit voluptatem</small>
                            </div>
                            <div className="col-lg-0 col-md-0 col-sm-0 col-xs-0 border-line-header"></div>

                            <div className=" col-lg-4 col-md-3 col-sm-4">
                                <small>ONLINE SUPPORT</small><br />
                                <small>+0123456789</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12  ">
                        <img className="header-pic rounded img-fluid" src={headerPic} alt="Picture" />
                    </div>
                </div>
            </div>

        </section>
    );
};

export default HeaderMain;