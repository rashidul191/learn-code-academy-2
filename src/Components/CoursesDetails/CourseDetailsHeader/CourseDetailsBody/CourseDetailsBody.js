import React from 'react';
import instractorImg from "../../../../Images/Rashidul.jpg";
import '../CourseDetailsHeader.css';

const CourseDetailsBody = () => {
    return (
        <section id="course-Details-Body">
            <div className="container">
                <div className=" pt-5">
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
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="instractor-arya p-3 my-5">
                            <h4>Instractor</h4>
                            <div className="row m-1">
                                <img className="instractor-images" src={instractorImg} alt="..." />
                                <div className="px-4">
                                    <h4>Md Rashdiul Islam</h4>
                                    <h6>Web Developer</h6>
                                    <div className="row">
                                        <img className="socail-icon m-2" src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png" alt="" />
                                        <img className="socail-icon m-2" src="https://utilitypeopleuk.com/wp-content/uploads/2017/06/twitter-icon-circle-blue-logo-preview.png" alt="" />
                                        <img className="socail-icon m-2" src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-linkedin-circle-512.png" alt="" />
                                        <img className="socail-icon m-2" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste sint magni quis architecto, eveniet illo sit porro alias! Magnam dolores dignissimos minima, id sit ipsum.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="py-5 ">
                            <h3>Students Review</h3>
                            <div className="row">
                                <div className="">
                                    <img className="review-icon" src="https://www.searchpng.com/wp-content/uploads/2019/02/Profile-ICon.png" alt="" />
                                </div>
                                <div className="col">
                                    <h4>Kaylee Narnitz</h4>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis eligendi reiciendis aperiam autem. Provident dolores veniam dolorem voluptatibus enim adipisci possimus culpa quidem laboriosam distinctio fugit tenetur, eaque mollitia inventore?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseDetailsBody;