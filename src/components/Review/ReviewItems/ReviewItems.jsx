import React from 'react';
import { Link } from 'react-router-dom';
import { formatNumber } from '../../ExportData';
import './ReviewItems.css';

const ReviewItems = (props) => {
    const { name, quantityCount, img, quantity_tag, price, rating, quantity, stock, key } = props.product;
    const countPrice = price * quantityCount;
    const quantityTag = quantity + " " + quantity_tag;
    const quantityCountTag = quantityCount + " " + quantity_tag;
    const stockTag = stock + " " + quantity_tag;
    return (
        <div className="review_items">
            <div className="row main_review">
                <div className="col-md-3">
                    <Link to={"/product/" + key}><img className="img-fluid" src={img} alt="" /></Link>
                </div>
                <div className="col-md-4 review_info_1">
                    <Link to={"/product/" + key}>
                        <h6>Name: <span>{name}</span></h6>
                        <h6>Price: <span>${price}</span></h6>
                        <h6>Quantity: <span>{quantityTag}</span></h6>
                        <h6>Rating: {Array(rating).fill().map((_, i) => [
                            <span>⭐</span>
                        ])}</h6>
                        <h6>In stock: <span>{stockTag}</span></h6>
                    </Link>
                </div>
                <div className="col-md-4 review_info_2">
                    <h6>Order quantity: <span>{quantityCountTag}</span></h6>
                    <h6> Order price: <span>${formatNumber(countPrice)}</span></h6>
                    <button onClick={() => props.removeProduct(key)}>Remove</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItems;