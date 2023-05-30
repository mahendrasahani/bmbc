import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Social from '../section-components/social';
import Copyright from './copyright';

class Footer_v1 extends Component
{

	componentDidMount()
	{

		const $ = window.$;

		let publicUrl = process.env.PUBLIC_URL + '/'
		const minscript = document.createElement("script");
		minscript.async = true;
		minscript.src = publicUrl + "assets/js/main.js";

		document.body.appendChild(minscript);

		$('.go-top').find('a').on('click', function ()
		{

			$(".quarter-overlay").fadeIn(1);

			$(window).scrollTop(0);

			setTimeout(function ()
			{
				$(".quarter-overlay").fadeOut(300);
			}, 800);

		});


		$(document).on('click', '.theme-btn-1 ', function ()
		{
			$('div').removeClass('modal-backdrop');
			$('div').removeClass('show');
			$('div').removeClass('fade');
			$('body').attr("style", "");
		});
	}


	render()
	{

		let publicUrl = process.env.PUBLIC_URL + '/'
		let imgattr = "Footer logo"

		return (
			<footer className="ltn__footer-area  ">
				<div className="footer-top-area  section-bg-2 plr--5">
					<div className="container-fluid">
						<div className="row">
							<div className="col-lg-6 col-12">
								<div className="footer-widget footer-about-widget footer_logo_wrap mb-3">
									<div className="footer-logo">
										<div className="site-logo ">
											<img src={publicUrl + "assets/img/BMBC-1.png"} alt="Logo" />
										</div>
									</div>
									<p style={{ textAlign: "justify", fontSize: " 14px", marginBottom: 0 }}>
										BMBC the breakthrough platform for students seeking assistance with finding their ideal coaching institute,
										is an ingenious solution to a long-standing problem. Competitive exams hold immense importance in determining
										the future of students in India.
									</p>
								</div>
							</div>
							<div className="col-lg-3 col-6">
								<div className="quick_links_wrapper">
									<h4>Quick Links</h4>
									<ul className="go-top">
										<li>
											<Link to="/term-condition">Terms &amp; Conditions</Link>
										</li>
										<li>
											<Link to="/faq">FAQ</Link>
										</li>
										<li>
											<Link to="/privacy-policy">Privacy &amp; Policy</Link>
										</li>
									</ul>
								</div>
							</div>
							<div className='col-lg-3 col-6'>
								<div className="footer-address">
									<h4 className='footer_heading'>Contact Info</h4>
									<ul>
										<li>
											<div className="footer-address-icon">
												<i className="icon-placeholder" style={{ color: "#fff" }} />
											</div>
											<div className="footer-address-info">
												<p className="footer-list-text" style={{ color: "#fff" }}>Gurugram, Haryana 122002</p>
											</div>
										</li>

										<li>
											<div className="footer-address-icon">
												<i className="icon-mail" style={{ color: "#fff" }} />
											</div>
											<div className="footer-address-info">
												<p style={{ color: "#fff" }}><a className="footer-list-text" href="mailto:info@bookmybestclass.com" style={{ color: "#fff" }}>info@bookmybestclass.com</a></p>
											</div>
										</li>
									</ul>
								</div>

							</div>
							<div className="ltn__social-media_ft">
								<h4 className='footer_heading'>Follow Us</h4>
								<Social />
							</div>
						</div>
					</div>
				</div>
				<Copyright />
			</footer>
		)
	}
}


export default Footer_v1