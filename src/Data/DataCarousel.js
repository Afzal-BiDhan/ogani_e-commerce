import fruits from '../images/carousel/fruits.jpg';
import meet from '../images/carousel/meet.jpg';
import vegetables from '../images/carousel/vegetables.jpg';
import fastfood from '../images/carousel/fastfood.jpg';
import spices from '../images/carousel/spices.jpg';
import confectionary from '../images/carousel/Confectionary-food.jpg';
import fish from '../images/carousel/fish.jpg';

const homeCarousel = [
    {
        name: "Frutis",
        img: fruits,
        category: "/category=frutis"
    },
    {
        name: "Fresh Meat",
        img: meet,
        category: "/category=meat"
    },
    {
        name: "Vegetables",
        img: vegetables,
        category: "/category=vegetables",
    },
    {
        name: "Fast Foods",
        img: fastfood,
        category: "/category=fastfood",
    },
    {
        name: "Spices",
        img: spices,
        category: "/category=spices",
    },
    {
        name: "confectionary",
        category: "/category=confectionary",
        img: confectionary,
    },
    {
        name: "Fish",
        img: fish,
        category: "/category=fish",
    },
];

export default homeCarousel;
