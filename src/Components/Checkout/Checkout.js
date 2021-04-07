import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import Footer from '../Share/Footer/Footer';
import Navbar from '../Share/Navbar/Navbar';
import './Checkout.css';

const Checkout = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const onSubmit = data =>{
         console.log(data);
    }

    console.log(watch("example")); // watch input value by passing the name of it

    return (
        <section id="Check-our">
            <Navbar></Navbar>
            <div className="container">
                <form className="check-form" onSubmit={handleSubmit(onSubmit)}>
                   
                    <input name="name" defaultValue={loggedInUser.name} id="name" placeholder="Full Name" {...register("exampleRequired", { required: true })} />
                    {errors.name && <span className="error">Name is required</span>}

                    <input name="email" defaultValue={loggedInUser.email} id="email" placeholder="Email" {...register("exampleRequired", { required: true })} />
                    {errors.email && <span className="error">Email is required</span>}

                    <input name="address" id="address" placeholder="Address line 1" {...register("exampleRequired", { required: true })} />
                    {errors.address && <span className="error">Address is required</span>}

                    <input name="zipCode" id="zip-code" placeholder="Zip Code" {...register("exampleRequired", { required: true })} />
                    {errors.zipCode && <span className="error">Zip Code is required</span>}

                    <input name="country" id="country" placeholder="Country" {...register("exampleRequired", { required: true })} />
                    {errors.country && <span className="error">Country is required</span>}

                    <input name="phoneNumber" id="phoneNumber" placeholder="Phone Number" {...register("exampleRequired", { required: true })} />
                    {errors.phoneNumber && <span className="error">Phone Number is required</span>}

                    <input type="submit" value="Submit" />
                </form>
            </div>
            <Footer></Footer>
        </section>
    );
};

export default Checkout;