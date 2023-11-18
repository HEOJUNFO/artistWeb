import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAnnouncementsStore } from '../stores/store.jsx'; // Updated import here
import './AuditionsAnnouncements.css'; // Keeping the original CSS file

export function Announcement({ isHomePage }) {
    // Updated to useAnnouncementsStore
    const { announcements } = useAnnouncementsStore();
    const navigate = useNavigate();

    const goToSubmitForm = () => {
        navigate('/submit-announcement');
    };

    // Renamed from auditions to announcements but kept the original CSS classes
    const displayedAnnouncements = isHomePage ? announcements.slice(0, 3) : announcements;

    // Keep the original container class
    const containerClass = `auditions-announcements-container ${isHomePage ? 'small-font' : ''}`;

    return (
        <div className={containerClass}>
            <h1 className="audition-link-header">
              
                <Link to="/announcement" className="audition-link">공지사항</Link>
            </h1>
            <ul className="auditions-list">
                {displayedAnnouncements.map(announcement => (
                       <Link to={`/auditions/${announcement.id}`}  key={announcement.id} className="audition-link">
                    <li className="audition-item">
                     
                     
                            <div className="audition-header">
                                <h2 className="audition-title">{announcement.title}</h2>
                                <p className="audition-deadline">{announcement.date}</p>
                            </div>
                     
                        {!isHomePage && (
                          
                            <p>위치: {announcement.location}</p>
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