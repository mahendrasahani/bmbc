import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import Footer from "./global-components/footer";
const PrivacyPolicy = () => {
  return (
    <div>
      <Navbar />
      <PageHeader
        subheader=" Privacy & Policy"
      />
      <div className="ltn__faq-area contact_text_head mb-100">
        <div className="container">
          <h1 className="section-title text-center mt-2 pt-2">
            Privacy & Policy
          </h1>
          <p className="contact_text">
            Welcome to Book My Best Classes. We recognize the criticality of
            privacy and place the utmost importance on safeguarding your
            personal information. This comprehensive page elucidates the
            intricate mechanisms through which we carefully acquire, employ, and
            fortify the data you conscientiously entrust to our care.
          </p>
            <p className="contact_text">
              What information do we collect, how is it used, and how do we
              respect the shared details?
            </p>
            <p className="contact_text">
              Book My Best Classes gathers specific information to enhance your
              interactions and deliver our services according to your interests,
              providing personalized experiences while continually improving the
              quality of our offerings.
            </p>
            <p className="contact_text">
              When you engage with Book My Best Classes or take advantage of our
              services, we may collect certain personally identifiable
              information, such as your name, email, and contact information,
              and non-personally identifiable information, such as browser type,
              IP address, and browsing patterns, which assist us in enhancing
              our services.
            </p>
            <p className="contact_text">
              This data is acquired through cookies, web beacons, and sometimes
              voluntary user submissions. Rest assured; we will treat your
              information carefully and by applicable privacy laws.
            </p>
            <p className="contact_text">
              The company does not sell, trade, or disclose your personal
              information to third parties.
            </p>
          <p className="contact_text">
            How seriously do we take your data security?
          </p>
          <p className="contact_text">
            With SSL encryption, your data is securely transmitted on our
            website. We proactively update our security protocols to stay ahead
            of evolving threats.
          </p>
          <p className="contact_text">
            Data transmission over the internet can guarantee absolute security.
            Your trust is so our company strives to provide the highest level of
            protection for your data.
          </p>
          <p className="contact_text">Be aware of external links!</p>
          <p className="contact_text">
            You will be redirected to third-party websites by clicking on
            external Book My Best Classes links. Please intensely review the
            privacy policies of those websites before disclosing any personal
            information. User privacy and security are important to us, and we
            want to ensure that you are aware and informed when navigating
            outside of our website.
          </p>
          <p className="contact_text">
            No warranties will be provided due to the cause of the fake
            subscription site.
          </p>
          <p className="contact_text">
            Our website does not endorse or promote fake subscription sites or
            engage in activities violating ethical standards or applicable laws.
          </p>
          <p className="contact_text">
            Users, please do vigilant, thorough research before engaging with
            any third-party websites or services and report them to the
            appropriate authorities.
          </p>
          <p className="contact_text">
            By acknowledging that you are using the website, we consider that
            you have read, understood, and agreed to this privacy and policy
            page.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
