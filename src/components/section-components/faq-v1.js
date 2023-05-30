import React, { Component } from "react";
import { Link } from "react-router-dom";
// import parse from 'html-react-parser';

class FaqV1 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div className="ltn__faq-area contact_text_head mb-100">
        <div className="container">
          <h1 className="section-title text-center mt-2 pt-2">FAQ's</h1>
          <p className="contact_text">
            Welcome to Book My Best Classes' FAQ section, which addresses your
            most common queries and concerns. While exploring a new session,
            service, or concept, seeking clarification and detailed information
            is natural. That’s why we’ve compiled this comprehensive resource to
            assist you in finding quick and accurate answers.
          </p>
          <p className="contact_text">
            Team BMBC has carefully curated a wide range of questions and
            provided detailed responses to ensure that you have access to the
            information you need. Whether you’re a potential customer, an
            existing user, or simply curious about our offerings, we’ve got you
            covered.
          </p>
          <p className="contact_text">
            This FAQ section provides valuable insights about BMBC, its
            services, policies, and procedures. From troubleshooting common
            issues to understanding pricing structures, Book My Best classes aim
            to provide clarity and transparency at every step.
          </p>
          <div className="row">
            <div className="col-lg-12">
              <div className="ltn__faq-inner ltn__faq-inner-2">
                <div id="accordion_2">
                  <div className="card">
                    <h6
                      className="collapsed ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-1"
                      aria-expanded="false"
                    >
                      Is a demo class available at the institutes listed by
                      BMBC?
                    </h6>
                    <div
                      id="faq-item-2-1"
                      className="collapse"
                      data-bs-parent="#accordion_2"
                    >
                      <div className="card-body">
                        <p>
                          Yes, demo classes are available at most of the
                          institutes. There are no charges for demo class
                          students.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* card */}
                  <div className="card">
                    <h6
                      className="ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-2"
                      aria-expanded="true"
                    >
                      Do we get extra classes?
                    </h6>
                    <div
                      id="faq-item-2-2"
                      className="collapse show"
                      data-bs-parent="#accordion_2"
                    >
                      <div className="card-body">
                        <p>
                          Yes, extra classes are available for students after a
                          discussion with the subject teacher.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* card */}
                  <div className="card">
                    <h6
                      className="collapsed ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-3"
                      aria-expanded="false"
                    >
                      Are supplementary books provided after purchasing the
                      course through the BMBC portal?
                    </h6>
                    <div
                      id="faq-item-2-3"
                      className="collapse"
                      data-bs-parent="#accordion_2"
                    >
                      <div className="card-body">
                        <p>
                          es, supplementary books are provided by the institutes
                          listed in BMBC; the number of books depends on your
                          chosen course. You are provided with eBooks and
                          previous year's question papers. Students can also
                          make use of the library access that is provided after
                          purchasing the course.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* card */}
                  <div className="card">
                    <h6
                      className="collapsed ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-4"
                      aria-expanded="false"
                    >
                      Do coaching centers listed on BMBC offer online classes,
                      and are they recorded for future reference?
                    </h6>
                    <div
                      id="faq-item-2-4"
                      className="collapse"
                      data-bs-parent="#accordion_2"
                    >
                      <div className="card-body">
                        <p>
                          Many coaching centers listed on BMBC offer online
                          classes for students who cannot attend physical
                          classes. These online classes are often recorded and
                          made available to students for future reference. This
                          allows students to revise concepts at their own pace
                          and convenience. However, it's recommended to check
                          with the individual coaching center to see if they
                          offer online classes and recording features for their
                          courses.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* card */}
                  <div className="card">
                    <h6
                      className="collapsed ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-5"
                      aria-expanded="false"
                    >
                      What kinds of competitive exams are covered by the
                      coaching centers listed on BMBC?
                    </h6>
                    <div
                      id="faq-item-2-5"
                      className="collapse"
                      data-bs-parent="#accordion_2"
                    >
                      <div className="card-body">
                        <p>
                          The coaching centers listed on BMBC cover various
                          competitive exams, including UPSC, GATE, CAT, IIT JEE,
                          NEET, PSU Jobs, SSC, banking, railways, and many more.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* card */}
                  <div className="card">
                    <h6
                      className="collapsed ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-6"
                      aria-expanded="false"
                    >
                      Can I search for coaching centers based on my location?
                    </h6>
                    <div
                      id="faq-item-2-6"
                      className="collapse"
                      data-bs-parent="#accordion_2"
                    >
                      <div className="card-body">
                        <p>
                          Yes, you can search for coaching centers based on your
                          location. Simply enter your location in the search bar
                          on the website, and the website will provide you with
                          a list of coaching centers in your area.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* card */}
                  <div className="card">
                    <h6
                      className="collapsed ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-7"
                      aria-expanded="false"
                    >
                      How can I contact the coaching centers listed on BMBC?
                    </h6>
                    <div
                      id="faq-item-2-7"
                      className="collapse"
                      data-bs-parent="#accordion_2"
                    >
                      <div className="card-body">
                        <p>
                          The website provides the contact details of each
                          coaching center, including phone numbers, email
                          addresses, and the institute's address. You can
                          contact them directly to get more information about
                          their courses.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <h6
                      className="collapsed ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-8"
                      aria-expanded="false"
                    >
                      Can I leave a review for a coaching center on the BMBC
                      website?
                    </h6>
                    <div
                      id="faq-item-2-8"
                      className="collapse"
                      data-bs-parent="#accordion_2"
                    >
                      <div className="card-body">
                        <p>
                          You can leave a review for any coaching center listed
                          on the BMBC website. Your review will help other
                          students decide whether to choose a coaching center.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <h6
                      className="collapsed ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-9"
                      aria-expanded="false"
                    >
                      Is there any fee for using the BMBC website?
                    </h6>
                    <div
                      id="faq-item-2-9"
                      className="collapse"
                      data-bs-parent="#accordion_2"
                    >
                      <div className="card-body">
                        <p>
                          No, there is no fee for using the BMBC website. The
                          website is free to use for all students who are
                          looking for coaching centers for competitive exams.
                        </p>
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
  }
}

export default FaqV1;
