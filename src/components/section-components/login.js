import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import userService from "../../common/userService";
import toast, { Toaster } from 'react-hot-toast';

export const Login = () => {
  const history = useHistory();
  let publicUrl = process.env.PUBLIC_URL + "/";
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = async (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const allFieldsFilled = Object.values(formValues).every(
      (val) => val !== ""
    );
    if (!allFieldsFilled) {
      toast.error("Please fill in all the fields.");
      return;
    }
	const login = await userService.login(formValues)

	if (login.data.success === true) {
    localStorage.setItem('token', login.data.data.token)
    localStorage.setItem('id', login.data.data._id)
    toast.success('Logged in successfully!');
    setTimeout(() => {
      history.push('/')
    }, 1000)
	  } else {
      toast.error('An error occured please try again');
	  }
  };


  return (
    <div>
      <div className="ltn__login-area pb-65">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area text-center">
                <h1 className="section-title">
                  Sign In <br />
                  To Your Account
                </h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
                  <br />
                  Sit aliquid, Non distinctio vel iste.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="account-login-inner">
                <form onSubmit={handleSubmit} className="ltn__form-box contact-form-box">
                  <input  value={formValues.email}
                  onChange={handleInputChange} type="text" name="email" placeholder="Email*" />
                  <input
				  value={formValues.password}
                  onChange={handleInputChange}
                    type="password"
                    name="password"
                    placeholder="Password*"
                  />
                  <div className="btn-wrapper mt-0">
                    <button onClick={() => handleSubmit} className="theme-btn-1 btn btn-block" type="submit">
                      SIGN IN
                    </button>
                  </div>
                  <div className="go-to-btn mt-20">
                    <a
                      href="http://localhost:3001/"
                      title="Forgot Password?"
                      data-bs-toggle="modal"
                      data-bs-target="#ltn_forget_password_modal"
                    >
                      <small>FORGOTTEN YOUR PASSWORD?</small>
                    </a>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="account-create text-center pt-50">
                <h4>DON'T HAVE AN ACCOUNT?</h4>
                <p>
                  Add items to your wishlistget personalised recommendations{" "}
                  <br />
                  check out more quickly track your orders register
                </p>
                <div className="btn-wrapper go-top">
                  <Link to="/register" className="theme-btn-1 btn black-btn">
                    CREATE ACCOUNT
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ltn__modal-area ltn__add-to-cart-modal-area----">
        <div
          className="modal fade"
          id="ltn_forget_password_modal"
          tabIndex={-1}
        >
          <div className="modal-dialog modal-md" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="ltn__quick-view-modal-inner">
                  <div className="modal-product-item">
                    <div className="row">
                      <div className="col-12">
                        <div className="modal-product-info text-center">
                          <h4>FORGET PASSWORD?</h4>
                          <p className="added-cart">
                            {" "}
                            Enter you register email.
                          </p>
                          <form action="#" className="ltn__form-box">
                            <input
                              type="text"
                              name="email"
                              placeholder="Type your register email*"
                            />
                            <div className="btn-wrapper mt-0">
                              <button
                                className="theme-btn-1 btn btn-full-width-2"
                                type="submit"
                              >
                                Submit
                              </button>
                            </div>
                          </form>
                        </div>
                        {/* additional-info */}
                        <div className="additional-info d-none">
                          <p>
                            We want to give you <b>10% discount</b> for your
                            first order, <br /> Use discount code at checkout
                          </p>
                          <div className="payment-method">
                            <img
                              src={publicUrl + "assets/img/icons/payment.png"}
                              alt="#"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Login;
