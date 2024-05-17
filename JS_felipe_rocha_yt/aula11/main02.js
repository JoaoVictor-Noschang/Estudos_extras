// Heranças
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} made some noise!`);
    }
}

class Lacoste extends Animal {
    constructor(name, ) {
        super(name);
    }

    speak() {
        console.log(`Lacoste ${this.name} grunted`);
    }
}

const animal = new Animal('Boris');
const lacrock = new Lacoste('CrockCrock');

animal.speak();
lacrock.speak();