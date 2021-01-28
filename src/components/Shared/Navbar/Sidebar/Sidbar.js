import React from 'react';
import styled from 'styled-components';
import './Sidbar.css';
import ClearIcon from '@material-ui/icons/Clear';
import { Link } from 'react-router-dom';

const Sidebar = styled.aside`
right: ${({ isOpen }) => (isOpen ? '0' : '-1000px')};
`;

const Sidbar = ({ isOpen, toggle }) => {
    return (
        <Sidebar className="sidebar" isOpen={isOpen} onClick={toggle}>
            <div className="icon" onClick={toggle}><ClearIcon /></div>
            <div className="sidebarMenu">
                <Link to='/'>Home</Link>
                <Link to='/shop'>Shop</Link>
                <Link to='/review'>Review</Link>
                <Link to='/login'>Login</Link>
                <a href='!#'>Contact</a>
            </div>
            <div className="sideBtnWrap">
                <Link to='/review'><div className="sidebarRoute">Order Now</div></Link>
            </div>
        </Sidebar>
    );
};

export default Sidbar;