import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg1 from '../../../images/banner/banner-1.jpg';
import bannerImg2 from '../../../images/banner/banner-2.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div className="container Banner">
            <div class="row">
                <div class="col-md-6">
                    <Link to="/shop"><img src={bannerImg1} alt="" /></Link>
                </div>
                <div class="col-md-6">
                <Link to="/shop"><img src={bannerImg2} alt="" /></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;