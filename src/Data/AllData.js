import fruits from './Fruits';
import fish from './Fish';
import fastfood from './Fastfood';

const fakeData = [...fruits, ...fish, ...fastfood];

const shuffle = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

shuffle(fakeData);

export default fakeData;