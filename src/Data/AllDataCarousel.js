import homeCarousel from './DataCarousel';

const fakeDataCarousel = [...homeCarousel];

const shuffle = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

shuffle(fakeDataCarousel);

export default fakeDataCarousel;