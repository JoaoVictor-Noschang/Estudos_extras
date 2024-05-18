const person = {
    firstName: 'João',
    lastName: 'Victor',
    age: 44,
    hobbies: ['Jogar no pc', 'Moda', 'Ouvir música'],
    dog: {
        name: 'Mazda',
        age: 2
    }
};

/*
const firstName = person.firstName;
const lastName = person.lastName;
const age = person.age;
const hobbies = person.hobbies; */

// MEsma coisa que acima
const { 
    firstName: primeiroNome, 
    lastName, 
    age, 
    hobbies, 
    dog: { name: dogName, age: dogAge } 
} = person;

const read = person.hobbies[2];
//  OU  -> const lastHobbie = person.hobbies[hobbies.length - 1];

console.log(primeiroNome);
console.log(lastName);
console.log(age);
console.log(hobbies);
console.log(read);

//Adicionando uma nova propriedade
//person.dog = 'Max';

console.log(person.dog.name);
console.log(dogName);
console.log(dogAge);