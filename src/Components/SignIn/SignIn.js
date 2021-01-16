import React from 'react';
import './SignIn.css';
import logo from '../../Images/logo/Logo.png';
import { useForm } from 'react-hook-form';

const SignIn = () => {
    const { register, handleSubmit, errors } = useForm(); // initialize the hook
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <section id="sign-in">
            <div className="sign-in-bg">
                <div className="container ">
                    <div className="container-sign-in">
                        <div className="logo-position py-5">
                            <img className="sign-in-logo rounded" src={logo} alt="learn cord academy" />
                        </div>
                        <div className="sign-in-form text-center text- py-5">
                            <h3>Sign In</h3>
                            <form className="mx-5" onSubmit={handleSubmit(onSubmit)}>
                                <div className="d-flex">
                                    <input className="form-control" type="text" name="fname" id="fname" placeholder="First Name" ref={register({ required: true })} />
                                    {errors.fname && 'First Name is required.'}
                                    <input className="form-control" type="text" name="lname" id="lname" placeholder="Last Name" ref={register({ required: true })} />
                                    {errors.lname && 'Last Name is required.'}
                                </div>


                                <input className="form-control mt-2" type="email" name="email" id="email" placeholder="Email" ref={register({ required: true })} />
                                {errors.email && 'Email is required.'}

                                <input className="form-control mt-2" type="text" name="address" id="address" placeholder="Address Line 1" ref={register({ required: true })} />
                                {errors.address && 'Address is required.'}
                                <input className="form-control mt-2" type="text" name="address2" id="address2" placeholder="Address Line 2" ref={register({ required: true })} />


                                <div className="d-flex">
                                    <input className="form-control mt-2" type="text" name="zipCode" id="zipCode" placeholder="Zip Code" ref={register({ required: true })} />
                                    {errors.zipCode && 'Zip Code is required.'}

                                    <input className="form-control mt-2" type="date" name="date" id="date" ref={register({ required: true })} />
                                    {errors.date && 'Date is required.'}

                                </div>

                                <div className="d-flex">


                                    <input className="form-control mt-2" type="password" name="password" id="password" placeholder="Password" ref={register({ pattern: /\d+/ })} />
                                    {errors.password && 'Password is required.'}

                                    <input className="form-control mt-2" type="password" name="conformPassword" id="conformPassword" placeholder="Conform Password" ref={register({ pattern: /\d+/ })} />
                                    {errors.conformPassword && 'Conform Password is required.'}
                                </div>
                                <input className="btn btn-outline-primary btn-block mt-2" type="submit" />
                                <div className="d-flex">
                                    <p className="">Forget Password</p>
                                    <p className="ml-5">Already have a account <span className="text-success">Login</span></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignIn;