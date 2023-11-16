import { Link } from 'react-router-dom';

export function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">오디션 및 공고</Link></li>
        <li><Link to="/">멘토링 서비스</Link></li>
        <li><Link to="/">공지사항</Link></li>
        <li><Link to="/">홍보</Link></li>
        <li><Link to="/">협업</Link></li>
        <li><Link to="/">구입판매</Link></li>
        <li><Link to="/">자유게시판</Link></li>
        <li className="login"><Link to="/">로그인</Link></li>
      </ul>
    </nav>
  );
}