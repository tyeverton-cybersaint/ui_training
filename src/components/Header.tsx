import '../styles/Header.css';
import LeftNav from './LeftNav';
import RightNav from './RightNav';

function Header() {
  return (
    <div className="header">
      <LeftNav />
      <RightNav />
    </div>
  );
}

export default Header;
