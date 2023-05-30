import { message } from "antd";
import React, { useState } from "react";
import userService from "../../common/userService";
import "../assets/css/review.css";
// import parse from 'html-react-parser';

export const HelpCenterForm = () =>
{
  const [formValues, setFormValues] = useState({
    contact: "",
    subject: "",
    message: "",
  });

  const handleInputChange = async (event) =>
  {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const requestHelp = async (e) =>
  {
    e.preventDefault();
    const id = localStorage.getItem("id");
    const token = localStorage.getItem("token");
    if (id == null || token == null)
    {
      message.error("Please SignUp To Request Help");
    } else
    {
      const allFieldsFilled = Object.values(formValues).every(
        (val) => val !== ""
      );
      if (!allFieldsFilled)
      {
        message.error("Please fill in all the fields.");
        return;
      }
      const requestHelp = await userService.requestHelp(id, formValues)
      if (requestHelp.data.success == true)
      {
        setFormValues({
          contact: "",
          subject: "",
          message: "",
        })
        message.success("Request Raised Successfully")
      } else
      {
        message.error('an error occured')
      }
    }
  };

  return (
    <div
      style={{ marginBottom: "10rem" }}
      className="ltn__contact-message-area mb-30"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="hlp_center_wrapper">
              <p>
                We understand that, as a student, you may face various challenges and issues during your academic journey. And we provide you with this platform to voice your concerns and get them addressed properly.
              </p>
              <p>
                BMBC offers an easy and accessible way for students to raise grievances or complaints about their academic experience. The relevant authorities will receive and address your complaints, ensuring timely action is taken to resolve your issues.
              </p>
              <p>
                Our team is well-equipped to address a wide range of problems that you may encounter during your academic journey. These include academic issues, such as grading, evaluations, exams,
                and assessments. We can also help you with problems related to facilities, such as infrastructure, equipment, or services offered by the institute.
              </p>
              <p>
                In case of any complaints regarding any kind of harassment, discrimination, or bias the student faces, we have a team specifically trained to handle such cases. In addition
                to these issues, you can approach us with any other grievances or concerns that you may have related to your academic experience.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="ltn__form-box contact-form-box box-shadow white-bg">
              <h4 className="title-2">Get Help</h4>
              <form id="contact-form">
                <div className="row">
                  <div className="col-md-6">
                    <div className="input-item input-item-name">
                      <input
                        onChange={handleInputChange}
                        type="text"
                        name="subject"
                        placeholder="Enter your subject"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item input-item-email">
                      <input
                        onChange={handleInputChange}
                        type="text"
                        name="contact"
                        placeholder="Enter email/phone"
                      />
                    </div>
                  </div>
                  {/* <div className="col-md-6">
							<div className="input-item" >
								<select className="nice-select" name="service">
								<option>Select Request Type</option>
								<option>Batch </option>
								<option>Institute </option>
								<option>User Account</option>
								<option>Refund or Bookings</option>
								<option>Other</option>
								</select>
							</div>
							</div> */}
                  {/* <div className="col-md-6">
							<div className="input-item input-item-phone ltn__custom-icon">
								<input type="text" name="phone" placeholder="Enter phone number" />
							</div>
							</div> */}
                </div>
                <div className="input-item input-item-textarea ltn__custom-icon">
                  <textarea
                    onChange={handleInputChange}
                    name="message"
                    placeholder="Enter message"
                    defaultValue={""}
                  />
                </div>
                {/* <p><label className="input-info-save mb-0"><input type="checkbox" name="agree" /> Save my name, email, and website in this browser for the next time I comment.</label></p> */}
                <div className="btn-wrapper mt-0">
                  <button
                    className="btn theme-btn-1 mt-4 btn-effect-1 text-uppercase"
                    onClick={(e) => requestHelp(e)}
                  >
                    Request Help
                  </button>
                </div>
                <p className="form-messege mb-0 mt-20" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenterForm;
