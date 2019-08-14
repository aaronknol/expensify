console.log('utils.js is running');

export {
    square,
    add,
    subtract as default
};

const square = (x) => x * x;

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;