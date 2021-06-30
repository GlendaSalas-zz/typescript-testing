"use strict";
const e1 = {
    name: 'Max',
    privileges: ['created-server'],
    starDate: new Date(),
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployoyeeInformation(emp) {
    console.log('Name', emp.name);
    if ('privileges' in emp)
        console.log('Priviliges', emp.privileges);
    if ('starDate' in emp)
        console.log('Star Date', emp.starDate);
}
printEmployoyeeInformation(e1);
class Car {
    drive() {
        console.log('DRIVING...');
    }
}
class Truck {
    drive() {
        console.log('Driving a truck');
    }
    loadCargo(amount) {
        console.log('Loading cargo... ti ', amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck)
        vehicle.loadCargo(100);
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSped;
            break;
    }
    console.log('Moving with speed', speed);
}
moveAnimal({
    type: 'bird',
    flyingSpeed: 200,
});
const userInput = document.getElementById('u');
console.log(userInput);
if (userInput) {
    userInput.value = "Hi there";
}
//# sourceMappingURL=app.js.map