import React, { useState } from 'react';
import './HomeCarousel.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import fakeDataCarousel from '../../../Data/AllDataCarousel';
import { Link } from 'react-router-dom';

const HomeCarousel = () => {

    const [carouselProducts, setCarouselProducts] = useState(fakeDataCarousel);

    return (
        <div className="container carousel">
            <h2 className="title">All Products</h2>
            <div className="underline"></div>
            <div className="row">
                <OwlCarousel
                    loop={true}
                    margin={0}
                    nav={true}
                    autoplay={true}
                    dots={false}
                    items={4}
                    smartSpeed={1200}
                    autoHeight={false}
                >
                    {
                        carouselProducts.map(data => {
                            return (
                                <div class="item col-md-3">
                                    <div class="carousel_info">
                                        <Link to={data.category}>
                                            <img src={data.img} alt="" />
                                            <h2>{data.name}</h2>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </OwlCarousel>
            </div>
        </div>

    );
};

export default HomeCarousel;