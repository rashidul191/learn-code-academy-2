import React from 'react';
import './SignIn.css';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Navbar from '../Share/Navbar/Navbar';
import Footer from '../Share/Footer/Footer';
import google from '../../Images/logo/google logo.png';
import facebook from '../../Images/logo/Facebook-logo.png';

const SignIn = () => {
    const { register, handleSubmit, errors } = useForm(); // initialize the hook
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <section id="sign-in">
            <div className="sign-in-bg">
                <div>
                    <Navbar></Navbar>
                </div>
                <div className="container ">
                    <div className=" py-5">

                        <div className="sign-in-form  py-4">
                            <h3 className="py-3 text-center display-4">Welcome Back!</h3>
                            <form className="mx-5 " onSubmit={handleSubmit(onSubmit)}>
                                <div className="input-group-lg">
                                    <label className="mt-2" htmlFor="email">Email:</label>
                                    <input className="form-control " type="email" name="email" id="email" placeholder="Email" ref={register({ required: true })} />
                                    {errors.email && 'Email is required.'}
                                </div>
                                <div className="input-group-lg">
                                    <label className="mt-2" htmlFor="password">Password:</label>
                                    <input className="form-control " type="password" name="password" id="password" placeholder="Password" ref={register({ pattern: /\d+/ })} />
                                    {errors.password && 'Password is required.'}
                                </div>
                                <div>
                                    <input className="btn btn-secondary  btn-block mt-2" type="submit" value="Sign In" />
                                </div>
                                <div className="d-flex">
                                    <div className=" justify-content-start">
                                        <p className="">Forget Password</p>
                                    </div>
                                    <div className=" justify-content-end">
                                        <p className="ml"><Link to="sign_up">Create a new account</Link></p>
                                    </div>
                                </div>
                            </form>
                            <div>
                                <p className="or lead text-center"> or sign up with </p>
                            </div>
                            <div className="d-flex">
                                <div className="icon-sign-in-body ">
                                    <img className="sign-logo-size" src={google} alt="Google Sign In" />

                                    <img className="sign-logo-size" src={facebook} alt="Facebook Sign In" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Footer></Footer>
                </div>
            </div>
        </section>
    );
};

export default SignIn;