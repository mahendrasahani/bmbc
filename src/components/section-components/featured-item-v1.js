import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import userService from "../../common/userService";
import moment from "moment";
// import parse from 'html-react-parser';

export const FeaturedItemV1 = () => {
  const [batchList, setBatchList] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  let publicUrl = process.env.PUBLIC_URL + "/";

  useEffect(() => {
    getAllBatches("all");
  }, []);

  const handleClick = (filter) => {
    getAllBatches(filter);
    setActiveFilter(filter);
  };

  const handleSelect = (e, filter) => {
    setActiveFilter(filter);
    const val = e.target.value
    getAllBatches(val);
  }

  const getAllBatches = async (filter) => {
    const rawData = await userService.getAllBatches(filter);
    const data = rawData.data.data;
    setBatchList(data);
  };

  return (
    <div>
      <div className="ltn__product-slider-area ltn__product-gutter pt-115 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2--- text-center">
                <h1 className="section-title">Batches</h1>
                <h6 className="section-subtitle">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "10px",
                      justifyContent: "center",
                    }}
                  >
                    <button
                      style={{ backgroundColor: "transparent" }}
                      className={activeFilter == "all" ? "filter-active" : ""}
                      onClick={(e) => handleClick("all")}
                    >
                      All
                    </button>
                    <button
                      style={{ backgroundColor: "transparent" }}
                      className={
                        activeFilter == "upcoming" ? "filter-active" : ""
                      }
                      onClick={(e) => handleClick("upcoming")}
                    >
                      Upcoming
                    </button>
                    <button
                      style={{ backgroundColor: "transparent" }}
                      className={
                        activeFilter == "ongoing" ? "filter-active" : ""
                      }
                      onClick={() => handleClick("ongoing")}
                    >
                      Ongoing
                    </button>
                    {/* <select id="filter" onChange={(e) => handleSelect(e, 'select')}
                      className={`${activeFilter == "select" ? "filter-active" : ""} batchSelectFilter`}
                    >
                      <option key={1} value="all">All</option>
                      <option key={2} value="online">Online</option>
                      <option key={3} value="offline">Offline</option>
                    </select> */}
                  </div>
                </h6>
              </div>
            </div>
          </div>
          <div className="tab-content">
            <div className="tab-pane fade active" id="liton_product_list">
              <div className="ltn__product-tab-content-inner ltn__product-list-view">
                <div className="row">
                  {batchList &&
                    batchList.slice(0, 20).map((ele) => (
                      <div key={ele._id} className="col-lg-12">
                        <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5">
                          <div className="product-img go-top">
                            <Link to={`/batch-detail/${ele._id}`}>
                              <img
                                src={publicUrl + "assets/img/product-3/1.jpg"}
                                alt="#"
                              />
                            </Link>
                          </div>
                          <div className="product-info">
                            <div className="product-badge-price">
                              <div className="product-badge">
                                <ul>
                                  <li className="sale-badg">
                                    {ele.branchName}
                                  </li>
                                </ul>
                              </div>
                              <div className="product-price">
                                <span>INR {ele.amount}</span>
                              </div>
                            </div>
                            <h2 className="product-title go-top">
                              <Link to={`/batch-detail/${ele._id}`}>
                                {ele.batchName}
                              </Link>
                            </h2>
                            <h5 style={{fontSize: "15px", fontWeight: "500", color: "#5C727D",  marginBottom: "10px"}}>
                                <span style={{fontSize: "14px", fontWeight: "400", color: "gray"}}>This Batch is offered by</span> {ele.instituteId?.name} ({ele.instituteId?.city})
                            </h5>
                            {ele.planName != null && 
                             <h5 style={{fontSize: "15px", fontWeight: "500", color: "#5C727D", marginBottom: "5px"}}>
                             <span style={{fontSize: "14px", fontWeight: "400", color: "gray"}}>Plan</span> {ele.planName?.title}
                         </h5>
                            }
                            <ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
                              <li style={{marginTop: "0.5rem"}}>
                                <span>Start Date </span>
                                {moment(ele.startDate).format("DD:MM:YYYY")}
                              </li>
                              {/* <li>
                                <span>2 </span>
                                Bath
                              </li>
                              <li>
                                <span>3450 </span>
                                Square Ft
                              </li> */}
                            </ul>
                          </div>
                          <div className="product-info-bottom">
											<div style={{opacity: '0'}} className="real-estate-agent">
											<div className="agent-brief go-top">
												<h6><Link to="/team-details">William Seklo</Link></h6>
												<small>Estate Agents</small>
											</div>
											</div>
											<div className="product-hover-action">
											<ul>
												<li>
												<a href="/" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
													<i className="flaticon-expand" />
												</a>
												</li>
												<li>
												<a href="/" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
													<i className="flaticon-heart-1" /></a>
												</li>
												<li>
												<span className="go-top">
												<Link to="/" title="Product Details">
													<i className="flaticon-add" />
												</Link>
												</span>
												</li>
											</ul>
											</div>
										</div>
                        </div>
                      </div>
                    ))}
                  {/* ltn__product-item */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedItemV1;
