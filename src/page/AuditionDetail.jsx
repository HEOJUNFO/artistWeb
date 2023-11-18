import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAuditionsStore } from '../stores/store.jsx';
import './AuditionDetail.css'; 


export function AuditionDetail() {
  let { auditionId } = useParams(); 
  const { getAuditionById } = useAuditionsStore();
  const [auditionDetails, setAuditionDetails] = useState(null);



  useEffect(() => {
    
    const fetchAuditionDetails = async () => {
      const response = await new Promise(resolve => {
        setTimeout(() => {
          const auditionDetail = getAuditionById(auditionId);
          resolve(auditionDetail);
        }, 5); // Simulate network delay
      });
      setAuditionDetails(response);
    };

    fetchAuditionDetails();
  }, [auditionId, getAuditionById]);


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