import React, {useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuditionsStore } from '../stores/store.jsx';
import './AuditionsAnnouncements.css'; 

export function AuditionsAnnouncements({ isHomePage }) {
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
            <Link to="/auditions" className="audition-link">오디션 및 공고</Link>
        </h1>
        <ul className="auditions-list">
            {displayedAuditions.map(audition => (
                 <Link to={`/auditions/${audition.id}`} key={audition.id} className="audition-link">
                <li  className="audition-item">
                   
                        <div className="audition-header">
                            <h2 className="audition-title">{audition.title}</h2>
                            <p className="audition-deadline">마감일: {audition.date}</p>
                        </div>
                 
                    {!isHomePage && (
                        <p>위치: {audition.location}</p>
                    )}
                </li>
                </Link>
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