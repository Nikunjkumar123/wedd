import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import "./MalikFooter.css";
import FooterLogo from "../../Assets/malikLogobgr.png";
import { Link } from "react-router-dom";

const quickLinks = [
  { text: "Home", path: "/" },
  { text: "Profile", path: "/ProfilePage" },

  { text: "Membership", path: "/Member" },
];
const quickLinks1 = [

  { text: "Contact Us", path: "/contactUs" },
  { text: "Term & Condition", path: "/termCondition" },
  { text: "Privacy & Policy", path: "/privacyPolicy" },
];
const socialIcons = [
  { icon: "bi-facebook", href: "#!" },
  { icon: "bi-instagram", href: "#!" },
  { icon: "bi-youtube", href: "#!" },
];

const MalikFooter = () => {
  return (
    <section className="malik__footer light">
      <Container>
        <Row className="text-center text-sm-start">
          {/* Logo and Social Links */}
          <Col lg={3} className="mt-4">
            <img src={FooterLogo} height="80" alt="Logo" />
            <p className="mt-3">Where Love Finds a Home</p>
            <Nav className="malik__footer-social d-inline-flex mt-2">
              {socialIcons.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="ms-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`bi ${social.icon}`}></i>
                </a>
              ))}
            </Nav>
          </Col>

          {/* Quick Links */}
          <Col lg={3} className="mt-4">
            <h6 className="text-uppercase small">Quick Links</h6>
            <ul className="list-unstyled">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link to={link.path} className="text-decoration-none">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>
          {/* Quick Links */}
          <Col lg={3}  className="mt-4">
            <h6 className="text-uppercase small">Quick Links</h6>
            <ul className="list-unstyled">
              {quickLinks1.map((link, i) => (
                <li key={i}>
                  <Link to={link.path} className="text-decoration-none">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>
          {/* Language and Currency */}
          <Col lg={3} className="malik__footer light">
            <h6 className="text-uppercase small">Phone</h6>
            <Link to="tel:9599467465" target="_blank">
             9599467465
            </Link>{" "}
            {/* Replace phoneNumber with your dynamic value */}
            <h6 className="text-uppercase small mt-2">Email</h6>
            <Link to="mailto:muslimmalikrishte@gmail.com" target="_blank">
            muslimmalikrishte@gmail.com
            </Link>{" "}
            {/* Replace email with your dynamic value */}
            <h6 className="text-uppercase small mt-2">Address</h6>
            <Link to="#" target="_blank">
              Ajmeri Gate, Delhi - 110006
            </Link>{" "}
          </Col>
        </Row>

        {/* Footer Bottom */}
        <div className="malik__footer-copyright">
          <p>Copyright &copy; Muslim Malik Rishte, All rights reserved</p>
        </div>
      </Container>
    </section>
  );
};

export default MalikFooter;
