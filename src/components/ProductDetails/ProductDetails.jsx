import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../Data/AllData';
import './ProductDetails.css';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Cart, HandleAddProduct } from '../../App';
import Navbar from '../Shared/Navbar/Navbar/Navbar';
import { UseEffectCall } from '../ExportData';

const ProductDetails = () => {
    // show to navbar price & item cart.
    const [cart, setCart] = useContext(Cart);
    UseEffectCall(setCart);

    const addProduct = useContext(HandleAddProduct);
    const { productKey } = useParams();
    const product = fakeData.find(pd => pd.key === productKey);
    const { name, category, img, rating, price, quantity, quantity_tag, stock } = product;
    return (
        <>
            <Navbar cart={cart} />
            <div className="product_details">
                <div className="container">
                    <h2 className="text-center">Product Details</h2>
                    <div className="underline"></div>
                    <div className="row">
                        <div className="col-md-6 mt-3 product_details_img">
                            <img className="img-fluid" src={img} alt="" />
                        </div>
                        <div className="col-md-6 product_details_info mt-3">
                            <h5>Name:~~ <span>{name}.</span></h5>
                            <h5>Category:~~ <span>{category}.</span></h5>
                            <h5 className="rating">Rating:~~ <b>{rating}</b> ,
                                star: {Array(rating).fill().map((_, i) => [
                                <span>⭐</span>
                            ])}</h5>
                            <h5 className="price">Price:~~ <span>${price}</span></h5>
                            <h5>Quantity:~~ <span>{quantity} {quantity_tag}.</span></h5>
                            <h5>In stock:~~ <span>{stock} {quantity_tag}.</span></h5>
                            <h5 className="description">Description:~~ <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero explicabo dicta blanditiis esse cum. Eaque ut ea recusandae odit fugit modi dicta necessitatibus. Sit laudantium minima iure dicta suscipit laborum!Laudantium officia, eveniet vero dignissimos quisquam corrupti modi cumque assumenda quis quas.</span></h5>
                            <button className="add_cart" onClick={() => addProduct(product)}><ShoppingBasketIcon className="cart_btn" />Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetails;