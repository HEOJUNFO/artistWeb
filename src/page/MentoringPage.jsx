import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMentoringServicesStore } from '../stores/store.jsx'; // Updated import
import './AuditionsAnnouncements.css'; 

export function MentoringPage({ isHomePage }) {
    // Replace useAuditionsStore with useMentoringServicesStore
    const { mentoringServices } = useMentoringServicesStore();
    const navigate = useNavigate();

    const goToSubmitForm = () => {
        navigate('/submit-mentoring-service'); // Updated navigate path
    };

    // Use mentoringServices instead of auditions
    const displayedMentoringServices = isHomePage ? mentoringServices.slice(0, 3) : mentoringServices;

    const containerClass = `auditions-announcements-container ${isHomePage ? 'small-font' : ''}`;

    return (
        <div className={containerClass}>
            <h1 className="audition-link-header">
                <Link to="/mentoring-services" className="audition-link">멘토링 서비스</Link>
            </h1>
            <ul className="auditions-list">
                {displayedMentoringServices.map(service => (
                    <li key={service.id} className="audition-item">
                        <Link to={`/mentoring-services/${service.id}`} className="audition-link">
                            <div className="audition-header">
                                <h2 className="audition-title">{service.title}</h2>
                                <p className="audition-deadline">마감일: {service.date}</p>
                            </div>
                        </Link>
                        {!isHomePage && (
                            <p>위치: {service.location}</p>
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