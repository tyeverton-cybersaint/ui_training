import { Button } from 'antd';
import '../styles/Header.css';

function LeftNav() {
  return (
    <div className="leftNav">
      <Button type="primary" className="item1">
        Primary Button
      </Button>
      <Button type="primary" className="item2">
        Secondary Button
      </Button>
      <Button type="primary" className="item3">
        Third Button
      </Button>
    </div>
  );
}

export default LeftNav;
