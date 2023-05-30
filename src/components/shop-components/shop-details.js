import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import userService from "../../common/userService";
import { useParams } from "react-router-dom";
import "../assets/css/review.css";
import "../assets/css/instituteDetails.css";
import { message } from "antd";
import axios from "axios";

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
export const ShopDetails = () =>
{
  const [instituteDetail, setInstituteDetail] = useState(null);
  const [instituteId, setInstituteId] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [ratingComment, setRatingComment] = useState('');
  const [ratingCount, setRatingCount] = useState('');
  const { id } = useParams();
  let publicUrl = process.env.PUBLIC_URL + "/";



  const getInstituteDetail = async (id) =>
  {
    const rawData = await userService.getInstitueById(id);
    const data = rawData.data.data;
    setInstituteDetail(data);
  };



  const hadnlePostReview = async (e) =>
  {
    e.preventDefault()
    if (ratingComment == '' || ratingCount == '')
    {
      message.warn("please type in all fields")
    } else
    {

      const obj = { rating: ratingCount, comment: ratingComment, userActiveId: userData }
      const add = await userService.addInstitueReview(id, obj);
      if (add.data.success == true)
      {
        message.success('Rating Added')
        handleReviews()
      } else
      {
        message.error("an error occured please try again later")
      }
    }
  }

  const handleReviews = async (id) =>
  {
    const res = await axios.get(`https://bookmybestclass.com/api/InstituteReview/InstituteId/${id}`)
    try
    {
      const reviewData = res.data.data
      const dataObj = Object.keys(reviewData)
      setReviews(dataObj);
      console.log(dataObj);

    } catch (error)
    {
      console.log(error);
    }
  };
  const [userData, setUserData] = useState(getLocalData());

  useEffect(() =>
  {
    setInstituteId(id);
    getInstituteDetail(id);
    handleReviews(id);
    getLocalData();
  }, []);


  return (
    <>
      <div className="ltn__shop-details-area pb-10 mt-5">
        <div className="container">
          {instituteDetail && (
            <div className="row">
              <div className="col-lg-8 col-md-12">
                <div className="inst_detail_box mb-60">
                  <div className="inst_detail_box_head d-flex justify-content-between">
                    <div>
                      <h1>{instituteDetail.name}</h1>
                      <label>
                        <span className="ltn__secondary-color">
                          <i className="flaticon-pin" />
                        </span>
                        {instituteDetail.city}
                      </label>
                    </div>
                    <div className="w-25">
                      <img src={instituteDetail.image} alt={instituteDetail.image} />
                    </div>
                  </div>
                  <h4 className="inst_title">Description</h4>
                  <p>{instituteDetail.info}</p>
                  <div className="comment_lv_fm">
                    <form action="#">
                      <h4 className="mb-3">Add a Review</h4>
                      <div className="input-item input-item-textarea ltn__custom-icon">
                        <textarea
                          placeholder="Type your comments...."

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
                          onClick={(e) => hadnlePostReview(e)}
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
                    Book Your Class Now
                  </button>
                </div>
                <div className="ltn__shop-details-tab-content-inner--- ltn__shop-details-tab-inner-2 ltn__product-details-review-inner mb-60">
                  <h4 className="title-2">
                    Student Reviews ({instituteDetail.rating})
                  </h4>
                  <div className="product-ratting">
                    <ul>
                      <li>
                        <Link to={`/institute-detail/${id}`}>
                          <i className="fas fa-star" />
                        </Link>
                      </li>
                      <li>
                        <Link to={`/institute-detail/${id}`}>
                          <i className="fas fa-star" />
                        </Link>
                      </li>
                      <li>
                        <Link to={`/institute-detail/${id}`}>
                          <i className="fas fa-star" />
                        </Link>
                      </li>
                      <li>
                        <Link to={`/institute-detail/${id}`}>
                          <i className="fas fa-star-half-alt" />
                        </Link>
                      </li>
                      <li>
                        <Link to={`/institute-detail/${id}`}>
                          <i className="far fa-star" />
                        </Link>
                      </li>
                      <li className="review-total">
                        <Link to={`/institute-detail/${id}`}>
                          ({instituteDetail.ratingCount})
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <hr />
                  <div className="row gy-4 mb-4">
                    {

                      reviews?.splice(0, 3).map((index, id) =>
                      {
                        return (
                          <>
                            <div className="col-12" key={id}>
                              <div className="review_card">
                                <div className="heading_rev">
                                  <img src={index?.userId?.photo} alt={index?.userId?.photo} />
                                  <div className="name">

                                    <span className="rating_icon">
                                      <h4>
                                        {index?.userId?.name}
                                      </h4>
                                      <h5>
                                        {
                                          index?.userId?.name
                                        }
                                      </h5>
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
                    Book Your Class Now
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ShopDetails;
