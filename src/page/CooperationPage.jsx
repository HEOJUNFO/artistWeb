import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCooperationsStore } from '../stores/store.jsx'; 
import './AuditionsAnnouncements.css'; 

export function CooperationPage({ isHomePage }) {
    const { cooperations } = useCooperationsStore(); 

    const goToSubmitForm = () => {
        navigate('/submit-cooperation'); 
    };

    const displayedCooperations = isHomePage ? cooperations.slice(0, 3) : cooperations;

    const containerClass = `auditions-announcements-container ${isHomePage ? 'small-font' : ''}`;

    return (
        <div className={containerClass}>
            <h1 className="audition-link-header">
                <Link to="/cooperation" className="audition-link">협업</Link> 
            </h1>
            <ul className="auditions-list">
                {displayedCooperations.map(cooperation => (
                    <Link to={`/auditions/${cooperation.id}`} key={cooperation.id} className="audition-link"> 
                        <li  className="audition-item">
                            <div className="audition-header">
                                <h2 className="audition-title">{cooperation.title}</h2>
                                <p className="audition-deadline"> {cooperation.date}</p>
                            </div>
                            {!isHomePage && (
                                <p>위치: {cooperation.location}</p>
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