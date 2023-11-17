import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AuditionsAnnouncements.css'; 

export function AuditionsAnnouncements({ isHomePage }) {
  const [auditions, setAuditions] = useState([]);

  const dummyAuditions = [
    { id: 1, title: '봄 뮤지컬을 위한 공개 오디션', date: '2023-12-01', location: '서울 예술의전당', description: '뮤지컬 극장 퍼포머들에게 자신의 재능을 보여줄 수 있는 좋은 기회입니다.' },
    { id: 2, title: '인디 영화 캐스팅 콜', date: '2023-12-05', location: '부산 영화 마을', description: '새로운 독립 영화 프로젝트를 위한 배우를 찾습니다.' },
    { id: 3, title: '댄스 컴퍼니 시즌 오디션', date: '2023-12-10', location: '국립무용극장', description: '다가오는 시즌을 위해 우리 회사에 합류할 경험 많은 댄서를 찾고 있습니다.' },
  ];

  useEffect(() => {
    setAuditions(dummyAuditions);
  }, []);

  const displayedAuditions = isHomePage ? auditions.slice(0, 1) : auditions;

  return (
    <div className="auditions-announcements-container">
    <Link to="/auditions" className="audition-link">
        <h1>오디션 및 공고</h1>
      </Link>
      <ul className="auditions-list">
        {displayedAuditions.map(audition => (
          <li key={audition.id} className="audition-item">
            <h2>{audition.title}</h2>
            <p>마감일: {audition.date}</p>
            <p>위치: {audition.location}</p>
            <Link to={`/auditions/${audition.id}`} className="btn-details">View Details</Link>
          </li>
        ))}
      </ul>
      {isHomePage && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Link to="/auditions" className="btn-details">View More</Link>
        </div>
      )}
    </div>
  );
}