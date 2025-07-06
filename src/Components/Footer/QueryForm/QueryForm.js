import React, { useState } from 'react';
import './QueryForm.css'; // Import the CSS file for styling

const QueryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    mobile: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For demonstration, just show a success message
    // Integrate with your email service or backend here
    setStatus('Success! Your message has been sent.');
    setFormData({ name: '', location: '', mobile: '', email: '', message: '' }); // Clear form
  };

  return (
    <div className="query-form-container">
      <h2>Send Us Your Query</h2>
      <form onSubmit={handleSubmit} className="query-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
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
            id="location"
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
            id="mobile"
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
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button className='submit' type="submit">Send Query</button>
      </form>
      {status && <p className="status-message">{status}</p>}
    </div>
  );
};

export default QueryForm;
