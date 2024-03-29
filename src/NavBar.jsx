import { Link } from 'react-router-dom';
import { useState } from 'react';


export function NavBar() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleIncompleteLink = (e) => {
    e.preventDefault();
    alert('서비스 준비중입니다.');
  };


  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/auditions">오디션 및 공고</Link></li>
        <li><Link to="/mentoring">멘토링 서비스</Link></li>
        <li className="community"
            onMouseEnter={() => setIsDropdownVisible(true)}
            onMouseLeave={() => setIsDropdownVisible(false)}>
          <a >커뮤니티</a>
          {isDropdownVisible && (
            <ul className="dropdown">
              <li><Link to="/cooperation" >협업</Link></li>
              <li><Link to="/free" >자유게시판</Link></li>
              <li><Link to="/buysell" >구입판매</Link></li>
            </ul>
          )}
        </li>
        <li><Link to="/promotion" >홍보</Link></li>
        <li><Link to="/announcement" >공지사항</Link></li>
        <li className="login"><Link to="/" onClick={(e) => handleIncompleteLink(e)}>로그인</Link></li>
      </ul>
    </nav>
  );
}