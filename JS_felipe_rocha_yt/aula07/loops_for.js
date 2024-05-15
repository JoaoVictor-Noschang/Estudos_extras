// Loops
/*
for (let index = 1; index <= 20; index++) {
    console.log(index);
} */

const cars = ['Golf', 'Civic', 'Onix'];


for (let i = 0; i < cars.length; i++) {
    console.log("0.1 - " + cars[i]);
} 

for (let car of cars) {
    console.log("0.2 - " + car);
}

cars.forEach(function(car, index) {
    console.log("0.3 - " + index, car);
})
