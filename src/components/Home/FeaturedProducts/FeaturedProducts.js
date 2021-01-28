import React, { useState } from 'react';
import './FeaturedProducts.css';
import fakeData from '../../../Data/AllData';

const FeaturedProducts = () => {

    const frist8 = fakeData.slice(0, 8);
    const [products, setProducts] = useState(frist8);

    return (
        <section>
            <div className="container products">
                <h1 className="title">Featured Product</h1>
                <div className="underline"></div>
                <div className="row">
                    {
                        products.map(data => {
                            return (
                                <div className="col-md-3">
                                    <div className="items">
                                        <div className="img_hover">
                                            <img className="img-fluid" src={data.img} alt="" />
                                        </div>
                                        <h4>{data.name}</h4>
                                        <h5>$<span>{data.price}</span></h5>
                                        <div className="product_rating">
                                            {Array(data.rating).fill().map((_, i) => [
                                                <p>⭐</p>
                                            ])}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;