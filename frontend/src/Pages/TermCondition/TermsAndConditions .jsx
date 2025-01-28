import React, { useEffect } from "react";
import "./TermsAndConditions.css";

const TermsAndConditions  = () => {

  useEffect(() => {


    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <div className="container">
        <div className="terms-container mt-3">
          <h1 className="terms-title">Terms and Conditions</h1>

          <section className="terms-section">
            <h2>1. Purpose and Usage</h2>
            <p>
              Our platform is dedicated to connecting individuals for
              matrimonial purposes only. By using this platform, you acknowledge
              and agree that any interaction with other users is solely for the
              purpose of finding a matrimonial match. You are solely responsible
              for verifying the information provided by other users and for your
              interactions on the platform.
            </p>
          </section>

          <section className="terms-section">
            <h2>2. Age Restriction</h2>
            <p>
              This platform is intended for individuals who are 18 years of age
              or older. By registering, you confirm that you meet the minimum
              age requirement. Users below 18 years of age are not permitted to
              use our services.
            </p>
          </section>

          <section className="terms-section">
            <h2>3. Safety Tips</h2>
            <ul>
              <li>
                Do not share personal financial information with other users.
              </li>
              <li>
                Exercise caution when meeting users in person for the first
                time. Always meet in public places and inform someone close to
                you about your meeting.
              </li>
              <li>
                Report any suspicious activity or behavior promptly to the
                platform administration.
              </li>
            </ul>
          </section>

          <section className="terms-section">
            <h2>4. Verification and Fraud Management</h2>
            <p>
              We take proactive steps to minimize fraudulent activity, including
              a basic user verification process. However, users are strongly
              encouraged to conduct their own verification checks for additional
              security.
            </p>
            <p>
              If a complaint is lodged regarding fraudulent behavior, the
              platform will conduct a thorough investigation before taking any
              action. The user’s account will only be suspended if fraud is
              confirmed after the investigation.
            </p>
          </section>

          <section className="terms-section">
            <h2>5. Data Privacy and Security</h2>
            <p>
              We are committed to protecting your privacy. We do not share any
              personal information with third parties without your consent.
              However, in cases of hacking, data breaches, cyberattacks, or
              fraud, the platform will not be held responsible for any data loss
              or leakage.
            </p>
          </section>

          <section className="terms-section">
            <h2>6. User Responsibility</h2>
            <p>
              Users are required to provide accurate and truthful information
              when creating a profile. Any misrepresentation or false
              information submitted by users is their sole responsibility. The
              platform will not be held liable for any consequences that arise
              from the provision of false or misleading information.
            </p>
          </section>

          <section className="terms-section">
            <h2>7. Intellectual Property</h2>
            <p>
              The website retains full ownership of all intellectual property,
              including website design, logo, content, and branding. While users
              maintain ownership of the content they post, by uploading content
              to the platform, users grant the website a non-exclusive,
              royalty-free license to display, distribute, and share the content
              within the scope of the platform's operation.
            </p>
          </section>

          <section className="terms-section">
            <h2>8. Limitation of Liability</h2>
            <p>
              The platform will not be held liable for any indirect, incidental,
              or consequential damages resulting from the use or inability to
              use the services provided. Additionally, we are not responsible
              for any losses or damages caused by events beyond our control,
              including but not limited to system outages, network issues, or
              force majeure events.
            </p>
          </section>

          <section className="terms-section">
            <h2>9. Complaints and Disputes</h2>
            <p>
              To ensure swift resolution of any issues, complaints should be
              reported to our support team within 15 days of the incident. We
              will review complaints on a case-by-case basis and take
              appropriate action.
            </p>
            <p>
              In the event of any disputes, both parties agree that the matter
              will be resolved under the jurisdiction of the{" "}
              <strong>Delhi Court</strong> (Tis Hazari), in accordance with
              Indian law.
            </p>
          </section>

          <section className="terms-section">
            <h2>10. Agreement</h2>
            <p>
              By using or accessing our platform, you agree to be bound by the
              terms and conditions outlined in this document. If you do not
              agree to any part of these terms, you must discontinue use of the
              platform immediately.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default TermsAndConditions ;
