import React, { Component } from "react";
// import { Link } from 'react-router-dom';
// import parse from 'html-react-parser';
import "../assets/css/blog.css"
class ContactInfo extends Component
{
  render()
  {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div className="ltn__contact-address-area mb-90 contact_bread">
        <div className="container">
          <h1 className="section-title text-center mt-2 pt-2">Contact US</h1>
          <p className="contact_text">
            Book My Best Classes values your feedback and inquiries. The BMC
            team is here to assist you in every possible way. Have a question, a
            suggestion, or need support? BMBC is just a message away. Contact
            the team using the form below, and we'll reply soon.
          </p>
          <p className="contact_text">
            Book My Best Classes believes in building solid relationships with
            our users. Customer satisfaction is our priority, and we strive to
            provide exceptional service. If there’s anything BMBC can do to
            enhance your experience or address any concerns you may have.
          </p>
          <p className="contact_text">
            Your opinions matter to us; we’re eager to hear from you. Feel free
            to contact BMBC about anything- from general inquiries to specific
            requests. We’re here to listen, assist, and meet your needs. Thank
            you for choosing to book my best classes. We look forward to hearing
            from you soon!
          </p>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="contact_card">
                <div
                  className="contact_img_icon"
                >
                  <div className="ltn__contact-address-icon">
                    <img src={publicUrl + "assets/img/icons/10.png"} alt={publicUrl} />
                  </div>
                  <div className="ms-3">
                    <h4>Email Address</h4>
                    <p>info@bookmybestclass.com</p>
                  </div>

                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="contact_card">
                <div
                  className="contact_img_icon"
                >
                  <div className="ltn__contact-address-icon ">
                    <img
                      src={publicUrl + "assets/img/icons/12.png"}
                      alt={publicUrl}
                    />
                  </div>
                  <div className="ms-3">
                    <h4>Office Address</h4>
                    <p>
                      BMBC, Forum, DLF Cyber City Rd
                    </p>
                    <p>
                      DLF Phase 3, Gurugram, Haryana 122002
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactInfo;
