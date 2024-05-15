// While
let index = 0;

while (index < 10) {
    console.log('index é menor do que 10! ->' + index);
    index ++;
}


// Loop usado para objetoos
const person = {
    name: 'João',
    age: 44
};

// Obs. Não é muito performático
for (property in person) {
    console.log(person[property])
}