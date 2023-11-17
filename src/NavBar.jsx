import { Link } from 'react-router-dom';

export function NavBar() {

  const handleIncompleteLink = (e) => {
    e.preventDefault();
    alert('서비스 준비중입니다.');
  };

  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/auditions">오디션 및 공고</Link></li>
        <li><Link to="/" onClick={(e) => handleIncompleteLink(e)}>멘토링 서비스</Link></li>
        <li><Link to="/" onClick={(e) => handleIncompleteLink(e)}>공지사항</Link></li>
        <li><Link to="/" onClick={(e) => handleIncompleteLink(e)}>홍보</Link></li>
        <li><Link to="/" onClick={(e) => handleIncompleteLink(e)}>협업</Link></li>
        <li><Link to="/" onClick={(e) => handleIncompleteLink(e)}>구입판매</Link></li>
        <li><Link to="/" onClick={(e) => handleIncompleteLink(e)}>자유게시판</Link></li>
        <li className="login"><Link to="/" onClick={(e) => handleIncompleteLink(e)}>로그인</Link></li>
      </ul>
    </nav>
  );
}