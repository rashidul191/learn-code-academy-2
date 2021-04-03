import React, { useContext } from 'react';
import './SignIn.css';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Navbar from '../Share/Navbar/Navbar';
import Footer from '../Share/Footer/Footer';
import google from '../../Images/logo/google logo.png';
import facebook from '../../Images/logo/Facebook-logo.png';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useState } from 'react';
import { UserContext } from '../../App';
firebase.initializeApp(firebaseConfig)

const SignIn = () => {
    const { register, errors } = useForm();  // handleFromSubmit,  initialize the hook
    const onSubmit = (data) => {
        console.log(data);
    };


    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        inSignedIn: false,
        name: '',
        email: '',
        photo: '',
        password: '',
        error: '',
        success: false,
    })

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const fbprovider = new firebase.auth.FacebookAuthProvider();
    const provider = new firebase.auth.GoogleAuthProvider();

    const handleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then(res => {
                const { displayName, email, photoURL } = res.user;
                const signedInUser = {
                    inSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL,
                }
                setUser(signedInUser);
                console.log(displayName, email, photoURL);
            }).catch(err => {
                const errCode = err.code;
                const errMessage = err.message;
                const email = err.email;
                console.log(errCode, errMessage, email);
            });
    }
    const handleFBLogin = () => {
        firebase
            .auth()
            .signInWithPopup(fbprovider)
            .then(res => {
                //  /** @type {firebase.auth.OAuthCredential} */
                const user = res.user;
                console.log(user);
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                console.log(errorCode, errorMessage, email);
            });
    }



    const handleSignOut = () => {
        firebase.auth().signOut()
            .then(res => {
                const signOutUser = {
                    inSignedIn: false,
                    name: '',
                    email: '',
                    photo: '',
                }
                setUser(signOutUser);
            }).catch(err => {
                console.log(err);
            });
    }
    const handleSubmit = (e) => {
        //  console.log(user.email, user.password);
        if (newUser && user.email && user.password) {
            firebase.auth().
                createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    updateUserName(user.name);
                })
                .catch(error => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }

        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);
                    console.log("Sign In user info", res.user)
                })
                .catch(error => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }
        e.preventDefault();
    }

    const updateUserName = name => {
        const user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name,

        }).then(res => {
            console.log("User name updated successfully");
        }).catch(error => {
            console.log(error)
        });
    }

    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === "email") {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === "password") {
            const isPasswordValide = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValide && passwordHasNumber;
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }

    return (
        <section id="sign-in">

            <div className="sign-in-bg">
                <div>
                    <Navbar></Navbar>
                </div>
                <div className="container ">
                    <div className=" py-5">
                        <div className="sign-in-form  py-4">

                            {newUser
                                ? <h3 className="py-3 text-center display-4">Create Account</h3>
                                : <h3 className="py-3 text-center display-4">Sign In</h3>
                            }
                            {
                                user.inSignedIn && <div>
                                    <h2>Welcome , {user.name}</h2>
                                    <p>Your Email: {user.email}</p>
                                    <img src={user.photo} alt="imges here" />
                                </div>
                            }
                            <form className="mx-5 " onSubmit={handleSubmit} action="">
                                <div className="input-group-lg">
                                    {
                                        newUser &&
                                        <div className="input-group-lg">
                                            <label className="mt-2" htmlFor="name">Name:</label><br />
                                            <input className="form-control " onBlur={handleBlur} type="text" name="name" placeholder="Your name" ref={register({ required: true })} />
                                            {errors.name && 'Name is required.'}
                                        </div>
                                    }
                                </div>
                                <div className="input-group-lg">
                                    <label className="mt-2" htmlFor="email">Email:</label>
                                    <input className="form-control" onBlur={handleBlur} type="email" required name="email" id="email" placeholder="Email" ref={register({ required: true })} />
                                    {errors.email && 'Email is required.'}
                                </div>
                                <div className="input-group-lg">
                                    <label className="mt-2" htmlFor="password">Password:</label>
                                    <input onBlur={handleBlur} className="form-control " type="password" name="password" id="password" placeholder="Password" ref={register({ pattern: /\d+/ })} required />
                                    {errors.password && 'Password is required.'}
                                </div>
                                <div>
                                    <input className="btn btn-secondary  btn-block mt-2" type="submit" value={newUser ? 'Sign Up' : 'Sign In'} />

                                </div>
                                <div className="d-flex">
                                    {/* <div className=" justify-content-start">
                                        <p className="">Forget Password</p>
                                    </div> */}
                                    <div className=" justify-content-end" >
                                        <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />
                                        <label htmlFor="newUser">Create New Account</label>
                                    </div>
                                </div>
                            </form>
                            <div>
                                <p className="or lead text-center"> or sign up with </p>
                            </div>
                            <div className="">
                                {user.inSignedIn
                                    ? <button onClick={handleSignOut}>Sign Out</button>
                                    : <button onClick={handleSignIn}>Google Sign In</button>
                                }
                                <br />
                                <button onClick={handleFBLogin}>Facebook Sign In</button>
                            </div>
                            <p className="err-masseges">{user.err}</p>
                            {
                                user.success && <p className="success-masseges">User {newUser ? 'Created' : 'Logged In'} Successfully</p>
                            }
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