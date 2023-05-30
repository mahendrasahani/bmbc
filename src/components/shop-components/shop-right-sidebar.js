import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import parse from 'html-react-parser';
import userService from "../../common/userService";

export const ShopGridV1 = () => {
  const [instituteList, setInstituteList] = useState([]);
  let publicUrl = process.env.PUBLIC_URL + "/";

  useEffect(() => {
    getAllInstitutes();
  }, []);

  const getAllInstitutes = async () => {
    const rawData = await userService.getAllInstitutes();
    const data = rawData.data.data;
    setInstituteList(data);
  };

  return (
    <div>
      <div className="ltn__product-area ltn__product-gutter">
        <div className="container">
          <div className="row">
            <div className="col-lg-12  mb-100">
              <div className="ltn__shop-options">
                <ul className="justify-content-start">
                  <li>
                    <div className="short-by text-center">
                      <select className="nice-select">
                        <option>Default Sorting</option>
                        <option>Sort by popularity</option>
                        <option>Sort by price: low to high</option>
                        <option>Sort by price: high to low</option>
                      </select>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="tab-content">
                <div className="tab-pane fade active" id="liton_product_list">
                  <div className="ltn__product-tab-content-inner ltn__product-list-view">
                    <div className="row">
                      <div className="col-lg-12">
                        {/* Search Widget */}
                        <div className="ltn__search-widget mb-30">
                          <form action="#">
                            <input
                              type="text"
                              name="search"
                              placeholder="Search your keyword..."
                            />
                            <button type="submit">
                              <i className="fas fa-search" />
                            </button>
                          </form>
                        </div>
                      </div>
                      {instituteList &&
                        instituteList.map((ele) => (
                          <div className="col-lg-12">
                            <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5">
                              <div className="product-img go-top">
                                <Link to={`/institute-detail/${ele._id}`}>
                                  <img
                                    src={
                                      publicUrl + "assets/img/product-3/1.jpg"
                                    }
                                    alt="#"
                                  />
                                </Link>
                              </div>
                              <div className="product-info">
                                <div className="product-badge-price">
                                  <div className="product-badge">
                                    <ul>
                                      <li className="sale-badg">
                                        {ele.category}
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <h2 className="product-title go-top">
                                  <Link to={`/institute-detail/${ele._id}`}>
                                    {ele.name}
                                  </Link>
                                </h2>
                                <div className="product-img-location go-top">
                                  <ul>
                                    <li>
                                      <Link>
                                        <i className="flaticon-pin" />
                                        {ele.city}
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                                <ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
                                  {ele.des}
                                </ul>
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
      </div>
    </div>
  );
};

export default ShopGridV1;
