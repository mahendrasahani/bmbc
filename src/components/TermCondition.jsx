import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import Footer from "./global-components/footer";
const Termcondition = () => {
  return (
    <>
      <Navbar />
      <PageHeader subheader="Term & Condition" />
      <div className="ltn__faq-area contact_text_head mb-100">
        <div className="container">
          <h1 className="section-title text-center mt-2 pt-2">
            Term & Condition
          </h1>
          <p className="contact_text">
            Welcome to Book My Best Classes! The terms and conditions outline
            the rules and regulations for using our platform. We assume you
            fully accept these terms and conditions by accessing Book My Best
            Classes. Only continue using the BMBC if you disagree with all the
            terms and conditions on this page.
          </p>
          <p className="contact_text">
            The following terminology applies to these terms and conditions, the
            privacy statement and disclaimer notice, and any or all agreements:
            “Clients,” You,” and “Your” refer to you, the person accessing BMBC
            and accepting the BMBC company’s terms and conditions. “The
            company,” “Ourselves,” “We,” “Our,” and “Us” refer to Book My Best
            Classes. “Party,” “Parties,” or “Us” refers to both bmbc users and
            ourselves.
          </p>
          <p className="contact_text">
            This FAQ section provides valuable insights about BMBC, its
            services, policies, and procedures. From troubleshooting common
            issues to understanding pricing structures, Book My Best classes aim
            to provide clarity and transparency at every step.
          </p>
          <ul className="whyBmbc_wrapper">
            <li>
              <h4>Use of Cookies: </h4>
              <p>
                BMBC employs the use of cookies to monitor and enhance your
                browsing experience. Most modern-day interactive websites use
                cookies to enable us to retrieve BMBC user details for each
                visit.
              </p>
            </li>
            <li>
              <h4>Intellectual property: </h4>
              <p>
                Unless otherwise stated, our licensors own the intellectual
                property rights for all material on our website for your
                personal use, subject to restrictions set in these terms and
                conditions.
              </p>
            </li>
            <li>
              <h4>Restrictions: </h4>
              <p>
                You are specifically restricted from all of the following;
                Publishing any website material in any other media, selling,
                sublicensing Commercializing any website material Using BMBC in
                any way that impacts user access to the website Using BMBC
                contrary to applicable laws and regulations Anything which
                causes harm to the BMBC website or BMBC user or business entity.
              </p>
            </li>
            <li>
              <h4>Limitation of liability</h4>
              <p>
                Bmbc does not warrant that we will be uninterrupted, nor does
                BMBC make any warranty as to the results that may be obtained
                from our website, Book My Best Classes.
              </p>
            </li>
            <p className="sub_text_whbmbc mb-5">
              Before using Book My Best Classes, carefully review these terms
              and conditions. Your continued use of our website indicates your
              acceptance of these terms and conditions.
            </p>
            <p className="sub_text_whbmbc mb-5">
              Please contact BMBC for further assistance.
            </p>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Termcondition;
