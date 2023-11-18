import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuditionsStore } from '../stores/store.jsx';
import './SubmitAuditionForm.css'; 

export default function SubmitAuditionForm() {
  const [audition, setAudition] = useState({
    title: '',
    date: '',
    location: '',
    description: ''
  });

  const { addAudition } = useAuditionsStore(); 
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAudition({ ...audition, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addAudition({
      id: Date.now(), 
      title: audition.title,
      date: audition.date,
      location: audition.location,
      description: audition.description
    });
  
    navigate('/auditions');
  };
  return (
    <div className="submit-audition-container">
      <h2>새 오디션 공고 올리기</h2>
      <form onSubmit={handleSubmit} className="submit-audition-form">
        <input
          name="title"
          value={audition.title}
          onChange={handleInputChange}
          placeholder="Title"
          required
        />
        <input
          type="date"
          name="date"
          value={audition.date}
          onChange={handleInputChange}
          required
        />
        <input
          name="location"
          value={audition.location}
          onChange={handleInputChange}
          placeholder="Location"
          required
        />
        <textarea
          name="description"
          value={audition.description}
          onChange={handleInputChange}
          placeholder="Description"
          required
        />
         <button type="submit" className="submit-btn">제출하기</button>
      </form>
    </div>
  );
}
