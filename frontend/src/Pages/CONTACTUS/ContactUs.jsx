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
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const res = await response.json();

      if (res.success) {
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
        <title>Contact Us - Mushlim Mushlim Mushlim Mushlim Muslim Malik Rishte</title>
        <meta
          name="description"
          content="Get in touch with us for any inquiries or assistance. Let Mushlim Mushlim Mushlim Mushlim Mushlim Muslim Malik Rishte help you find the right partner."
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
                  Kirti Nagar , New Delhi-110077
                </a>
              </div>
              <div className="col-md-3 info-box">
                <i className="bi bi-envelope icon"></i>
                <p>
                  <a href="mailto:info@gmail.com">malikwedding@gmail.com</a>
                  <a href="mailto:info@gmail.com">malikwedding@gmail.com</a>
                </p>
              </div>
              <div className="col-md-3 info-box">
                <i className="bi bi-telephone icon"></i>
                <p>
                  <a href="tel:+9193506****">+91 9350**** </a>
                  <a href="tel:+91981******">+91 9810**** </a>
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
                      type="Number"
                      className="form-control"
                      placeholder="Phone"
                      {...register("phone", {
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
                      {errors.phone && <p>{errors.phone.message}</p>}
                    </span>
                  </div>
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Area, City"
                      {...register("location", {
                        required: "Location is required",
                      })}
                    />
                    <span className="text-danger">
                      {errors.location && <p>{errors.location.message}</p>}
                    </span>
                  </div>
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                    {...register("subject", {
                      required: "Subject is required",
                    })}
                  />
                  <span className="text-danger">
                    {errors.subject && <p>{errors.subject.message}</p>}
                  </span>
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    placeholder="Comment"
                    {...register("comment", {
                      required: "Comment is required",
                    })}
                    rows="5"
                  ></textarea>
                  <span className="text-danger">
                    {errors.comment && <p>{errors.comment.message}</p>}
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
