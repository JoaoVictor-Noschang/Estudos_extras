// Map, Filter & Reduce


// MAP
const numbers = [1, 2, 3, 4, 5];

/* Executando uma determinada função em cada item da 
lista e retornando uma nova lista */

const numberMultipliedByTwo = numbers.map(function(number) {
    return number * 2;
});
//console.log(numberMultipliedByTwo);

// FILTER
const ages = [8, 13, 27, 30, 22, 40];

/* Se a condição dentro da função filter for verdadeira o método adiciona 
o valor verdadeira na nova array com os elementos que satifazem a condição */

const evenAges = ages.filter(function(age) {
    return age % 2 === 0;
});
//console.log(evenAges);


// REDUCE
/* Passa por todos os itens, precisa do valor atual de de uma "acumulator"
para ir guardando o valor e após a função dentro do reduce, é definido 
a partir de qual valor irá começar a soma , ou seja, qual o valor inicial do acumulator */

const sumOfAges = ages.reduce(function(age, acumulator) {
    return acumulator + age;
}, 0);

console.log(sumOfAges);
