import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import parse from 'html-react-parser';

class FeaturesV1 extends Component {

    render() {

     let publicUrl = process.env.PUBLIC_URL+'/'

    let customClass = this.props.customClass ? this.props.customClass :''

    return <div className={ customClass } >
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-12">
			        <div className="section-title-area ltn__section-title-2--- text-center">
			          {/* <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Our Services</h6> */}
			          <h1 className="section-title">We stand out here !</h1>
			        </div>
			      </div>
			    </div>
			    <div className="row ltn__custom-gutter--- justify-content-center go-top">
			      <div className="col-lg-4 col-sm-6 col-12">
			        <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
			          {/* <div className="ltn__feature-icon">
			            <img src={publicUrl+"assets/img/icons/icon-img/21.png"} alt="#" />
			          </div> */}
			          <div className="ltn__feature-info">
			            <h3><Link to="/service-details">User-friendly interface</Link></h3>
			            <p>The platform's user-friendly interface makes it seamless for students to find the coaching institute that aligns with their needs. The website is well organized and provides a crisp picture of the coaching institute.</p>
			            {/* <Link className="ltn__service-btn" to="/service-details">Find A Home <i className="flaticon-right-arrow" /></Link> */}
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4 col-sm-6 col-12">
			        <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1 active">
			          {/* <div className="ltn__feature-icon">
			            <img src={publicUrl+"assets/img/icons/icon-img/22.png"} alt="#" />
			          </div> */}
			          <div className="ltn__feature-info">
			            <h3><Link to="/service-details">Comprehensive data</Link></h3>
			            <p>The portal has a vast database of coaching classes for different competitive exams, making it a one-stop solution for all students. The database features information about the institute's fee location courses offered and the reviews from past students.</p>
			            {/* <Link className="ltn__service-btn" to="/service-details">Find A Home <i className="flaticon-right-arrow" /></Link> */}
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4 col-sm-6 col-12">
			        <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
			          {/* <div className="ltn__feature-icon">
			            <img src={publicUrl+"assets/img/icons/icon-img/23.png"} alt="#" />
			          </div> */}
			          <div className="ltn__feature-info">
			            <h3><Link to="/service-details">Customized search</Link></h3>
			            <p>This portal allows the students to personalize their search according to the requirements like budget location and course, ensuring that they find the right coaching institute per their needs. The platform also offers filters for the institute's success rate and popularity ratings. So, if you are a student looking for the right coaching institute, then you need to look no further, as you can visit this website and get the right institute per your needs</p>
			            {/* <Link className="ltn__service-btn" to="/service-details">Find A Home <i className="flaticon-right-arrow" /></Link> */}
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
        }
}

export default FeaturesV1