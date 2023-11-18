import React, {useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuditionsStore } from '../stores/store.jsx';
import './AuditionsAnnouncements.css'; 

export function FreePage({ isHomePage }) {
    const { auditions} = useAuditionsStore();
  const navigate = useNavigate();

  const goToSubmitForm = () => {
    navigate('/submit-audition');
  };


  const displayedAuditions = isHomePage ? auditions.slice(0, 3) : auditions;

  const containerClass = `auditions-announcements-container ${isHomePage ? 'small-font' : ''}`;

  return (
    <div className={containerClass}>
        <h1 className="audition-link-header">
            <Link to="/auditions" className="audition-link">자유게시판</Link>
        </h1>
        <ul className="auditions-list">
            {displayedAuditions.map(audition => (
                <li key={audition.id} className="audition-item">
                    <Link to={`/auditions/${audition.id}`} className="audition-link">
                        <div className="audition-header">
                            <h2 className="audition-title">{audition.title}</h2>
                            <p className="audition-deadline"> {audition.date}</p>
                        </div>
                    </Link>
                    {!isHomePage && (
                        <p>위치: {audition.location}</p>
                    )}
                </li>
            ))}
        </ul>
        {!isHomePage && (
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <button onClick={goToSubmitForm} className="btn-write">새글 작성</button>
            </div>
        )}
    </div>
);
}