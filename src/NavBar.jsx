import { Link } from 'react-router-dom';

export function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/game">Game</Link></li>
      </ul>
    </nav>
  );
}