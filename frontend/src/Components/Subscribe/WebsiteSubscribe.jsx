import React from "react";
import "./Websitesubscribe.css";

function WebsiteSubscribe() {
  return (
    <>
      <div className="container">
        <div className="Heading">
          <h2>Stay Connected with Love</h2>
        </div>

        <div className="Subscribe-data">
          <div className="Subscribe-text">
            <p>
              Become a part of our vibrant community and uncover heartwarming
              success stories, expert relationship guidance, and seamless
              wedding planning tips. Subscribe to our newsletter and take the
              next step toward your perfect match!
            </p>
          </div>
          <div className="Subscribe-list">
            <ul className="Subscribe-ul">
              <li>Exclusive Match Recommendations</li>
              <li>Relationship Advice & Tips</li>
              <li>Success Stories to Inspire You</li>
            </ul>
          </div>
          <div className="Subscribe-input">
            <h3>Join Our Community Today!</h3>
          </div>
          <div class="wrap-input-9">
            <input class="input" type="email" placeholder="Enter Your Email" />
            <span class="focus-border">
              <i></i>
            </span>
          </div>
          <button className="btn-77">Subscribe</button>
        </div>
      </div>
    </>
  );
}

export default WebsiteSubscribe;
