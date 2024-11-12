import React, { useState } from 'react';
import axios from 'axios';

function AdmissionForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    paymentStatus: 'Pending'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Check if your backend URL is correct and accessible
      const response = await axios.post('http://localhost:8081/api/admission', formData);
      alert(response.data.message); // Display server response message
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form');
    }
  };

  return (
    <form on Submit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Phone:</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Payment Status:</label>
        <select
          name="paymentStatus"
          value={formData.paymentStatus}
          onChange={handleChange}
        >
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <button type="submit">Submit Admission</button>
    </form>
  );
}

export default AdmissionForm;
