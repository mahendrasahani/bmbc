import React, { Component } from 'react';
// import parse from 'html-react-parser';

class AboutV4 extends Component
{

	render()
	{

		return <div className="ltn__about-us-area pt-120--- pb-90 pt-10 go-top">
			<div className="container">
				<div className="about-us-info-wrap">
					<div className="section-title-area ltn__section-title-2--- mb-20">
						{/* <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">About Us</h6> */}
						<h1 className="section-title">Why BMBC</h1>
						<p style={{maxWidth:"100%"}}>BMBC is one of the leading online platforms that is looking forward to assisting students to find the ideal coaching institute that helps them prepare for their competitive exams. The platform was created to provide an ideal solution for challenging, time-consuming processes of finding the institute for coaching exam preparation.</p>
						<p style={{maxWidth:"100%"}}>Competitive exams play a crucial role in the education system of our country because these institutes determine the electricity of students for higher education and future careers. So, finding the right coaching institute is crucial to students’ success.</p>
					</div>

					<h3 style={{ fontSize: "24px",fontFamily: "Roboto"}}>We stand out here !</h3>
					<ul className="ltn__list-item-half clearfix">
						<li>
							<i className="flaticon-home-2" />
							User-friendly interface
						</li>
						<li>
							<i className="flaticon-mountain" />
							Comprehensive data
						</li>
						<li>
							<i className="flaticon-heart" />
							Customized search
						</li>
						<li>
							<i className="flaticon-secure" />
							Reliable reviews
						</li>
					</ul>
				</div>
				<p className='sub_text_whbmbc_about'>
					Choose BMBC to find the perfect coaching institute for your competitive exam preparation. We offer a comprehensive database of
					institutes across India, with detailed information on courses,
					fees, ratings, reviews, and location. Our user-friendly platform makes navigation easy, and our services are completely free.
					Let us help you achieve your goals by connecting you with the best coaching institutes available.
				</p>
				<ul className='whyBmbc_wrapper_about'>
					<li>
						<h4>
							Extensive List of Coaching Institutes
						</h4>
						<p>
							BMBC provides students with an extensive list of coaching institutes that cater to various competitive exams. Whether you're preparing for UPSC, SSC, MBA, or any other exam, we've got you covered. With our user-friendly platform, finding coaching institutes near you has never been easier.
						</p>
					</li>
					<li>
						<h4>
							Focus on Quality Education
						</h4>
						<p>
							At BMBC, we believe that every student deserves access to quality education, regardless of their background or location. We strive to provide a list of coaching institutes that offer flexible fees and scholarships to help students pursue their dream careers. We aim to provide holistic learning support to help students achieve their academic goals.        </p>
					</li>
					<li>
						<h4>
							Verified and Reliable Information
						</h4>
						<p>
							We value transparency and accuracy in the information we provide. That's why we ensure that all coaching institutes listed on our platform meet the criteria for providing quality coaching and have a proven track record of success. Our team of experts verifies every institute listed on our platform to ensure the information is up-to-date and reliable.
						</p>
					</li>
					<li>
						<h4>
							Commitment to Student Success
						</h4>
						<p>
							At BMBC, our ultimate goal is to see our students succeed in their competitive exams and achieve their academic aspirations. We understand the importance of the right coaching, resources, and support in helping students reach their full potential. With our platform, students can access accurate and up-to-date information on coaching institutes, allowing them to make an informed decision about their education.
						</p>
					</li>
					<p className='sub_text_whbmbc_about mb-5'>
						In conclusion, BMBC is your go-to platform for finding the best coaching institutes near you. With our extensive list of verified and reliable coaching institutes, focus on quality education, and commitment to student success, we are confident that we can help you achieve your academic goals.
					</p>
				</ul>
			</div>
		</div>
	}
}

export default AboutV4