import React from 'react';
import './HomeSlider.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import img from '../../../images/slider/groceries.jpg';
import img2 from '../../../images/slider/grocery-1.jpg';
import img3 from '../../../images/slider/grocery-3.jpg';
import resImg1 from '../../../images/slider/res_/groceries-img2.webp';
import resImg2 from '../../../images/slider/res_/groceries-img1.jpg';
import resImg3 from '../../../images/slider/res_/groceries-img3.jpg';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { Link } from 'react-router-dom';

const HomeSlider = () => {

    const SliderInfo = (props) => {
        return (
            <div className={props.dcn}>
                <h5>Introducings</h5>
                <h2>{props.dh2} <br /> <b>{props.dh2b}</b></h2>
                <h6>{props.dh6}</h6>
                <Link to="/shop">Shop Now<ArrowRightAltIcon /></Link>
            </div>
        );
    };
    const Item = (props) => {
        return (
            <div class="item">
                <div className={props.cn_1}>
                    <img src={props.img_1} alt="" />
                    {props.data}
                </div>
                <div className={props.cn_2}>
                    <img src={props.img_2} alt="" />
                    {props.data}
                </div>
            </div>
        );
    };

    return (
        <div className="container">
            <div className="row">
                <OwlCarousel
                    className="owl-theme"
                    loop={true} margin={0}
                    nav={true} items={1}
                    autoplay={true}
                    smartSpeed={1200}
                >
                    <Item
                        cn_1="slider_img_1"
                        cn_2="slider_img_2"
                        img_1={img2}
                        img_2={resImg2}
                        data={<SliderInfo
                            dcn="slider_info"
                            dh2="fresh food for"
                            dh2b="fresh mood"
                            dh6="100% organic / 20% off select products"
                        />} />

                    <Item cn_1="a_slider_img_1" cn_2="a_slider_img_2" img_1={img3} img_2={resImg1} data={<SliderInfo dcn="slider_info_2" dh2="farm fresh" dh2b="organic vegetables" dh6="50% off select products" />} />

                    <Item cn_1="b_slider_img_1" cn_2="b_slider_img_2" img_1={img} img_2={resImg3} data={<SliderInfo dcn="slider_info_3" dh2="a warm touch" dh2b="on your favorite" dh6="60% off select products" />} />

                </OwlCarousel>
            </div>
        </div>
    );
};

export default HomeSlider;