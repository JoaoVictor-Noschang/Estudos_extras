const names = ["João", "Felipe", "Julia", 10, false];

const joao = names[1];

names.push('Pedro');        // adiciona na ultima posição
names.unshift('willian');     // adiciona na primeira posição

names.pop();                  // remove da última posição
names.pop();
names.pop();

names[3] = "Marcos";

const indexOfFelipe = names.indexOf('Felipe'); // Retorna o indice de determinado valor

console.log(names);
console.log(names.length);

const namesIsArray = Array.isArray(names);  //Verifica se algo é uma array ou não
console.log(namesIsArray);

const sortedNames = names.sort();       // Organiza alfabeticamente a lista
console.log(sortedNames);

//names = "teste";       // Isso não é possíveç por ser uma const