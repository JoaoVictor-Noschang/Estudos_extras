// Conceito de Truthy & Falsy
// O que é verdadeiro e o que é falso

const x = '';
// FLASE

console.log(!!x);

if (x) {
    console.log(x);
}

const y = 0;
console.log(!!y);

const a = null;
console.log(!!a);

const b = undefined;
console.log(!!b);


const list = [];
console.log(!!list);

const object = {};
console.log(!!object);

if (list) {
    console.log(list)
}

console.log(!false);