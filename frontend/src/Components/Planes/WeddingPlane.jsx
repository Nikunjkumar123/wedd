import React from "react";
import "./weddingplane.css";
import { Link } from "react-router-dom";

const WeddingPlane = () => {
  const plans = [
    {
      title: "Basic",
      price: "Free",
      features: [
        { text: "Profile Overview", included: true },
        { text: "Verified profiles access", included: false },
        { text: "Priority support", included: false },
        { text: "Unlimited connections", included: false },
        { text: "Ad-free experience", included: false },
        { text: "Dedicated account manager", included: false },
      ],
      Payment: "Buy Now",
      link: "/plans/basic", // Dynamic link for Basic plan
    },
    {
      title: "Premium",
      price: "₹499",
      features: [
        { text: "Can see contact details", included: true },
        { text: "Verified profiles access", included: true },
        { text: "Priority support", included: true },
        { text: "6 months validation", included: true },
        { text: "Unlimited connections", included: false },
        { text: "Ad-free experience", included: false },
      ],
      Payment: "Buy Now",
      link: "/plans/premium", // Dynamic link for Premium plan
    },
    {
      title: "Elite",
      price: "₹999",
      features: [
        { text: "Can see contact details", included: true },
        { text: "Verified profiles access", included: true },
        { text: "Priority support", included: true },
        { text: "Unlimited connections", included: true },
        { text: "Ad-free experience", included: true },
        { text: "Dedicated account manager", included: true },
      ],
      Payment: "Buy Now",
      link: "/plans/elite", // Dynamic link for Elite plan
    },
  ];

  return (
    <>
      <div className="container">
        <div className="Heading">
          <h2>Membership Packages</h2>
        </div>

        <div className="pricing-container">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="pricing-card"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className="card-header">
                <h5>{plan.title}</h5>
                <h4>{plan.price}</h4>
                <h5>Features</h5>
              </div>
              <div className="card-features">
                <ul>
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>
                      {feature.included ? (
                        <span style={{ color: "green", marginRight: "8px" }}>
                          <i class="bi bi-check-all"></i>{" "}
                        </span>
                      ) : (
                        <span style={{ color: "red", marginRight: "8px" }}>
                          <i class="bi bi-x"></i>
                        </span>
                      )}
                      {feature.text}
                    </li>
                  ))}
                </ul>
                <Link to={plan.link}>
                  <button className="payment-btn">{plan.Payment}</button>
                </Link>{" "}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WeddingPlane;
