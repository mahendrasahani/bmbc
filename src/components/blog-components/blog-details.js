import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import blogban from "../media/banner/3.jpg";
import blogban1 from "../media/banner/1.png";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { message } from 'antd';

const BlogDetails = () =>
{
	const apiURL = process.env.REACT_APP_API_URL;
	const name = localStorage.getItem("userName");
	const [data, setData] = useState([]);
	const [comment, setComment] = useState([])
	const [isActive, setActive] = useState(false);
	const [blogMessage, setBlogMessage] = useState({
		comment: "",
		userName: name,
	});
	const toggleClass = () =>
	{
		setActive(!isActive);
	};



	var gmtDate = data?.createdAt;
	var localDate = new Date(gmtDate);
	const paymentDate = new Date(localDate);
	const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	const payment_date_year = paymentDate.getFullYear();
	const payment_date_month = months[paymentDate.getMonth()];
	const payment_date_date = paymentDate.getDate();

	const fulldate_paymentDate = payment_date_date + '-' + payment_date_month + '-' + payment_date_year;

	const { id } = useParams();

	const fetchBlog = async () =>
	{
		const res = await axios.get(apiURL + `blog/id/${id}`)
		try
		{
			const newArr = res.data.data
			setData(newArr);
			setComment(newArr.comments)
		} catch (error)
		{
			message.error("Blog not fetched")
		}
	}



	const handlePostComment = async (blogId) =>
	{
		const comment = blogMessage.comment
		const userName = blogMessage.userName
		const postComment = await axios.put(apiURL + `blog/add-comment`, { blogId, comment, userName });
		if (postComment.data.success === true)
		{
			message.success("Comment posted Successfully ");
			setActive(!isActive);
			fetchBlog();
			blogMessage.comment("")
		} else
		{
			message.error("Error in posting comment");
		}
	}

	const handleInput = (e) =>
	{
		const { name, value } = e.target;
		setBlogMessage({
			...blogMessage,
			[name]: value,
		});
	}


	useEffect(() =>
	{
		fetchBlog();
		// eslint-disable-next-line
	}, [])

	return (
		<div className="ltn__page-details-area ltn__blog-details-area mb-20">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="ltn__blog-details-wrap">
							<div className="ltn__page-details-inner ltn__blog-details-inner">
								<div className="ltn__blog-meta">
									<ul>
										<li className="ltn__blog-category">
											<Link to="/shop">Goal  Focus</Link>
										</li>
									</ul>
								</div>
								<h2 className="blog_title_header">
									{data.heading}
								</h2>
								<p>
									{data.message}
								</p>
								<img src={blogban1} alt="dummy" />
								<div className="ltn__blog-meta mt-5">
									<ul className='blog_post_view_cmt_dt'>
										<li className="ltn__blog-author go-top">
											<p>
												<img src={blogban} style={{ width: '30px', height: '30px' }} alt="#" />By: BMBC
											</p>
										</li>
										<li className="ltn__blog-date">
											<i className="far fa-calendar-alt" />{fulldate_paymentDate}
										</li>
										<li>
											{/* <Link to="#"><i className="far fa-comments" />{data.comments?.length} Comments</Link> */}
											<p onClick={toggleClass} className='comment_all' ><i className="far fa-comments" /> {data.comments?.length} Comments</p>

										</li>
										<div className={isActive ? 'comnt_box_form' : 'comnt_box_form_hide'}>
											{
												comment.map((value, id) =>
												{
													var gmtDate = comment[id]?.date;
													var localDate = new Date(gmtDate);
													const paymentDate = new Date(localDate);
													const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
													const payment_date_year = paymentDate.getFullYear();
													const payment_date_month = months[paymentDate.getMonth()];
													const payment_date_date = paymentDate.getDate();
													const fulldate_paymentDate = payment_date_date + '-' + payment_date_month + '-' + payment_date_year;
											

													return (
														<div className="card_blog_cmt col-md-4" key={id}>
															<h2>
																{value.userName}
															</h2>
															<h6>{fulldate_paymentDate}</h6>
															<p>
																{value.comment}
															</p>
														</div>
													)
												})
											}

											<form>
												<textarea value={blogMessage.comment} onChange={handleInput} placeholder='Enter your comment' name="comment" className='form-control' />
												<button className='theme-btn-1 btn-sm  py-2 mt-1' type='button' onClick={() => handlePostComment(data._id)} >
													Post
												</button>
											</form>

										</div>
									</ul>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
		</div>
	)
}


export default BlogDetails;
