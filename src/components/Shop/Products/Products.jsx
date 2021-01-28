import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';


const Products = (props) => {


    const { handleAddProduct } = props;
    const { img, name, price, rating, stock, quantity_tag, key, toggleCart } = props.product;
    console.log(props.product.toggleCart);
    return (
        <div className="col-md-3">
            <div className="items">
                <Link to={"/product/" + key}><img src={img} alt="" /></Link>
                <h4><Link to={"/product/" + key}>{name}</Link></h4>
                <h5>$<span>{price}</span></h5>
                <div className="product_rating">
                    {Array(rating).fill().map((_, i) => [
                        <p>⭐</p>
                    ])}
                    <h6>Stock in: {stock} <span>{quantity_tag}</span></h6>
                    <button className="add_cart" onClick={() => handleAddProduct(props.product)}><ShoppingBasketIcon className="cart_btn" />{toggleCart ? "Add more" : "Add to cart"}</button>
                </div>
            </div>
        </div>
    );
};

export default Products;