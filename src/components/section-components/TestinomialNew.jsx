import React from 'react';
import testimonial1 from "../media/banner/testimonial1.jpeg";
import testimonial2 from "../media/banner/testimonial2.jpeg";
import testimonial3 from "../media/banner/testimonial3.jpeg";
import testimonial4 from "../media/banner/testimonial4.jpeg";
import testimonial5 from "../media/banner/testimonial5.jpeg";
import "../assets/css/carousel.css";
import Carousel from '../global-components/CarouselSLide';
const TestinomialNew = () =>
{

    return (

        <>
            <div className="testimonial_section batch_ins_list mb-0 pb-0">
                <div className='container'>
                    <h3 className="testimonial_heading section-title">Our Testimonial</h3>
                    <h2 className="testimonial_sub_heading text-center">Student's Feedback About BMBC</h2>
                    <Carousel show={3}>
                        <div className='content_carousel'>
                            <div className="card">
                                <div className="card_img">
                                    <img
                                        src={testimonial1}
                                        alt={testimonial1}
                                        className='testimonial_img'
                                    />
                                </div>
                                <div className="card_text">
                                    <div>
                                        <div className="footer">
                                            <div>
                                                <h4>
                                                    Sujita Chauhan
                                                </h4>
                                                <ul>
                                                    <li>
                                                        <i class="fas fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i class="fas fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i class="fas fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i class="fas fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i class="fas fa-star"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <p>
                                            I will be a lawyer, all thanks to BMBC, which just cleared my CLAT.
                                            I have wanted to be a lawyer since I could remember.
                                            I did everything in my life to achieve this goal,
                                            and my best decision was to sign up on the BMBC website.
                                            It helped me find a great place to learn and was affordable.
                                        </p>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='content_carousel'>
                            <div className="card">
                                <div className="card_img">
                                    <img
                                        src={testimonial2}
                                        alt={testimonial2}
                                        className='testimonial_img'
                                    />
                                </div>

                                <div className="card_text">
                                    <div>
                                        <div className="footer">
                                            <h4>
                                                Pardeep Sukhla
                                            </h4>
                                            <ul>
                                                <li>
                                                    <i class="fas fa-star"></i>
                                                </li>
                                                <li>
                                                    <i class="fas fa-star"></i>
                                                </li>
                                                <li>
                                                    <i class="fas fa-star"></i>
                                                </li>
                                                <li>
                                                    <i class="fas fa-star"></i>
                                                </li>
                                                <li>
                                                    <i class="fas fa-star"></i>
                                                </li>
                                            </ul>
                                        </div>
                                        <p>
                                            I had been to many institutes but couldn’t fit in any place; sometimes,
                                            it was too far, and sometimes, it was too costly. I was tired of all the searching, but BMBC was where I found the best institute
                                            near me that could make me understand concepts very easily. BMBC came at a time when I needed it the most.
                                        </p>


                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='content_carousel'>
                            <div className="card">
                                <div className="card_img">
                                    <img
                                        src={testimonial3}
                                        alt={testimonial3}
                                        className='testimonial_img'
                                    />
                                </div>
                                <div className="card_text">
                                    <div>
                                        <div className="footer">
                                            <h4>
                                                Rajesh Punia
                                            </h4>
                                            <ul>
                                                <li>
                                                    <i class="fas fa-star"></i>
                                                </li>
                                                <li>
                                                    <i class="fas fa-star"></i>
                                                </li>
                                                <li>
                                                    <i class="fas fa-star"></i>
                                                </li>
                                                <li>
                                                    <i class="fas fa-star"></i>
                                                </li>
                                                <li>
                                                    <i class="fas fa-star"></i>
                                                </li>
                                            </ul>
                                        </div>
                                        <p>
                                            I cleared BITSAT, all thanks to BMBC for finding me the best place to learn.
                                            Since the day I came here, I had set my goals on JEE, but through BMBC,
                                            I realised I had many options, such as BITSAT. I worked hard for JEE but got a better
                                            rank in BITSAT, and I am very happy that I could get an engineering degree from this university.
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='content_carousel'>
                            <div className="card">
                                <div className="card_img">
                                    <img
                                        src={testimonial4}
                                        alt={testimonial4}
                                        className='testimonial_img'
                                    />
                                </div>
                                <div className="card_text">
                                    <div>
                                        <div className="footer">
                                            <h4>
                                                Dhruv Batra
                                            </h4>
                                            <ul>
                                                <li>
                                                    <i class="fas fa-star"></i>
                                                </li>
                                                <li>
                                                    <i class="fas fa-star"></i>
                                                </li>
                                                <li>
                                                    <i class="fas fa-star"></i>
                                                </li>
                                                <li>
                                                    <i class="fas fa-star"></i>
                                                </li>
                                                <li>
                                                    <i class="fas fa-star"></i>
                                                </li>
                                            </ul>
                                        </div>
                                        <p>
                                            I will be a isro scientist, all thanks to BMBC, which just cleared my ISRO Exam.
                                            I did everything in my life to achieve this goal, and my best decision was to sign
                                            up on the BMBC website. It helped me find a great place to learn and less cost.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='content_carousel'>
                            <div className="card">
                                <div className="card_img">
                                    <img
                                        src={testimonial5}
                                        alt={testimonial5}
                                        className='testimonial_img'
                                    />
                                </div>

                                <div className="card_text">
                                    <div>
                                        <div className="footer">
                                            <h4>
                                                Mithali raj
                                            </h4>
                                            <ul>
                                                <li>
                                                    <i class="fas fa-star"></i>
                                                </li>
                                                <li>
                                                    <i class="fas fa-star"></i>
                                                </li>
                                                <li>
                                                    <i class="fas fa-star"></i>
                                                </li>
                                                <li>
                                                    <i class="fas fa-star"></i>
                                                </li>
                                                <li>
                                                    <i class="fas fa-star"></i>
                                                </li>
                                            </ul>
                                        </div>

                                        <p>
                                            I recently cleared my SSC CGL, with great thanks to the BMBC.
                                            The tuition fee was too high at most institutes, but through the BMBC portal,
                                            I could find a place with a reasonable price structure for their courses. I had great difficulty conversing and writing in English,
                                            but the teachers were patient, and extra classes helped me improve, and I'm still learning and getting better every day.
                                        </p>


                                    </div>

                                </div>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>

        </>


    )
}

export default TestinomialNew

