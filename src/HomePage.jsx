import { AuditionsAnnouncements } from './page/AuditionsAnnouncements';
import { MentoringPage } from './page/MentoringPage.jsx';
import { Announcement } from './page/Announcement.jsx';
import { CooperationPage } from './page/CooperationPage.jsx';
import { BuysellgPage } from './page/BuysellPage.jsx';
import { FreePage } from './page/FreePage.jsx';
import { PromotionPage } from './page/PromotionPage.jsx';

const Banner = () => (
  <div className="banner" style={{ position: 'relative', width: '100%' }}>
    <img src="/banner2.jpg" alt="Banner" style={{ width: '100%', height: 'auto' }} />
    <div style={{
      position: 'absolute',
      top: '50%', 
      left: '10%', 
      transform: 'translateY(-50%)',
      width: '80%', 
      padding: '0 20px',
    }}>
      <p style={{ 
        margin: '0 0 10px 0', 
        color: 'white', 
        fontSize: '24px', 
        textAlign: 'left' 
      }}>
        지금 차세대 스타가 되어 보세요!
      </p>
      <p style={{ 
        margin: '0 0 10px 0', 
        color: 'white', 
        fontSize: '44px', 
        textAlign: 'left'
      }}>
        JYP ONLINE AUDITION
      </p>
      <p style={{ 
        margin: '0', 
        color: '#009be6',
        fontSize: '32px', 
        textAlign: 'left' 
      }}>
        Challenge now!
      </p>
    </div>
  </div>
);

const MiniBanner = () => (
  <div className="mini-banner" style={{ 
    background: '#fffff', 
    padding: '10px', 
    margin: '10px', 


    borderRadius: '8px', 
    width: '31.5%' 
  }}>
    <img src="/mini-banner.png" alt="Mini Banner" style={{ width: '100%', height: 'auto' }} />
  </div>
);

const MessageInbox = () => (
  <div className="message-inbox" style={{
    background: '#ecf5fd', 
    padding: '20px',
    margin: '10px',
    border: '1px solid #ddd',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    borderRadius: '8px',
    width: '30%'
  }}>
    <h2 style={{ borderBottom: '2px solid #007bff' }}>편지함</h2> 
    <ul style={{ listStyle: 'none', padding: 0 }}> 
      <li style={{ 
        padding: '10px',
        borderBottom: '1px solid #ddd', 
        cursor: 'pointer'
      }}>
     
        받은편지함
      </li>
      <li style={{
        padding: '10px',
        borderBottom: '1px solid #ddd',
        cursor: 'pointer'
      }}>
 
        보낸편지함
      </li>
      <li style={{
        padding: '10px',
        cursor: 'pointer'
      }}>
 
        활동내역
      </li>
    </ul>
  </div>
);

const HomePage = () => (
  <div className="home-page">
    <Banner />
    <div className="middle-section1" style={{ display: 'flex', justifyContent: 'space-around' }}>
    <AuditionsAnnouncements isHomePage={true} />
    <MentoringPage isHomePage={true} />
    <Announcement isHomePage={true} />
    </div>
    <div className="middle-section2" style={{ display: 'flex', justifyContent: 'space-around' }}>

      <PromotionPage isHomePage={true} />
      <CooperationPage isHomePage={true} />
   <MessageInbox />
    </div>
  <div className="middle-section3" style={{ display: 'flex', justifyContent: 'space-around' }}>
      <BuysellgPage isHomePage={true} />
      <FreePage isHomePage={true} />
    <MiniBanner />
   </div>
  </div>
);

export default HomePage;