import React, { useContext } from 'react';
import { Cart } from '../../../App';
import { UseEffectCall } from '../../ExportData';
import Navbar from '../../Shared/Navbar/Navbar/Navbar';
import Banner from '../Banner/Banner';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import HomeCarousel from '../HomeCarousel/HomeCarousel';
import HomeSlider from '../HomeSlider/HomeSlider';
import './Home.css';


const Home = () => {

    // show to navbar price & item cart.
    const [cart, setCart] = useContext(Cart);
    UseEffectCall(setCart);

    return (
        <>
            <Navbar cart={cart} />
            <HomeSlider />
            <FeaturedProducts />
            <Banner />
            <HomeCarousel />
        </>
    );
};

export default Home;