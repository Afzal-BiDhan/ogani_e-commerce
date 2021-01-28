import React, { useContext, useEffect } from 'react';
import './Navbar.css';
import logo from '../../../../images/logo.png';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import TogolBtn from '../TogolBtn/TogolBtn';
import { Link } from 'react-router-dom';
import { formatNumber } from '../../../ExportData';
import { SeveCart } from '../../../../App';

const Navbar = ({cart}) => {
    // const [seveCart, setSeveCart] = useContext(SeveCart);
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price * product.quantityCount;
    }

    return (
        <div>
            <div className="container nav_bar">
                <div className="row">
                    <div className="col-md-2 custom_logo">
                        <Link to="/"><img src={logo} alt="" /></Link>
                    </div>
                    <div className="col-md-7 custom_togol">
                        <div className="header_menu">
                            <ul>
                                <li><Link className="active_li" to="/">home</Link></li>
                                <li><Link to="/shop">shop</Link></li>
                                <li><Link to="/review">review</Link></li>
                                <li><Link to="/login">Login</Link></li>
                                <li><a href="!#">contact</a></li>
                            </ul>
                        </div>
                        <TogolBtn></TogolBtn>
                    </div>
                    <div className="col-md-3 custom_togol2">
                        <div className="header_cart">
                            <Link to="/review">
                                <ul>
                                    <li>
                                        <LocalGroceryStoreIcon className="basket_icon" />
                                        <span>{cart.length}</span>
                                    </li>
                                </ul>
                                <div className="header_cart_price">
                                    <p>Items: <strong>${formatNumber(total)}</strong></p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;