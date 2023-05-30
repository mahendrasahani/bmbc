import React, { Component } from 'react';
// import parse from 'html-react-parser';
import testimonial1 from "../media/banner/testimonial1.jpeg";
import testimonial2 from "../media/banner/testimonial2.jpeg";
import testimonial3 from "../media/banner/testimonial3.jpeg";
import testimonial4 from "../media/banner/testimonial4.jpeg";
import testimonial5 from "../media/banner/testimonial5.jpeg";
class TestimonialV3 extends Component
{

	render()
	{

		return (
			<div className="ltn__testimonial-area ltn__testimonial-4 pt-115 pb-50 plr--9 go-top">
				<div className="container-fluid">
					<div className="row">
						<div className="col-lg-12">
							<div className="section-title-area ltn__section-title-2--- text-center">
								<h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Our Testimonial</h6>
								<h1 className="section-title">Student's Feedback About BMBC</h1>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<div className="ltn__testimonial-slider-4 ltn__testimonial-slider-4-active slick-arrow-1">
								<div className="ltn__testimonial-item-5">
									<div className="ltn__quote-icon">
										<i className="far fa-comments" />
									</div>
									<div className="ltn__testimonial-image"><img src={testimonial1} alt="quote" /></div>
									<div className="ltn__testimonial-info">
										<p>I will be a lawyer, all thanks to BMBC, which just cleared my CLAT. I have wanted to be a lawyer since I could remember. I did everything in my life to achieve this goal, and my best decision was to sign up on the BMBC website. It helped me find a great place to learn and was affordable.</p>
										<h4>Ankita Kumar</h4>
									</div>
								</div>
								<div className="ltn__testimonial-item-5">
									<div className="ltn__quote-icon">
										<i className="far fa-comments" />
									</div>
									<div className="ltn__testimonial-image"><img src={testimonial2} alt="quote" /></div>
									<div className="ltn__testimonial-info">
										<p>I recently cleared my SSC CGL, with great thanks to the BMBC. The tuition fee was too high at most institutes, but through the BMBC portal, I could find a place with a reasonable price structure for their courses. I had great difficulty conversing and writing in English, but the teachers were patient, and extra classes helped me improve, and I'm still learning and getting better every day. </p>
										<h4>Shrikant Pandey</h4>
									</div>
								</div>
								<div className="ltn__testimonial-item-5">
									<div className="ltn__quote-icon">
										<i className="far fa-comments" />
									</div>
									<div className="ltn__testimonial-image"><img src={testimonial3} alt="quote" /></div>
									<div className="ltn__testimonial-info">
										<p>I had been to many institutes but couldn’t fit in any place; sometimes, it was too far, and sometimes, it was too costly. I was tired of all the searching, but BMBC was where I found the best institute near me that could make me understand concepts very easily. BMBC came at a time when I needed it the most.</p>
										<h4>Prakash Yadav</h4>
									</div>
								</div>
								<div className="ltn__testimonial-item-5">
									<div className="ltn__quote-icon">
										<i className="far fa-comments" />
									</div>
									<div className="ltn__testimonial-image"><img src={testimonial4} alt="quote" /></div>
									<div className="ltn__testimonial-info">
										<p>I cleared BITSAT, all thanks to BMBC for finding me the best place to learn. Since the day I came here, I had set my goals on JEE, but through BMBC, I realised I had many options, such as BITSAT. I worked hard for JEE but got a better rank in BITSAT, and I am very happy that I could get an engineering degree from this university.</p>
										<h4>Rajesh Punia</h4>
									</div>
								</div>
								<div className="ltn__testimonial-item-5">
									<div className="ltn__quote-icon">
										<i className="far fa-comments" />
									</div>
									<div className="ltn__testimonial-image"><img src={testimonial5} alt="quote" /></div>
									<div className="ltn__testimonial-info">
										<p>I cleared my NEET exams. As my school teacher would say, I was not a very bright student, but my parents believed in me and sent me to an institute they found on BMBC when I was in the 11th standard. I enjoyed my time learning new things in chemistry and biology. </p>
										<h4>Sunita Aggarwal</h4>
									</div>
								</div>

							</div>
							<ul className="ltn__testimonial-quote-menu d-none d-lg-block">
								<li><img src={testimonial1} alt="Quote" /></li>
								<li><img src={testimonial2} alt="Quote" /></li>
								<li><img src={testimonial3} alt="Quote" /></li>
								<li><img src={testimonial4} alt="Quote" /></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		)

	}
}

export default TestimonialV3