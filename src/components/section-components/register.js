import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import userService from "../../common/userService";
import toast, { Toaster } from 'react-hot-toast';

export default function Register() {
  const history = useHistory();
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    // phone: "",
    // qualification: "",
    // address: "",
    // city: "",
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
	const register = await userService.register(formValues)
	console.log(register)
	if (register.data.success === true) {
    toast.success('Registered Successfully!');
    const login = await userService.login(formValues)
    if(login.data.success === true){
      localStorage.setItem('token', login.data.data.token)
      localStorage.setItem('id', login.data.data._id);
      console.log(login.data.data);
      localStorage.setItem('userName', login.data.data.name)
      history.push('/')
    }
	  } else {
      toast.error('An error occured please try again');
	  }
  };

  return (
    <div className="ltn__login-area pb-110">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area text-center">
              <h1 className="section-title">
                Register <br />
                Your Account
              </h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
                Sit aliquid, Non distinctio vel iste.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="account-login-inner">
              <form
                onSubmit={handleSubmit}
                action="#"
                className="ltn__form-box contact-form-box"
              >
                <input
                  value={formValues.name}
                  onChange={handleInputChange}
                  type="text"
                  name="name"
                  placeholder="Name*"
                />
                <input
                  value={formValues.email}
                  onChange={handleInputChange}
                  type="text"
                  name="email"
                  placeholder="Email*"
                />
                {/* <input
                  value={formValues.phone}
                  onChange={handleInputChange}
                  type="text"
                  name="phone"
                  placeholder="Phone*"
                />
                <input
                  value={formValues.qualification}
                  onChange={handleInputChange}
                  type="text"
                  name="qualification"
                  placeholder="Qualification*"
                />
                <input
                  value={formValues.address}
                  onChange={handleInputChange}
                  type="text"
                  name="address"
                  placeholder="Address*"
                />
                <input
                  value={formValues.city}
                  onChange={handleInputChange}
                  type="text"
                  name="city"
                  placeholder="City*"
                /> */}
                <input
                  value={formValues.password}
                  onChange={handleInputChange}
                  type="password"
                  name="password"
                  placeholder="Password*"
                />
                {/* <label className="checkbox-inline">
							<input type="checkbox" defaultValue />&nbsp;
							I consent to Herboil processing my personal data in order to send personalized marketing material in accordance with the consent form and the privacy policy.
						</label> */}
                <label className="checkbox-inline">
                  <input type="checkbox" defaultValue /> &nbsp; By clicking
                  "create account", I consent to the privacy policy.
                </label>
                <div className="btn-wrapper">
                  <button
                    onClick={() => handleSubmit}
                    className="theme-btn-1 btn reverse-color btn-block"
                    type="submit"
                  >
                    CREATE ACCOUNT
                  </button>
                </div>
              </form>
              <div className="by-agree text-center">
                <p>By creating an account, you agree to our:</p>
                <p>
                  <a href="http://localhost:3001/">
                    TERMS OF CONDITIONS &nbsp; &nbsp; | &nbsp; &nbsp; PRIVACY
                    POLICY
                  </a>
                </p>
                <div className="go-to-btn mt-50 go-top">
                  <Link to="/login">ALREADY HAVE AN ACCOUNT ?</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
}
