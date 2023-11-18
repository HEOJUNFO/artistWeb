import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useBuySellStore } from '../stores/store.jsx'; // Changed to useBuySellStore
import './AuditionsAnnouncements.css'; // Keeping the same CSS file

export function BuysellgPage({ isHomePage }) {
    // Changed to use the useBuySellStore hook
    const { buySell } = useBuySellStore();
    const navigate = useNavigate();

    const goToSubmitForm = () => {
        navigate('/submit-buysell'); // Assume this is the correct path for submitting buy/sell items
    };

    // Changed to display buySell data instead of auditions
    const displayedItems = isHomePage ? buySell.slice(0, 3) : buySell;

    const containerClass = `auditions-announcements-container ${isHomePage ? 'small-font' : ''}`;

    return (
        <div className={containerClass}>
            <h1 className="audition-link-header">
                <Link to="/buysell" className="audition-link">구입판매</Link>
            </h1>
            <ul className="auditions-list">
                {displayedItems.map(item => (
                    <Link to={`/auditions/${item.id}`} key={item.id} className="audition-link">
                        <li className="audition-item">
                            <div className="audition-header">
                                <h2 className="audition-title">{item.title}</h2>
                                <p className="audition-deadline">{item.date}</p>
                            </div>
                            {!isHomePage && (
                                <p>위치: {item.location}</p>
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