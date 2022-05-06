import '../styles/Header.css';
import { Button } from 'antd';

function RightNav() {
  return (
    <div className="rightNav">
      <Button type="primary" className="item4">
        Fourth Button
      </Button>
      <Button type="primary" className="item5">
        Fifth Button
      </Button>
      <Button type="primary" className="item6">
        Sixth Button
      </Button>
    </div>
  );
}

export default RightNav;
