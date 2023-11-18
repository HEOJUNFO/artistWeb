import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFreeStore } from '../stores/store.jsx'; // Changed to useFreeStore
import './AuditionsAnnouncements.css';

export function FreePage({ isHomePage }) {
    // Using useFreeStore instead of useAuditionsStore
    const { free: auditions } = useFreeStore();
    const navigate = useNavigate();

    const goToSubmitForm = () => {
        navigate('/submit-audition');
    };

    // This will now display items from the free store
    const displayedAuditions = isHomePage ? auditions.slice(0, 3) : auditions;

    const containerClass = `auditions-announcements-container ${isHomePage ? 'small-font' : ''}`;

    return (
        <div className={containerClass}>
            <h1 className="audition-link-header">
                <Link to="/free" className="audition-link">자유게시판</Link>
            </h1>
            <ul className="auditions-list">
                {displayedAuditions.map(audition => (
                    <Link to={`/auditions/${audition.id}`} className="audition-link" key={audition.id}>
                        <li className="audition-item">
                            <div className="audition-header">
                                <h2 className="audition-title">{audition.title}</h2>
                                <p className="audition-deadline">{audition.date}</p>
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