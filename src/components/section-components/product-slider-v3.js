import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import userService from "../../common/userService";
import "../assets/css/responsive.css"
export const ProductSliderV3 = () =>
{
  const [locationList, setLocationList] = useState([]);
  const [instituteList, setInstituteList] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");

  let publicUrl = process.env.PUBLIC_URL + "/";

  useEffect(() =>
  {
    getAllLocations();
    getAllInstitutes('all');
  }, []);

  const getAllLocations = async () =>
  {
    const rawData = await userService.getAllLocations();
    const data = rawData.data.data;
    setLocationList(data);
  };

  const handleClick = (filter) =>
  {
    getAllInstitutes(filter)
    setActiveFilter(filter);
  };

  const handleSelect = (e, filter) =>
  {
    setActiveFilter(filter);
    const val = e.target.value
    if (val != 'all')
    {
      const filteredArray = instituteList.filter((element) => element.city == val);
      setInstituteList(filteredArray)
    } else
    {
      getAllInstitutes('all')
    }
  }

  const getAllInstitutes = async (filter) =>
  {
    const rawData = await userService.getAllInstitutes();
    const data = rawData.data.data;
    if (filter == "all")
    {
      setInstituteList(data);
    } else
    {
      const filteredArray = data.filter((element) => element.category == filter);
      setInstituteList(filteredArray)
      console.log(filteredArray)
    }
  };

  return (
    <div
      className="ltn__search-by-place-area section-bg-1 before-bg-top--- bg-image-top--- pt-115 pb-70"
      data-bs-bg={publicUrl + "assets/img/bg/20.jpg"}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area ltn__section-title-2--- text-center">
              <h1 className="section-title">Top Institutes</h1>
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
                    onClick={() => handleClick("all")}
                  >
                    All
                  </button>
                  <button
                    style={{ backgroundColor: "transparent" }}
                    className={
                      activeFilter == "Online" ? "filter-active" : ""
                    }
                    onClick={() => handleClick("Online")}
                  >
                    Online
                  </button>
                  <button
                    style={{ backgroundColor: "transparent" }}
                    className={activeFilter == "Offline" ? "filter-active" : ""}
                    onClick={() => handleClick("Offline")}
                  >
                    Offline
                  </button>
                  {/* <select onChange={(e) => handleSelect(e, 'select')}
                      className={`${activeFilter == "select" ? "filter-active" : ""} instituteLocationFilter`}
                    >
                      <option key={0} value="all">All</option>
                      {locationList && locationList.map((ele, index) => (
                      <option key={index + 1} value="online">{ele.city}</option>
                      ))}
                    </select> */}
                </div>
              </h6>
            </div>
          </div>
        </div>
        <div
          style={{ display: "flex" }}
          className="row ltn__search-by-place-slider-1-active slick-arrow-1 go-top"
        >
          {instituteList &&
            instituteList.map((ele) => (
              <div key={ele._id} className="col-lg-4 col-md-6">
                <div className="ltn__search-by-place-item">
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
                    <h6>{ele.name} ({ele.city})</h6>
                    <h4>
                      <Link to={`/institute-detail/${ele._id}`}>
                        {ele.info.slice(0, 30) + "..."}
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
            ))}

          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default ProductSliderV3;
