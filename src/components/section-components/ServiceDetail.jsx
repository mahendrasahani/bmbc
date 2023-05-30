import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import userService from "../../common/userService";
import { useParams } from "react-router-dom";
import "../assets/css/batchDetail.css";
import moment from "moment";
import axios from "axios";
import { message } from "antd";



const getLocalData = () =>
{

  let userActive = localStorage.getItem("id");

  if (userActive)
  {
    return localStorage.getItem("id")
  } else
  {
    return [];
  }
}

const ServiceDetailForm = () =>
{
  const [batchReview, setBatchReview] = useState([]);
  const [ratingComment, setRatingComment] = useState('');
  const [ratingCount, setRatingCount] = useState('');
  const [batchDetail, setBatchDetail] = useState(null);
  const { id } = useParams();
  let publicUrl = process.env.PUBLIC_URL + "/";


  const handleReviews = async () =>
  {
    const res = await axios.get("https://bookmybestclass.com/api/batchReview/list");
    try
    {
      const reviewData = res.data.data
      setBatchReview(reviewData);
    } catch (error)
    {
      console.log(error);
    }
  };

  const [userData, setUserData] = useState(getLocalData());
  // ADD BATH RATING

  const handlePostReview = async (e) =>
  {
    e.preventDefault()
    if (ratingComment == '' || ratingCount == '')
    {
      message.warn("please type in all fields")
    } else
    {
      const obj = { rating: ratingCount, comment: ratingComment, userActiveId: userData }
      const add = await axios.post("https://bookmybestclass.com/api/batchReview/add", {
        batchId: id,
        message: obj.comment,
        rating: obj.rating,
        userId: obj.userActiveId
      })
      if (add.data.success == true)
      {
        message.success('Rating Added')
      }
      else
      {
        message.error("You already given a review")
      }
    }
  }

  const getBatchDetail = async (id) =>
  {
    const rawData = await userService.getBatchById(id);
    const data = rawData.data.data;
    setBatchDetail(data);
  };


  useEffect(() =>
  {
    window.scrollTo(0, 0);
    // setBatchId(id);
    getBatchDetail(id);
    handleReviews();
    getLocalData();
  }, []);

  return (
    <div className="ltn__shop-details-area pb-10">
      <div className="container">
        {batchDetail && (
          <>
            <div className="row">
              <div className="col-lg-8 col-md-12">
                <div className="batch_detail_box mb-60">
                  <div className="batch_detail_box_head">
                    <div>
                      <span>Category: {batchDetail.category}</span>
                      <h1>Batch Name: {batchDetail.batchName}</h1>
                      <label>
                        <span className="ltn__secondary-color"></span>
                        Branch Name: {batchDetail.branchName}
                      </label>
                    </div>
                    <div className="w-25">
                      <img src={batchDetail.image} alt={batchDetail.img} />
                    </div>
                  </div>
                  <h3>
                    <span className="mb-0">
                      Institute Name:
                    </span><span>{batchDetail.instituteId?.name}</span> </h3>
                  <div className="date_wrap">
                    <h6>Start Date: {moment(batchDetail.startDate).format("DD:MM:YYYY")}</h6> <h6>End Date: {moment(batchDetail.endDate).format("DD:MM:YYYY")}</h6>
                  </div>
                  <div className="batch_timings desk_v">
                    <h4 className="title_head mb-0">Class Timings</h4>
                    <ul>
                      {batchDetail.timings.map((ele) => (
                        <li>
                          <label>{ele}</label>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="comment_lv_fm">
                    <form action="#">
                      <h4>Add a Review</h4>
                      <div className="mb-30">
                        <div className="add-a-review">
                          <h6>Your Ratings:</h6>
                          <div className="product-ratting">
                            <ul>
                              <li>
                                <Link to={`/batch-details/${id}`}>
                                  <i className="fas fa-star" />
                                </Link>
                              </li>
                              <li>
                                <Link to={`/batch-details/${id}`}>
                                  <i className="fas fa-star" />
                                </Link>
                              </li>
                              <li>
                                <Link to={`/batch-details/${id}`}>
                                  <i className="fas fa-star" />
                                </Link>
                              </li>
                              <li>
                                <Link to={`/batch-details/${id}`}>
                                  <i className="fas fa-star" />
                                </Link>
                              </li>
                              <li>
                                <Link to={`/batch-details/${id}`}>
                                  <i className="fas fa-star" />
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="input-item input-item-textarea ltn__custom-icon">
                        <textarea
                          placeholder="Type your comments...."
                          defaultValue={""}
                          value={ratingComment}
                          onChange={(e) => setRatingComment(e.target.value)}
                        />
                      </div>
                      <div className="input-item input-item-name ltn__custom-icon">
                        <input onChange={(e) => setRatingCount(e.target.value)} type="text" placeholder="Type your rating (0 - 5)" />
                      </div>
                      <div className="btn-wrapper mt-0">
                        <button
                          className="btn theme-btn-1 btn-effect-1 text-uppercase"
                          type="submit"
                          onClick={(e) => handlePostReview(e)}
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>


                </div>
              </div>
              <div className="col-lg-4">
                <div className="widget ltn__form-widget desk_ver">
                  <button type="submit" className="btn theme-btn-1">
                    Book Your Batch Now
                  </button>
                </div>

                <div className="ltn__shop-details-tab-content-inner--- ltn__shop-details-tab-inner-2 ltn__product-details-review-inner mb-60">
                  <h4 className="title_head mb-0">
                    Student Reviews <span> ({batchDetail.rating})</span>
                  </h4>
                  <div className="product-ratting mt-0">
                    <ul className="ps-3">
                      <li>
                        <i className="fas fa-star btnStyle"></i>
                      </li>
                      <li>
                        <i className="fas fa-star btnStyle"></i>
                      </li>
                      <li>
                        <i className="fas fa-star btnStyle"></i>
                      </li>
                      <li>
                        <i className="fas fa-star btnStyle"></i>
                      </li>
                      <li>
                        <i className="far fa-star btnStyle"></i>
                      </li>
                      <li className="review-total">
                        ({batchDetail.ratingCount})
                      </li>
                    </ul>
                  </div>
                  <hr />
                  <div className="row gy-4 mb-4">
                    {
                      batchReview?.splice(0, 3).map((index, id) =>
                      {
                        return (
                          <>
                            <div className="col-lg-12 col-md-4 col-6" key={id}>
                              <div className="review_card">
                                <div className="heading_rev">
                                  <img src={index?.userId?.photo} alt={index?.userId?.photo} />
                                  <div className="name">
                                    <h3>
                                      {index?.userId?.name}
                                    </h3>
                                    <p>
                                      {index?.userId?.city}
                                    </p>
                                    <span className="rating_icon">
                                      <h4>Rating ({index?.rating})</h4>
                                    </span>
                                  </div>
                                </div>
                                <p className="cmt">
                                  {
                                    index?.message
                                  }
                                </p>
                              </div>
                            </div>

                          </>
                        )
                      })

                    }

                  </div>

                </div>

                <div className="widget ltn__form-widget mob_v">
                  <button type="submit" className="btn theme-btn-1">
                    Book Your Batch Now
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ServiceDetailForm;
