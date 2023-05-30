import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import userService from "../../common/userService";
import { Toaster } from "react-hot-toast";
import moment from "moment";
import "../assets/css/searchForm.css";
import Carousel from './CarouselComponent';
export const SearchForm = () =>
{
  let publicUrl = process.env.PUBLIC_URL + "/";


  const [locationList, setLocationList] = useState([]);
  const [examList, setExamList] = useState([]);
  const [batchList, setBatchList] = useState([]);
  const [activeBatchFilter, setActiveBatchFilter] = useState("all");
  const [instLocationList, setInstLocationList] = useState([]);
  const [instituteList, setInstituteList] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [exam, setExam] = useState("all");
  const [city, setCity] = useState("all");
  const [mode, setMode] = useState("all");

  const [showMore, setShowMore] = useState(false);
  const [showMoreInst, setShowMoreInst] = useState(false)

  useEffect(() =>
  {
    getAllLocations();
    getAllExmas();
    getAllBatches("all");
    getAllInstituteLocations();
    getAllInstitutes('all');

  }, []);

  const getAllLocations = async () =>
  {
    const rawData = await userService.getAllLocations();
    const data = rawData.data.data;
    setLocationList(data);
  };

  const getAllExmas = async () =>
  {
    const rawData = await userService.getAllExams();
    const data = rawData.data.data;
    setExamList(data);
  };

  const getAllBatches = async (filter) =>
  {
    const rawData = await userService.getAllBatches(filter);

    const data = rawData.data.data;

    const batchList = data.map((obj) =>
    {
      const startDate = new Date(obj.startDate);
      const endDate = new Date(obj.endDate);

      const momentStartDate = moment(startDate);
      const momentEndDate = moment(endDate);
      const momentNowDate = moment();

      let status;

      if (momentNowDate.isAfter(momentEndDate))
      {
        status = "Ended";
      } else if (!momentNowDate.isAfter(momentStartDate))
      {
        status = "Upcoming";
      } else
      {
        status = "Ongoing";
      }

      return {
        ...obj,
        status,
      };
    });
    setBatchList(batchList);
  };

  const searchBatch = async (e) =>
  {
    e.preventDefault();
    const rawData = await userService.getAllBatchesByFilter(exam, city, mode);
    const data = rawData.data.data;

    const batchList = data.map((obj) =>
    {
      const startDate = new Date(obj.startDate);
      const endDate = new Date(obj.endDate);

      const momentStartDate = moment(startDate);
      const momentEndDate = moment(endDate);
      const momentNowDate = moment();

      let status;

      if (momentNowDate.isAfter(momentEndDate))
      {
        status = "Ended";
      } else if (!momentNowDate.isAfter(momentStartDate))
      {
        status = "Upcoming";
      } else
      {
        status = "Ongoing";
      }

      return {
        ...obj,
        status,
      };
    });
    setBatchList(batchList);
  };

  const handleClick = (filterString) =>
  {
    getAllBatches(filterString);
  };

  const handleMode = (e) =>
  {
    const filter = e.target.value
    setMode(e.target.value);
    getAllInstitutes(filter)
    setActiveFilter(filter);

  };

  const handleClickInstitute = (filter) =>
  {
    getAllInstitutes(filter)
    setActiveFilter(filter);
  };


  const getAllInstitutes = async (filter) =>
  {
    const rawData = await userService.getAllInstitutes();
    const data = rawData.data.data;
    const filteredArray = data.filter((element) => element.category === 'Online');
    const instFilterArray = data.filter((elem) => elem.category == filter)
    const filtered = data.filter((elem) =>
    {
      return elem.category === 'Offline';
    });
    if (filter == "all")
    {
      setInstituteList(data);
    } else if (filter == "online")
    {

      setInstituteList(filteredArray)
    }
    else if (filter == "offline")
    {

      setInstituteList(filtered)
    } else
    {
      setInstituteList(instFilterArray)
    }

  }
  const getAllInstituteLocations = async () =>
  {
    const rawData = await userService.getAllLocations();
    const data = rawData.data.data;
    setInstLocationList(data);
  };
  return (
    <>

      <div className="ltn__car-dealer-form-area batch_srch_frm">
        <div className="container">
          <div className="ltn__car-dealer-form-tab">
            <div className="tab-content bg-white box-shadow-1 position-relative pb-10">
              <div className="tab-pane fade active show" id="ltn__form_tab_1_1">
                <div className="car-dealer-form-inner">
                  <form action="#" className="ltn__car-dealer-form-box row gx-1">
                    <div className="ltn__car-dealer-form-item ltn__custom-icon---- ltn__icon-car----  col-md-3 col-4">
                      {examList && examList.length > 0 && (
                        <select
                          onChange={(e) => setExam(e.target.value)}
                          className="nice-select"
                        >
                          <option key={0} value={"all"}>
                            Choose Exam
                          </option>
                          {examList.map((ele) => (
                            <option
                              value={ele._id}
                              className="option"
                              key={ele._id}
                            >
                              {ele.name} ({ele.branchName})
                            </option>
                          ))}
                        </select>
                      )}
                    </div>

                    <div className="ltn__car-dealer-form-item ltn__custom-icon---- ltn__icon-calendar---- col-md-3 col-4">
                      <select
                        onChange={(e) => handleMode(e)}
                        className="nice-select"
                      >
                        <option key={0} value={"all"}>
                          All (Online/Offline)
                        </option>
                        <option className="option" key={1} value="online" >
                          Online
                        </option>
                        <option className="option" key={2} value="offline">
                          Offline
                        </option>
                      </select>
                    </div>

                    <div className="ltn__car-dealer-form-item ltn__custom-icon---- ltn__icon-calendar---- col-md-3 col-3">
                      {locationList && locationList.length > 0 && (
                        <select
                          value={city}
                          disabled={mode == "online"}
                          onChange={(e) => setCity(e.target.value)}
                          className="nice-select"
                        >
                          <option key={0} value={"all"}>
                            All Cities
                          </option>
                          {locationList.map((ele) => (
                            <option
                              value={ele.city}
                              className="option"
                              key={ele._id}

                            >
                              {ele.city}
                            </option>
                          ))}
                        </select>
                      )}
                      {/* {locationList && locationList.length > 0 && 'abc'} */}
                    </div>

                    <div className="ltn__car-dealer-form-item ltn__custom-icon  ltn__icon-calendar col-md-3 col-1">
                      <div className="btn-wrapper find_btn_wrap mt-0 go-top">
                        {/* <button type="submit" className="btn theme-btn-1 btn-effect-1 text-uppercase">Search Inventory</button> */}
                        <button
                          onClick={(e) => searchBatch(e)}
                          className="btn theme-btn-1 find_now_btn btn-effect-1 text-uppercase"
                        >
                          Find Now
                        </button>
                        <button
                          onClick={(e) => searchBatch(e)}
                          className="btn find_now_btn_mob"
                        >
                          <i class="fa-solid fa-magnifying-glass"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Toaster />
      </div>

      {/* Batch List */}

      <div className="ltn__product-slider-area batch_ins_list ltn__product-gutter">
        <div className="container">
          <div className="section-title-area mb-3 ltn__section-title-2--- text-center">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h1 className="section-title inst_title mb-0">Recommended Batches</h1>
              {
                !showMore ?
                  <button className="btn  show_more_btn" onClick={() => setShowMore(true)}>See All<i class="fa-solid fa-arrow-right"></i></button>
                  :
                  <button className="btn  show_more_btn" onClick={() => setShowMore(false)}>See Less<i class="fa-solid fa-arrow-right"></i></button>
              }
            </div>
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
                  className={
                    activeBatchFilter == "all" ? "filter-active" : ""
                  }
                  onClick={(e) => handleClick("all")}
                >
                  All
                </button>
                <button
                  style={{ backgroundColor: "transparent" }}
                  className={
                    activeBatchFilter == "upcoming" ? "filter-active" : ""
                  }
                  onClick={(e) => handleClick("upcoming")}
                >
                  Upcoming
                </button>
                <button
                  style={{ backgroundColor: "transparent" }}
                  className={
                    activeBatchFilter == "ongoing" ? "filter-active" : ""
                  }
                  onClick={() => handleClick("ongoing")}
                >
                  Ongoing
                </button>
                {/* <select id="filter" onChange={(e) => handleSelect(e, 'select')}
                className={`${activeBatchFilter == "select" ? "filter-active" : ""} batchSelectFilter`}
              >
                <option key={1} value="all">All</option>
                <option key={2} value="online">Online</option>
                <option key={3} value="offline">Offline</option>
              </select> */}
              </div>
            </h6>
          </div>
          <div className="tab-content">
            <div className="tab-pane fade active" id="liton_product_list">
              <div className="ltn__product-tab-content-inner ltn__product-list-view">
                <div className="row">
                  {
                    showMore ?
                      batchList.length > 0
                        ? batchList.map((ele) => (
                          <div key={ele._id} className="col-lg-12">
                            <div className="batch_card">
                              <div className="batch_pro_img">
                                <Link to={`/batch-detail/${ele._id}`}>
                                  <img src={ele.image} alt="#" />
                                </Link>
                              </div>
                              <div className="batch_pro_cnt">
                                <div className="batch_name">
                                  <h2>
                                    Exam: {ele.examId?.name} (
                                    {ele.branchName})
                                  </h2>
                                  <h2>
                                    INR {ele.amount}
                                  </h2>
                                </div>
                                <div className="batch_number">
                                  <h2>
                                    <Link to={`/batch-detail/${ele._id}`}>
                                      Batch No: {ele.batchName}
                                    </Link>
                                  </h2>
                                  <span>
                                    {ele.category}
                                  </span>
                                </div>
                                <div className="batch_inst">
                                  <h5>
                                    <span>Institute Name :</span> {ele.instituteId?.name} {ele.category == "Offline" ? ele.instituteId?.city : ""}
                                  </h5>
                                  <h5>15 of 20 seats booked</h5>
                                </div>
                                <div className="batch_inst">
                                  <h5>
                                    <span>Status :</span> {ele.status}
                                  </h5>
                                  <h5>
                                    <span>Start Date :</span>  {moment(ele.startDate).format("DD:MM:YYYY")}
                                  </h5>
                                </div>
                                <div className="batch_rate">
                                  <h5>
                                    <span>Batch Type :</span>{ele.planName?.title}
                                  </h5>
                                  <h5>
                                    <span>Rating :</span> {ele.rating}<span> out of 5</span>
                                  </h5>
                                </div>
                                <div className="view_more_btn">
                                  <Link to={`/batch-detail/${ele._id}`}>
                                    View More
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="batch_mob">
                              <div className="batch_card_mob">
                                <div className="batch_pro_img">
                                  <Link to={`/batch-detail/${ele._id}`} className="logo_img">
                                    <img src={ele.image} alt="#" />
                                  </Link>
                                  <div className="batch_pro_cnt_left">
                                    <div className="batch_name">
                                      <h2>
                                        Exam: {ele.examId?.name} (
                                        {ele.branchName})
                                      </h2>
                                      <h2>
                                        INR {ele.amount}
                                      </h2>
                                    </div>
                                    <div className="batch_number">
                                      <h2>
                                        <Link to={`/batch-detail/${ele._id}`}>
                                          Batch No: {ele.batchName}
                                        </Link>
                                      </h2>
                                      <span>
                                        {ele.category}
                                      </span>
                                    </div>
                                    <div className="batch_inst">
                                      <h5>
                                        <span>Status :</span><p> {ele.status}</p>
                                      </h5>
                                      <h5>
                                        <span>Start Date :</span>  {moment(ele.startDate).format("DD:MM:YYYY")}
                                      </h5>
                                    </div>
                                  </div>
                                </div>
                                <div className="batch_inst">
                                  <h5>
                                    <span>Institute Name :</span><p>{ele.instituteId?.name} {ele.category == "Offline" ? ele.instituteId?.city : ""}</p>
                                  </h5>
                                </div>

                                <div className="batch_rate">
                                  <h5>
                                    <span>Batch Type :</span>{ele.planName?.title}
                                  </h5>
                                  <h5>
                                    <span>Rating :</span> {ele.rating}<span> out of 5</span>
                                  </h5>
                                </div>
                                <div className="view_more_btn">
                                  <Link to={`/batch-detail/${ele._id}`}>
                                    View More
                                  </Link>
                                </div>
                              </div>
                            </div>

                          </div>
                        ))
                        : <h3 className="text-center">
                          NO BATCH FOUND
                        </h3>

                      :
                      batchList.length > 0
                        ? batchList.slice(0, 5).map((ele) => (
                          <div key={ele._id} className="col-lg-12">
                            <div className="batch_card">
                              <div className="batch_pro_img">
                                <Link to={`/batch-detail/${ele._id}`}>
                                  <img src={ele.image} alt="#" />
                                </Link>
                              </div>
                              <div className="batch_pro_cnt">
                                <div className="batch_name">
                                  <h2>
                                    Exam: {ele.examId?.name} (
                                    {ele.branchName})
                                  </h2>
                                  <h2>
                                    INR {ele.amount}
                                  </h2>
                                </div>
                                <div className="batch_number">
                                  <h2>
                                    <Link to={`/batch-detail/${ele._id}`}>
                                      Batch No: {ele.batchName}
                                    </Link>
                                  </h2>
                                  <span>
                                    {ele.category}
                                  </span>
                                </div>
                                <div className="batch_inst">
                                  <h5>
                                    <span>Institute Name :</span> {ele.instituteId?.name} {ele.category == "Offline" ? ele.instituteId?.city : ""}
                                  </h5>
                                  <h5>15 of 20 seats booked</h5>
                                </div>
                                <div className="batch_inst">
                                  <h5>
                                    <span>Status :</span> {ele.status}
                                  </h5>
                                  <h5>
                                    <span>Start Date :</span>  {moment(ele.startDate).format("DD:MM:YYYY")}
                                  </h5>
                                </div>
                                <div className="batch_rate">
                                  <h5>
                                    <span>Batch Type :</span>{ele.planName?.title}
                                  </h5>
                                  <h5>
                                    <span>Rating :</span> {ele.rating}<span> out of 5</span>
                                  </h5>
                                </div>
                                <div className="view_more_btn">
                                  <Link to={`/batch-detail/${ele._id}`}>
                                    View More
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="batch_mob">
                              <div className="batch_card_mob">
                                <div className="batch_pro_img">
                                  <Link to={`/batch-detail/${ele._id}`} className="logo_img">
                                    <img src={ele.image} alt="#" />
                                  </Link>
                                  <div className="batch_pro_cnt_left">
                                    <div className="batch_name">
                                      <h2>
                                        Exam: {ele.examId?.name} (
                                        {ele.branchName})
                                      </h2>
                                      <h2>
                                        INR {ele.amount}
                                      </h2>
                                    </div>
                                    <div className="batch_number">
                                      <h2>
                                        <Link to={`/batch-detail/${ele._id}`}>
                                          Batch No: {ele.batchName}
                                        </Link>
                                      </h2>
                                      <span>
                                        {ele.category}
                                      </span>
                                    </div>
                                    <div className="batch_inst">
                                      <h5>
                                        <span>Status :</span><p> {ele.status}</p>
                                      </h5>
                                      <h5>
                                        <span>Start Date :</span>  {moment(ele.startDate).format("DD:MM:YYYY")}
                                      </h5>
                                    </div>
                                  </div>
                                </div>
                                <div className="batch_inst">
                                  <h5>
                                    <span>Institute Name :</span><p>{ele.instituteId?.name} {ele.category == "Offline" ? ele.instituteId?.city : ""}</p>
                                  </h5>
                                </div>

                                <div className="batch_rate">
                                  <h5>
                                    <span>Batch Type :</span>{ele.planName?.title}
                                  </h5>
                                  <h5>
                                    <span>Rating :</span> {ele.rating}<span> /5</span>
                                  </h5>
                                </div>
                                <div className="view_more_btn">
                                  <Link to={`/batch-detail/${ele._id}`}>
                                    View More
                                  </Link>
                                </div>
                              </div>
                            </div>

                          </div>
                        ))
                        : <h3 className="text-center">
                          NO BATCH FOUND
                        </h3>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* INSTITUTE LIST */}

      <div className="ltn__search-by-place-area section-bg-1 batch_ins_list before-bg-top--- bg-image-top---" data-bs-bg={publicUrl + "assets/img/bg/20.jpg"}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area mb-3 ltn__section-title-2--- text-center">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h1 className="section-title inst_title mb-0">Top Institutes</h1>
                  {
                    !showMoreInst ?
                      <button className="btn  show_more_btn" onClick={() => setShowMoreInst(true)}>See All<i class="fa-solid fa-arrow-right"></i></button>
                      :
                      <button className="btn  show_more_btn" onClick={() => setShowMoreInst(false)}>See Less<i class="fa-solid fa-arrow-right"></i></button>
                  }

                </div>
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
                      onClick={() => handleClickInstitute("all")}
                    >
                      All
                    </button>
                    <button
                      style={{ backgroundColor: "transparent" }}
                      className={
                        activeFilter == "Online" ? "filter-active" : ""
                      }
                      onClick={() => handleClickInstitute("Online")}
                    >
                      Online
                    </button>
                    <button
                      style={{ backgroundColor: "transparent" }}
                      className={activeFilter == "Offline" ? "filter-active" : ""}
                      onClick={() => handleClickInstitute("Offline")}
                    >
                      Offline
                    </button>
                  </div>
                </h6>
              </div>
            </div>
          </div>
          <div style={{ display: "flex" }} className="row gx-2 gx-lg-4 slick-arrow-1 go-top">

            {
              showMoreInst ?
                instituteList &&
                instituteList.map((ele) => (
                  <div className='col-lg-4 col-md-4 col-6  inst_car_all' key={ele._id}>
                    <div className="ltn__search-by-place-item institute_list">
                      <div style={{ height: "320px" }} className="search-by-place-img">
                        <Link to={`/institute-detail/${ele._id}`} className="int_banner">
                          <img

                            src={ele.image}
                            alt="#"
                          />
                        </Link>
                        <div className="search-by-place-badge">
                          <ul>
                            <li>{ele.category}</li>
                          </ul>
                        </div>
                      </div>
                      <div className="search-by-place-info">
                        <h6>{ele.name.slice(0, 12) + "..."} ({ele.city})</h6>
                        <h4>
                          <Link to={`/institute-detail/${ele._id}`}>
                            {ele.info.slice(0, 22) + "..."}
                          </Link>
                        </h4>
                        <div className="search-by-place-btn">
                          <Link to={`/institute-detail/${ele._id}`}>
                            View Institute <i className="flaticon-right-arrow" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
                :
                <Carousel show={3}>{
                  instituteList &&
                  instituteList.slice(0, 6).map((ele) => (
                    <div className='content_carousel inst_car' key={ele._id}>
                      <div className="ltn__search-by-place-item institute_list">
                        <div style={{ height: "320px" }} className="search-by-place-img">
                          <Link to={`/institute-detail/${ele._id}`} className="int_banner">
                            <img

                              src={ele.image}
                              alt="#"
                            />
                          </Link>
                          <div className="search-by-place-badge">
                            <ul>
                              <li>{ele.category}</li>
                            </ul>
                          </div>
                        </div>
                        <div className="search-by-place-info">
                          <h6>{ele.name.slice(0, 12) + "..."} ({ele.city})</h6>
                          <h4>
                            <Link to={`/institute-detail/${ele._id}`}>
                              {ele.info.slice(0, 22) + "..."}
                            </Link>
                          </h4>
                          <div className="search-by-place-btn">
                            <Link to={`/institute-detail/${ele._id}`}>
                              View Institute <i className="flaticon-right-arrow" />
                            </Link>
                          </div>

                        </div>
                      </div>
                    </div>
                  ))
                }

                </Carousel>
            }



          </div>

        </div>
      </div>

    </>
  );
};

export default SearchForm;
