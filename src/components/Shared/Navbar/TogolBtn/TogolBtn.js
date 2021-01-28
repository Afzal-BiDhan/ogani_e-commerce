import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import './TogolBtn.css';
import Sidebar from '../Sidebar/Sidbar';

const TogolBtn = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
    return (
        <nav className="toggle_btn">
            <div>
                <MenuIcon
                    style={{ fontSize: "30px", cursor: "pointer", float: "right" }}
                    onClick={toggle} />
            </div>
            <Sidebar isOpen={isOpen} toggle={toggle} />
        </nav>
    );
};

export default TogolBtn;