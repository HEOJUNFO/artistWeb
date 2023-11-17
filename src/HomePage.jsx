import { AuditionsAnnouncements } from './page/AuditionsAnnouncements';
import { Link } from 'react-router-dom';

const Banner = () => (
  <div className="banner" style={{ width: '100%' }}> 
    <img src="/banner.png" alt="Banner" style={{ width: '100%', height: 'auto' }} />
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

const BoardSection = ({ title, feature, posts, deadlines }) => (
  <div className="board-section" style={{ 
    background: '#f9f9f9', 
    padding: '20px', 
    margin: '10px', 
    border: '1px solid #ddd', 
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)', 
    borderRadius: '8px', 
    width: '30%' 
  }}>
    <div style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      marginBottom: '20px', 
      borderBottom: '1px solid #eee' 
    }}>
      <h2 style={{ 
        fontSize: '1.5em', 
        fontWeight: 'bold', 
        color: '#333',
        margin: 0 
      }}>{title}</h2>
      {feature && <span style={{ 
        fontWeight: 'bold', 
        color: '#007bff' 
      }}>{feature}</span>}
    </div>
    <ul>
      {posts.map((post, index) => (
        <li key={index} style={{ 
          display: 'flex',
          justifyContent: 'space-between',
          padding: '10px 0', 
          borderBottom: '1px solid #eee' 
        }}>
          <span>{post}</span>
          {deadlines && deadlines[index] && (
            <span style={{ 
              marginLeft: 'auto', 
              paddingLeft: '20px', 
              borderLeft: '1px solid #ccc' 
            }}>
              마감일: {deadlines[index]}
            </span>
          )}
        </li>
      ))}
    </ul>
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
    <h2 style={{ borderBottom: '2px solid #007bff' }}>Messages</h2> 
    <ul style={{ listStyle: 'none', padding: 0 }}> 
      <li style={{ 
        padding: '10px',
        borderBottom: '1px solid #ddd', 
        cursor: 'pointer'
      }}>
     
        Inbox
      </li>
      <li style={{
        padding: '10px',
        borderBottom: '1px solid #ddd',
        cursor: 'pointer'
      }}>
 
        Outbox
      </li>
      <li style={{
        padding: '10px',
        cursor: 'pointer'
      }}>
 
        Activity
      </li>
    </ul>
  </div>
);

const HomePage = () => (
  <div className="home-page">
    <Banner />
    <div className="middle-section1" style={{ display: 'flex', justifyContent: 'space-around' }}>
    <AuditionsAnnouncements isHomePage={true} />
      <BoardSection
        title="멘토링 서비스"
        feature="1회 무료"
        posts={["준비중..."]} 
      />
      <BoardSection
        title="공지사항"
        posts={["준비중..."]} 
      />
    </div>
    <div className="middle-section2" style={{ display: 'flex', justifyContent: 'space-around' }}>

      <BoardSection
        title="홍보글"
        posts={["준비중..."]} 
      />
      <BoardSection
        title="협업 글"
        posts={["준비중..."]} 
      />
   <MessageInbox />
    </div>
  <div className="middle-section3" style={{ display: 'flex', justifyContent: 'space-around' }}>
    <BoardSection
        title="구입판매 글"
        posts={["준비중..."]} 
      />
        <BoardSection
        title="자유 게시판"
        posts={["준비중..."]} 
      />
    <MiniBanner />
   </div>
  </div>
);

export default HomePage;