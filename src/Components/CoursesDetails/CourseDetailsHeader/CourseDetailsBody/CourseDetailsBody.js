import React from 'react';
import instractorImg from "../../../../Images/Rashidul.jpg";
import '../CourseDetailsHeader.css';

const CourseDetailsBody = () => {
    return (
        <section id="courseDetailsBody">
            <div className="container">
                <div className="">
                    <h3 className="text-center">এই কোর্স থেকে কি কি শিখতে পারবে:</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <h6>ফটাফট কয়েকটা ভিডিও দেখে HTML, CSS শিখে ফটাফট চমৎকার দুইটা ওয়েবসাইট বানিয়ে ফেলবে। এবং সেগুলার লিংক যেকারো সাথে শেয়ার করে ভাব পেটাতে পারবে।</h6>
                        </div>
                        <div className="col-md-6">
                            <h6>বুটস্ট্রাপ (bootstrap) নামক পপুলার ফ্রেমওয়ার্ক এর খুঁটিনাটি ভাজা ভাজা করে ফেলবে। তারপর সেটা দিয়েও দুইটা ই-কমার্স ওয়েবসাইট বানিয়ে ফেলবে। কি মজা !</h6>
                        </div>



                        <div className="col-md-6">
                            <h6>ফটাফট কয়েকটা ভিডিও দেখে HTML, CSS শিখে ফটাফট চমৎকার দুইটা ওয়েবসাইট বানিয়ে ফেলবে। এবং সেগুলার লিংক যেকারো সাথে শেয়ার করে ভাব পেটাতে পারবে।</h6>
                        </div>
                        <div className="col-md-6">
                            <h6>বুটস্ট্রাপ (bootstrap) নামক পপুলার ফ্রেমওয়ার্ক এর খুঁটিনাটি ভাজা ভাজা করে ফেলবে। তারপর সেটা দিয়েও দুইটা ই-কমার্স ওয়েবসাইট বানিয়ে ফেলবে। কি মজা !</h6>
                        </div>



                    </div>

                </div>

                <div className="instractor-arya p-3 my-5">
                    <h4>Instractor</h4>
                    <div className="row m-1">

                        <img className="instractor-images" src={instractorImg} alt="..." />
                        <div className="px-4">
                            <h4>Md Rashdiul Islam</h4>
                            <h6>Web Developer & Digital Marketer</h6>
                            <div className="row">
                                <img src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png" alt=""/>

                            </div>


                        </div>
                    </div>


                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste sint magni quis architecto, eveniet illo sit porro alias! Magnam dolores dignissimos minima, id sit ipsum.</p>
                </div>
            </div>

        </section>
    );
};

export default CourseDetailsBody;