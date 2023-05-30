import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import blogban from "../media/banner/3.jpg";
const Sidebar = () =>
{
	const apiURL = process.env.REACT_APP_API_URL;
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(false);


	const fetchBlog = async () =>
	{
		setLoading(true);
		const res = await axios.get(apiURL + `blog/list`)
		try
		{
			setData(res.data.data);
			setLoading(false);


		} catch (error)
		{

		}
	}
	useEffect(() =>
	{
		fetchBlog();
		// eslint-disable-next-line
	}, []);

	let publicUrl = process.env.PUBLIC_URL + '/'

	return (
		<div className="col-lg-4 go-top sidebar_style_wrapping">
			<aside className="sidebar-area blog-sidebar ltn__right-sidebar">
				<div className="ltn__blog-list-wrap">
					<h2 className='blog_cmnt_title'>Previous Blogs</h2>
					{

						data.map((index, id) =>
						{
							var gmtDate = data[id]?.createdAt;
							var localDate = new Date(gmtDate);
							const paymentDate = new Date(localDate);
							const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
							const payment_date_year = paymentDate.getFullYear();
							const payment_date_month = months[paymentDate.getMonth()];
							const payment_date_date = paymentDate.getDate();
							const fulldate_paymentDate = payment_date_date + '-' + payment_date_month + '-' + payment_date_year;
							return (
								<>

									<div className="ltn__blog-item ltn__blog-item-5 go-top" key={id}>
										<div className="ltn__blog-img">
											<Link to={`/blogDetail/${index?._id}`}><img src={blogban} alt="dummy" /></Link>
										</div>
										<div className="ltn__blog-brief">
											<h3 className="blog_home_title">{index?.heading}</h3>
											<div className="ltn__blog-meta">
												<ul>
													<li className="ltn__blog-date">
														<i className="far fa-calendar-alt" />{fulldate_paymentDate}
													</li>
													<li>
														<Link to={`/blogDetail/${index?._id}`}><i className="far fa-eye" />{index?.views}</Link>
													</li>
													<li>
														<Link to={`/blogDetail/${index?._id}`}><i className="far fa-comments" />{index?.comments?.length} Comments</Link>
													</li>
												</ul>
											</div>
											<p>{index?.message}</p>
											<div className="ltn__blog-meta-btn">
												<div className="ltn__blog-meta">
													<ul>
														<li className="ltn__blog-author">
															<Link to="/blog-grid"><img src={publicUrl + "assets/img/blog/author.jpg"} alt="#" />By: BMBC</Link>
														</li>
													</ul>
												</div>
												<div className="ltn__blog-btn">
													<Link to={`/blogDetail/${index?._id}`}><i className="fas fa-arrow-right" />Read more</Link>
												</div>
											</div>
										</div>
									</div>
								</>

							)
						})


					}

				</div>
			</aside>
		</div>
	)
}

export default Sidebar;
