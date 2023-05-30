import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/home';
import "./components/assets/css/responsive.css"
import About from './components/about';
import Team from './components/team';
import TeamDetails from './components/team-details';
import Faq from './components/faq';
import ComingSoon from './components/coming-soon';
import Error from './components/404';
import Location from './components/location';

import AllInstitutes from './components/allInstitutes';
import InstituteDetail from './components/institute-detail';
import Contact from './components/contact';
import Cart from './components/cart';
import Checkout from './components/checkout';
import MyAccount from './components/my-account';
import Login from './components/login';
import Register from './components/register';
import AddListing from './components/add-listing';
import Wishlist from './components/wishlist';
import OrderTracking from './components/order-tracking';
import History from './components/history';
import HelpCenter from './components/help-center';

import AdminSignin from './components/admin/signin';
import Dashboard from './components/admin/dashboard';

import UserManagement from './components/admin/users/user';
import CreateUser from './components/admin/users/createUser';

import InstituteManagement from './components/admin/institute/institute';
import CreateInstitute from './components/admin/institute/createInstitute';
import EditInstitute from './components/admin/institute/editInstitute';

import CategoryManagement from './components/admin/category/category';
import CreateCategory from './components/admin/category/createCategory';
import EditCategory from './components/admin/category/editCategory';

import PlanManagement from './components/admin/plan/plan';
import CreatePlan from './components/admin/plan/createPlan';
import EditPlan from './components/admin/plan/editPlan';

import BatchManagement from './components/admin/batch/batch';
import CreateBatch from './components/admin/batch/createBatch';
import EditBatch from './components/admin/batch/editBatch';
import ExamManagement from './components/admin/exam/exam';
import CreateExam from './components/admin/exam/createExam';
import EditExam from './components/admin/exam/editExam';

import LocationManagement from './components/admin/location/location';
import CreateLocation from './components/admin/location/createLocation';
import EditLocation from './components/admin/location/editLocation';

import BranchManagement from './components/admin/branch/branch';
import CreateBranch from './components/admin/branch/createBranch';
import EditBranch from './components/admin/branch/editBranch';

import OfferManagement from './components/admin/offer/offer';
import CreateOffer from './components/admin/offer/createOffer';
import EditOffer from './components/admin/offer/editOffer';

import HelpCenterList from './components/admin/helpCenter/helpCenter';
import InstituteRating from './components/admin/institueRating/institueRating';
import PrivacyPolicy from './components/PrivacyPolicy';
import Termcondition from './components/TermCondition';
import './index.css'
import BatchDetail from './components/BatchDetail';
import BlogPage from './components/BlogPage';
import BlogContent from './components/blog-components/BlogContent';
import Blog from './components/admin/BlogComponents/Blog';
import BlogPost from './components/admin/BlogComponents/BlogPost';
import EditBlog from './components/admin/BlogComponents/EditBlog';
import BlogDetail from './components/admin/BlogComponents/BlogDetail';
import BlogAllComment from './components/admin/BlogComponents/BlogAllComment';
import ChnagePassword from './components/section-components/PasswordUpdate';
class Root extends Component
{
    render()
    {
        return (
            <Router basename="/">
                <div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/team" component={Team} />
                        <Route path="/team-details" component={TeamDetails} />
                        <Route path="/faq" component={Faq} />
                        <Route path="/blog" component={BlogPage} />
                        <Route path="/blogDetail/:id" component={BlogContent} />
                        <Route path="/coming-soon" component={ComingSoon} />
                        <Route path="/404" component={Error} />
                        <Route path="/location" component={Location} />
                        <Route path="/allInstitutes" component={AllInstitutes} />
                        <Route path="/institute-detail/:id" component={InstituteDetail} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/helpCenter" component={HelpCenter} />
                        <Route path="/cart" component={Cart} />
                        <Route path="/checkout" component={Checkout} />
                        <Route path="/my-account/profile" component={MyAccount} />
                        <Route path="/my-account/password" component={ChnagePassword} />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route path="/add-listing" component={AddListing} />
                        <Route path="/term-condition" component={Termcondition} />
                        <Route path="/privacy-policy" component={PrivacyPolicy} />
                        <Route path="/wishlist" component={Wishlist} />
                        <Route path="/order-tracking" component={OrderTracking} />
                        <Route path="/history" component={History} />
                        <Route path="/batch-detail/:id" component={BatchDetail} />
                        <Route path="/admin/signin" component={AdminSignin} />
                        <Route path="/admin/dashboard" component={Dashboard} />

                        <Route path="/admin/user" component={UserManagement} />
                        <Route path="/admin/createUser" component={CreateUser} />

                        <Route path="/admin/institute" component={InstituteManagement} />
                        <Route path="/admin/createInstitute" component={CreateInstitute} />
                        <Route path="/admin/editInstitute/:id" component={EditInstitute} />

                        <Route path="/admin/category" component={CategoryManagement} />
                        <Route path="/admin/createCategory" component={CreateCategory} />
                        <Route path="/admin/editCategory/:id" component={EditCategory} />

                        <Route path="/admin/blog" component={Blog} />
                        <Route path="/admin/addBlog" component={BlogPost} />
                        <Route path="/admin/editblog/:id" component={EditBlog} />
                        <Route path="/admin/blogdetail/:id" component={BlogDetail} />
                        <Route path="/admin/blogcomment/:id" component={BlogAllComment} />
                        {/* USER BLOG ROUTE */}


                        <Route path="/admin/plan" component={PlanManagement} />
                        <Route path="/admin/createPlan" component={CreatePlan} />
                        <Route path="/admin/editPlan/:id" component={EditPlan} />

                        <Route path="/admin/batch" component={BatchManagement} />
                        <Route path="/admin/createBatch" component={CreateBatch} />
                        <Route path="/admin/editBatch/:id" component={EditBatch} />

                        <Route path="/admin/exam" component={ExamManagement} />
                        <Route path="/admin/createExam" component={CreateExam} />
                        <Route path="/admin/editExam/:id" component={EditExam} />

                        <Route path="/admin/location" component={LocationManagement} />
                        <Route path="/admin/createLocation" component={CreateLocation} />
                        <Route path="/admin/editLocation/:id" component={EditLocation} />

                        <Route path="/admin/branch" component={BranchManagement} />
                        <Route path="/admin/createBranch" component={CreateBranch} />
                        <Route path="/admin/editBranch/:id" component={EditBranch} />

                        <Route path="/admin/offer" component={OfferManagement} />
                        <Route path="/admin/createOffer" component={CreateOffer} />
                        <Route path="/admin/editOffer/:id" component={EditOffer} />

                        <Route path="/admin/helpCenter" component={HelpCenterList} />

                        <Route path="/admin/instituteRating" component={InstituteRating} />

                    </Switch>
                </div>
            </Router>
        )
    }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('quarter'));
