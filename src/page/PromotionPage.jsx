import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { usePromotionsStore } from '../stores/store.jsx';
import './AuditionsAnnouncements.css'; 

export function PromotionPage({ isHomePage }) {
    const { promotions } = usePromotionsStore();
    const navigate = useNavigate();

    const goToSubmitForm = () => {
        navigate('/submit-promotion');
    };

    const displayedPromotions = isHomePage ? promotions.slice(0, 3) : promotions;

    const containerClass = `auditions-announcements-container ${isHomePage ? 'small-font' : ''}`;

    return (
        <div className={containerClass}>
            <h1 className="audition-link-header">
                <Link to="/promotion" className="audition-link">홍보</Link>
            </h1>
            <ul className="auditions-list">
                {displayedPromotions.map(promotion => (
                        <Link to={`/auditions/${promotion.id}`}  key={promotion.id} className="audition-link">
                    <li className="audition-item">
                    
                            <div className="audition-header">
                                <h2 className="audition-title">{promotion.title}</h2>
                                <p className="audition-deadline">{promotion.date}</p>
                            </div>
                       
                        {!isHomePage && (
                            <p>위치: {promotion.location}</p>
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