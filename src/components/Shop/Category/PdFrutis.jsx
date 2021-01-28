import React, { useContext, useState } from 'react';
import { Cart, HandleAddProduct } from '../../../App';
import fruits from '../../../Data/Fruits';
import { filterProduct, UseEffectCall } from '../../ExportData';
import Navbar from '../../Shared/Navbar/Navbar/Navbar';
import PageBtn from '../Products/PageBtn';
import TopBgSection from '../TopBgSection/TopBgSection';

const PdFrutis = () => {
    // show to navbar price & item cart.
    const [cart, setCart] = useContext(Cart);
    UseEffectCall(setCart);

    // product previous and next button.
    const [showPerPage, setShowPerPage] = useState(12);
    const [pages, setPages] = useState({
        start: 0,
        end: showPerPage,
    });
    const onPageChange = (start, end) => {
        setPages({ start: start, end: end })
    };

    // prodct add to cart function.
    const addProduct = useContext(HandleAddProduct);

    return (
        <>
            <Navbar cart={cart} />
            <TopBgSection />
            <div className="container products pd">
                <h1 className="title">Fastfood</h1>
                {filterProduct(fruits, pages.start, pages.end, addProduct)}
                <PageBtn showPerPage={showPerPage} onPageChange={onPageChange} total={fruits.length} />
            </div>
        </>
    );
};

export default PdFrutis;