import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { removeFromDatabaseCart } from '../../../utilities/databaseManager';
import ShopCart from '../../Review/ShopCart/ShopCart.jsx';
import ReviewItems from '../ReviewItems/ReviewItems';
import './Review.css';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { SeveCart } from '../../../App';
import Navbar from '../../Shared/Navbar/Navbar/Navbar';
import { UseEffectCall } from '../../ExportData.js';

const Review = () => {

    // show to navbar price & item cart.
    const [seveCart, setSeveCart] = useContext(SeveCart);
    UseEffectCall(setSeveCart);

    // remove product from cart.
    const removeProduct = (productKey) => {
        console.log("remove Product", productKey);
        const newCart = seveCart.filter(pd => pd.key !== productKey);
        setSeveCart(newCart);
        removeFromDatabaseCart(productKey);
    };

    return (
        <>
            <Navbar cart={seveCart} />
            <div className="container mt-3">
                <h2 className="text-center">Review Order</h2>
                <div className="underline"></div>
                <div className="row">
                    <div className="col-md-9">
                        {seveCart.map(pd =>
                            <ReviewItems
                                key={pd.key}
                                product={pd}
                                removeProduct={removeProduct}
                            />)}
                    </div>
                    {seveCart.length > 0 ?
                        <div className="col-md-3">
                            <ShopCart cart={seveCart} />
                        </div> :
                        <div className="cart_Empty">
                            <h2>Your cart is empty</h2>
                            <h3>Shop now and, add to cart</h3>
                            <Link to="/shop"><h5>Shop Now<ArrowRightAltIcon /></h5></Link>
                        </div>}
                </div>
            </div>
        </>
    );
};

export default Review;