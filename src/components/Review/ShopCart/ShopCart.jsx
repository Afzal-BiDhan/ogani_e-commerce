import React, { useContext, useState } from 'react';
import { SeveCart } from '../../../App';
import { processOrder } from '../../../utilities/databaseManager';
import { formatNumber } from '../../ExportData';
import './ShopCart.css';

const ShopCart = (props) => {
    const cart = props.cart
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price * product.quantityCount;
    }
    let shipping = 0;
    if (total > 60) {
        shipping = 1.50;
    }
    else if (total > 40) {
        shipping = 3.99;
    }
    else if (total > 0) {
        shipping = 5.99;
    }
    const tax = (total / 10).toFixed(2);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);

    //clear cart and function.
    const [seveCart, setSeveCart] = useContext(SeveCart);
    const handlePlacedOrder = () => {
        setSeveCart([]);
        processOrder();
        alert("Your Order Conform");
    };


    return (
        <div className="cart">
            <h4>Order Summary</h4>
            <h5>Items Order : <span>{cart.length}</span></h5>
            <h5>Product Price : <span>{formatNumber(total)}</span></h5>
            <h5>Shipping Cost : <span>{shipping}</span></h5>
            <h5>Tax + VAT : <span>{tax}</span></h5>
            <h5 className="cart_total">Total Price <b>=</b> <span>{grandTotal}</span></h5>
            <button className="add_cart" onClick={() => handlePlacedOrder()}>Place Order</button>
        </div>
    );
};

export default ShopCart;