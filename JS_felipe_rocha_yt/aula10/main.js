// Funções e Arrow Functions
function sum(a, b = 10) {
    return a + b;
}

/*
const sumArrow = (a, b = 3) => {
    return a + b;
}; */

// Mesmo que o anterior
const sumArrow = (a, b = 3) => a + b;

const sumValue = sumArrow(2);

console.log(sumValue);

