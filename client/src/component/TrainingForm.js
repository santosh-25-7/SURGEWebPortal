import React, { useState } from 'react';
import axios from 'axios';

function TrainingForm() {
  const [formData, setFormData] = useState({
    batchName: '',
    startDate: '',
    endDate: ''
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
      const response = await axios.post('http://localhost:5000/api/training/create-batch', formData);
      alert(response.data.message);
    } catch (error) {
      console.error('Error submitting form', error);
      alert('Error creating batch');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Batch Name:</label>
        <input type="text" name="batchName" value={formData.batchName} onChange={handleChange} required />
      </div>
      <div>
        <label>Start Date:</label>
        <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} required />
      </div>
      <div>
        <label>End Date:</label>
        <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} required />
      </div>
      <button type="submit">Create Batch</button>
    </form>
  );
}

export default TrainingForm;
