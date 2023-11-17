import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './AuditionDetail.css'; 

export function AuditionDetail() {
  let { auditionId } = useParams(); 
  const [auditionDetails, setAuditionDetails] = useState(null);

  const dummyAuditions = [
    { id: 1, title: '봄 뮤지컬을 위한 공개 오디션', date: '2023-12-01', location: '서울 예술의전당', description: '뮤지컬 극장 퍼포머들에게 자신의 재능을 보여줄 수 있는 좋은 기회입니다.' },
    { id: 2, title: '인디 영화 캐스팅 콜', date: '2023-12-05', location: '부산 영화 마을', description: '새로운 독립 영화 프로젝트를 위한 배우를 찾습니다.' },
    { id: 3, title: '댄스 컴퍼니 시즌 오디션', date: '2023-12-10', location: '국립무용극장', description: '다가오는 시즌을 위해 우리 회사에 합류할 경험 많은 댄서를 찾고 있습니다.' },
  ];

  useEffect(() => {
    const fetchAuditionDetails = async () => {
      const response = await new Promise(resolve => {
        setTimeout(() => {
          const auditionDetail = dummyAuditions.find(audition => audition.id.toString() === auditionId);
          resolve(auditionDetail);
        }, 5); // Simulate network delay
      });
      setAuditionDetails(response);
    };

    fetchAuditionDetails();
  }, [auditionId]);

  if (!auditionDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="audition-detail-container">
    <h1>{auditionDetails.title}</h1>
    <p>마감일: {auditionDetails.date}</p>
    <p>위치: {auditionDetails.location}</p>
    <p>Description: {auditionDetails.description}</p>
    <button className="apply-button">참가하기</button>
  </div>
  );
}