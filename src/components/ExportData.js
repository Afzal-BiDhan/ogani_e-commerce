import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../Data/AllData';
import { getDatabaseCart } from '../utilities/databaseManager';
import Products from './Shop/Products/Products';
export const formatNumber = num => {
    const precision = num.toFixed(2);
    return Number(precision);
};

export const filterProduct = (productsData, pagesStart, pagesEnd, handleAddProduct) => {
    return (
        <>
            <div className="underline"></div>
            <div className="filter_btns">
                <Link to="/category=allProducts"><button>All</button></Link>
                <Link to="/category=frutis"><button>Frutis</button></Link>
                <Link to="/category=meat"><button>Meat</button></Link>
                <Link to="/category=fish"><button>Fish</button></Link>
                <Link to="/category=vagetables"><button>Vagetables</button></Link>
                <Link to="/category=fastfood"><button>fastfood</button></Link>
            </div>
            <div className="row">
                {
                    productsData.slice(pagesStart, pagesEnd).map(pd =>
                        <Products
                            handleAddProduct={handleAddProduct}
                            product={pd}
                        />
                    )
                }
            </div>
        </>
    );
};

export const UseEffectCall = (setCart) => {
    useEffect(() => {
        const ssavedCart = getDatabaseCart();
        const productKeys = Object.keys(ssavedCart);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantityCount = ssavedCart[key];
            return product;
        });
        setCart(cartProducts);
    }, []);
}


