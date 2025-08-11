import React, { useState } from "react";
import axios from "axios";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import InnerBanner from "../components/inner-banner";
import Footer from "../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const isFormEmpty = () => {
    return Object.values(formData).every(value => value.trim() === '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isFormEmpty()) {
      alert("Please fill in the form before submitting.");
      return;
    }

    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      await axios.post("http://localhost:5000/submit-form", formData);
      alert("Form submitted successfully!");
      setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center section-padding">
      <div className="container bg-white p-5 rounded shadow" style={{ maxWidth: "900px" }}>
        <div className="row">
          <div className="col-12 mb-4">
            <h2 className="mb-3 fw-bold">Contact Us</h2>
            <p className="text-muted">
              Feel free to use the form or drop us an email. Old-fashioned phone calls work too.
            </p>
            <ul className="list-unstyled mt-4">
              <li className="d-flex align-items-center mb-3 text-secondary">
                <FaPhoneAlt className="text-warning me-2" />
                <span>484.324.2400</span>
              </li>
              <li className="d-flex align-items-center mb-3 text-secondary">
                <FaEnvelope className="text-warning me-2" />
                <span>info@mediaproper.com</span>
              </li>
              <li className="d-flex align-items-center mb-3 text-secondary">
                <FaMapMarkerAlt className="text-warning me-2" />
                <span>15 West 3rd St., Media, Pa. 19063</span>
              </li>
            </ul>
          </div>

          <div className="col-12">
            <form onSubmit={handleSubmit}>
              <div className="row mb-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="example@email.com"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="tel"
                  className="form-control"
                  placeholder="xxx-xxx-xxxx"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Type your message ..."
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-warning text-white w-100"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
