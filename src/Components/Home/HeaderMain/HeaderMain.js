import React from 'react';
import './HeaderMain.css';
import Frame from '../../../Images/logo/Frame.png';

const HeaderMain = () => {
    return (
        <section className="container">
            <div className="row">
                <div className="col-md-6 header-center mt-5 pt-5">
                    <h6><small style={{color:"#EA5922"}}>... Welcome To EduPlus</small></h6>
                    <h1>More Then 200+ <br />Online Courses</h1>
                    <div className="pt-3">
                        <form class="form-inline">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                    <div className="pt-3">
                        <div className="row">
                            <div className="col-md-6">
                                <p><small>Sed ut persplclatis unde omnis <br />natus error sit valuptatem</small></p>

                            </div>
                            <div className="col-md-6">
                                <p><small>ONLINE SUPPORT <br />+0123456789</small></p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-md-6">
                    <img className="frame-img-size" src={Frame} alt="" />
                </div>
            </div>

        </section>
    );
};

export default HeaderMain;