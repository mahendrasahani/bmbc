import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Image1 from "../media/banner/1.png"
import Image2 from "../media/banner/2.jpg"
import Image3 from "../media/banner/3.jpg"
import Image4 from "../media/banner/4.jpg"
// import parse from 'html-react-parser';

class BannerV3 extends Component {

    render() {

        // let imagealt = 'image'

    return  <div className="ltn__slider-area ltn__slider-3  section-bg-2">
			  <div className="ltn__slide-one-active banner_slider slick-slide-arrow-1 slick-slide-dots-1">
			    <div className="ltn__slide-item ltn__slide-item-2  ltn__slide-item-3-normal--- ltn__slide-item-3 bg-image" style={{width:"100%",height:"500px"}} data-bs-bg={Image1}>
			      <div className="ltn__slide-item-inner text-center">
			        <div className="container">
			          <div className="row">
			            <div className="col-lg-12 align-self-center">
			              <div className="slide-item-info" style={{marginLeft:"0px"}}>
			                <div  className="slide-item-info-inner ltn__slide-animation">
			                 
			                  {/* <h6  className="slide-sub-title white-color--- animated">Book My Best Class</h6> */}
			                  <h1  className="slide-title banner_heading_main animated banner_img_txt">Attend Trail Classes</h1>
			                  {/* <div  className="slide-brief animated">
			                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
			                  </div>
			                  <div  className="btn-wrapper animated go-top">
			                    <Link to="/allInstitutes" className="theme-btn-1 btn btn-effect-1">View All</Link>
			                  </div> */}
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			    {/* ltn__slide-item */}
			    <div className="ltn__slide-item ltn__slide-item-2   ltn__slide-item-3-normal--- ltn__slide-item-3 bg-image" style={{width:"100%",height:"500px"}} data-bs-bg={Image2}>
			      <div className="ltn__slide-item-inner  text-right text-end">
			        <div className="container">
			          <div className="row">
			            <div className="col-lg-12 align-self-center">
			              <div className="slide-item-info" style={{marginLeft:"0px"}}>
			                <div className="slide-item-info-inner ltn__slide-animation">
			                  {/* <h6  className="slide-sub-title white-color--- animated"> Book My Best Class</h6> */}
			                  <h1  className="slide-title banner_heading_main animated banner_img_txt">Compare rating and cost before joining</h1>
			                  {/* <div  className="slide-brief animated">
			                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
			                  </div>
			                  <div  className="btn-wrapper animated go-top">
			                    <Link to="/allInstitutes" className="theme-btn-1 btn btn-effect-1">View All</Link>
			                  </div> */}
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			    {/* ltn__slide-item */}
			    <div className="ltn__slide-item ltn__slide-item-2   ltn__slide-item-3-normal--- ltn__slide-item-3 bg-image" style={{width:"100%",height:"500px"}} data-bs-bg={Image3}>
			      <div className="ltn__slide-item-inner  text-left">
			        <div className="container">
			          <div className="row">
			            <div className="col-lg-12 align-self-center">
			              <div className="slide-item-info" style={{marginLeft:"0px"}}>
			                <div className="slide-item-info-inner ltn__slide-animation">
			                  {/* <h6  className="slide-sub-title white-color--- animated">Book My Best Class</h6> */}
			                  <h1  className="slide-title banner_heading_main animated banner_img_txt">Student concentrate on study <br/>rest leave to BMBC </h1>
			                  {/* <div  className="slide-brief animated">
			                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
			                  </div>
			                  <div  className="btn-wrapper animated go-top">
			                    <Link to="/allInstitutes" className="theme-btn-1 btn btn-effect-1">View All</Link>
			                  </div> */}
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			    {/*  */}
				<div className="ltn__slide-item ltn__slide-item-2   ltn__slide-item-3-normal--- ltn__slide-item-3 bg-image" style={{width:"100%",height:"500px"}} data-bs-bg={Image4}>
			      <div className="ltn__slide-item-inner  text-left">
			        <div className="container">
			          <div className="row">
			            <div className="col-lg-12 align-self-center">
			              <div className="slide-item-info" style={{marginLeft:"0px"}}>
			                <div className="slide-item-info-inner ltn__slide-animation">
			                  {/* <h6  className="slide-sub-title white-color--- animated">Book My Best Class</h6> */}
			                  <h1  className="slide-title banner_heading_main animated banner_img_txt">BMBC will make sure students will get <br/> maximum advantages</h1>
			                  {/* <div  className="slide-brief animated">
			                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
			                  </div>
			                  <div  className="btn-wrapper animated go-top">
			                    <Link to="/allInstitutes" className="theme-btn-1 btn btn-effect-1">View All</Link>
			                  </div> */}
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>

        }
}

export default BannerV3