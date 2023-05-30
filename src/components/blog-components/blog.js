import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
import "../assets/css/blog.css";
import blogban from "../media/banner/3.jpg";
import axios from 'axios';

const Blog = () =>
{
	const apiURL = process.env.REACT_APP_API_URL;
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(false);


	var gmtDate = data[0]?.createdAt;
	var localDate = new Date(gmtDate);
	const paymentDate = new Date(localDate);
	const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	const payment_date_year = paymentDate.getFullYear();
	const payment_date_month = months[paymentDate.getMonth()];
	const payment_date_date = paymentDate.getDate();

	const fulldate_paymentDate = payment_date_date + '-' + payment_date_month + '-' + payment_date_year;

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
		fetchBlog()
		// eslint-disable-next-line
	}, [])

	let publicUrl = process.env.PUBLIC_URL + '/'
	return (
		<div className="ltn__blog-area mb-120">
			<div className="container">
				<div className="row">
					<div className="col-lg-8">
						<div className="ltn__blog-list-wrap">

							{
								!loading ?
									<>
										<h2 className='blog_cmnt_title'>Latest Blogs</h2>
										<div className="ltn__blog-item ltn__blog-item-5 go-top">
											<div className="ltn__blog-img">
												<Link to={`/blogDetail/${data[0]?._id}`}><img src={blogban} alt="dummy" /></Link>
											</div>
											<div className="ltn__blog-brief">
												<h3 className="blog_home_tit">{data[0]?.heading}</h3>
												<div className="ltn__blog-meta">
													<ul>
														<li className="ltn__blog-date">
															<i className="far fa-calendar-alt" />{fulldate_paymentDate}
														</li>
														<li>
															<Link to={`/blogDetail/${data[0]?._id}`}><i className="far fa-eye" />{data[0]?.views}</Link>
														</li>
														<li>
															<Link to={`/blogDetail/${data[0]?._id}`}><i className="far fa-comments" />{data[0]?.comments?.length} Comments</Link>
															{/* <Button className='cmt_btn' onClick={handleShow}>
															<i className="far fa-comments" />35 Comments
														</Button>
														<Modal show={show} onHide={handleClose}>
															<Modal.Header closeButton>
																<Modal.Title style={{ fontSize: '16px' }}>Comment</Modal.Title>
															</Modal.Header>
															<Modal.Body>{data[0]?.comments?.map((index, id) =>
															{

																return (
																	<>
																		<div className='blog_cmt_Card' key={id}>
																			<h4>  {index.userName}</h4>
																		</div>
																	</>
																)
															})}
															</Modal.Body>
															<Modal.Footer>

															</Modal.Footer>
														</Modal> */}
														</li>

													</ul>
												</div>
												<p>{data[0]?.message}</p>
												<div className="ltn__blog-meta-btn">
													<div className="ltn__blog-meta">
														<ul>
															<li className="ltn__blog-author">
																<Link to="/blog-grid"><img src={publicUrl + "assets/img/blog/author.jpg"} alt="#" />By: BMBC</Link>
															</li>
														</ul>
													</div>
													<div className="ltn__blog-btn">
														<Link to={`/blogDetail/${data[0]?._id}`}><i className="fas fa-arrow-right" />Read more</Link>
													</div>
												</div>
											</div>
										</div>
									</>

									:
									loading
							}

						</div>
					</div>
					<Sidebar />
				</div>
			</div>
		</div>
	)
}

export default Blog;
