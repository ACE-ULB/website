
export function randomNumberInRange(min, max) {
    return Math.floor(Math.random()*(max-min+1))+min;
};
export function getRandomElement(array) {
    return array[randomNumberInRange(0, array.length-1)]
};

export function getRandomColor(){
    // the six palette colors from colors.scss
    const colors = ['#84C825', '#FF5656', '#FFCC37', '#1875C3', '#6F4B92', '#52C4BB'];
    return getRandomElement(colors);
}