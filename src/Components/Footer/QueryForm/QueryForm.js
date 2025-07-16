import React, { useState } from "react";
import "./QueryForm.css";
import emailjs from "@emailjs/browser";

const QueryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    mobile: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_lzytpsg";
    const templateID = "template_xde1wfh";
    const publicKey = "574Dvb0Em4Nxqt8kR";

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then(() => {
        setStatus("Success! Your message has been sent.");
        setFormData({
          name: "",
          location: "",
          mobile: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setStatus("Failed to send message. Please try again later.");
      });
  };

  return (
    <div className="query-form-container">
      <h2>Send Us Your Query</h2>
      <form onSubmit={handleSubmit} className="query-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile No.:</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button className="submit" type="submit">
          Send Query
        </button>
      </form>
      {status && <p className="status-message">{status}</p>}
    </div>
  );
};

export default QueryForm;
