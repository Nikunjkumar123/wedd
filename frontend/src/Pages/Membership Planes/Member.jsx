import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import "./Member.css";
import { Link } from "react-router-dom";
import WeddingPlane from "../../Components/Planes/WeddingPlane";
import AOS from "aos";
import "aos/dist/aos.css";
import WebsiteSubscribe from "../../Components/Subscribe/WebsiteSubscribe";

const Member = () => {
  useEffect(() => {
    // Reinitialize AOS after the component is mounted
    AOS.init();
    // Refresh AOS animations after navigation
    AOS.refresh();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const reasons = [
    {
      icon: "bi bi-check-circle",
      title: "Verified Profiles",
      description:
        "Access a database of 100% verified and trustworthy profiles to make your search safe and effective.",
    },
    {
      icon: "bi bi-lightning-charge",
      title: "Priority Support",
      description:
        "Enjoy faster response times and dedicated support for a seamless experience.",
    },
    {
      icon: "bi bi-heart",
      title: "Matchmaking Made Easy",
      description:
        "Discover profiles that match your preferences and connect with potential partners effortlessly.",
    },
    {
      icon: "bi bi-shield-lock",
      title: "Secure and Private",
      description:
        "We prioritize your privacy with top-notch security and safety features.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Membership Plans | Mushlim Muslim Malik Rishte</title>
        <meta
          name="description"
          content="Explore our membership plans and start your matchmaking journey today!"
        />
      </Helmet>

      <section>
        <div className="page-header">
          <h2>Start Your Journey Today With the Perfect Plan</h2>
          <div className="page-render">
            <Link to="/">Home &nbsp; </Link>
            <p>&gt; Membership Planes</p>
          </div>
        </div>
      </section>

      <section>
        <div data-aos="fade-up" data-aos-duration="2000">
          <WeddingPlane />
        </div>
      </section>

      <section className="why-purchase py-5">
        <div className="container">
          <h2 className="text-center mb-4">Why Purchase Our Plans?</h2>
          <p className="text-center mb-5">
            Unlock premium features and experience seamless matchmaking with our
            expertly curated membership plans.
          </p>
          <div className="row">
            {reasons.map((reason, index) => (
              <div key={index} className="col-md-6 mb-4">
                <div className="reason-card d-flex align-items-center">
                  <div className="icon-container me-3">
                    <i className={reason.icon}></i>
                  </div>
                  <div>
                    <h5 className="reason-title">{reason.title}</h5>
                    <p className="reason-description">{reason.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section>
        <Feedback />
      </section> */}

      <section>
        <WebsiteSubscribe />
      </section>
    </>
  );
};

export default Member;
