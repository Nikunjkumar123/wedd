import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./ContactUs.css";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    data.access_key = "007fd149-ccb4-4fcb-a57a-0b627d71f057";

    try {
      const response = await fetch("http://localhost:3000/api/v1/contact/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const res = await response.json();

      if (res.msg == 'Enquiry added') {
        Swal.fire({
          title: "Thank You!",
          text: "Inquiry sent successfully!",
          icon: "success",
        });
        reset(); // Clear form inputs after submission
      } else {
        Swal.fire({
          title: "Oops!",
          text: "Something went wrong. Please try again.",
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Network error. Please try again later.",
        icon: "error",
      });
    }
  };

  return (
    <>
      {/* Helmet for SEO */}
      <Helmet>
        <title>Contact Us - Mushlim Muslim Malik Rishte</title>
        <meta
          name="description"
          content="Get in touch with us for any inquiries or assistance. Let Mushlim Muslim Malik Rishte help you find the right partner."
        />
      </Helmet>

      <section>
        <div className="page-header">
          <h2>Let us Help You Find the Right Partner</h2>
          <div className="page-render">
            <Link to="/">Home &nbsp; </Link>
            <p>&gt; Contact Us</p>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="contact-form-section">
            {/* Contact Info Section */}
            <div className="row contact-info-page justify-content-center">
              <div className="col-md-3 info-box">
                <i className="bi bi-geo-alt icon"></i>
                <a href=" " target="_blank" rel="noopener noreferrer">
                  Ajmeri Gate, Delhi - 110006
                </a>
              </div>
              <div className="col-md-3 info-box">
                <i className="bi bi-envelope icon"></i>
                <p>
                  <a href="mailto:muslimmalikrishte@gmail.com">muslimmalikrishte@gmail.com</a>
                </p>
              </div>
              <div className="col-md-3 info-box">
                <i className="bi bi-telephone icon"></i>
                <p>
                  <a href="tel:+919599467465">+91 9599467465 </a>
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="row form-container">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      {...register("name", {
                        required: "Name is required",
                        minLength: {
                          value: 2,
                          message: "Name must be at least 2 characters",
                        },
                      })}
                    />
                    <span className="text-danger">
                      {errors.name && <p>{errors.name.message}</p>}
                    </span>
                  </div>
                  <div className="col-md-6 mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    <span className="text-danger">
                      {errors.email && <p>{errors.email.message}</p>}
                    </span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Phone"
                      {...register("contact", {
                        required: "Phone number is required",
                        minLength: {
                          value: 10,
                          message: "Phone number must be 10 digits",
                        },
                        maxLength: {
                          value: 10,
                          message: "Phone number cannot exceed 10 digits",
                        },
                      })}
                    />
                    <span className="text-danger">
                      {errors.contact && <p>{errors.contact.message}</p>}
                    </span>
                  </div>
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    placeholder="Comment"
                    {...register("message", {
                      required: "Comment is required",
                    })}
                    rows="5"
                  ></textarea>
                  <span className="text-danger">
                    {errors.message && <p>{errors.message.message}</p>}
                  </span>
                </div>
                <div className="button-container">
                  <button type="submit" className="viewall-btn bg-black mb-2">
                    Submit Inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
