type Admin = {
    name: string;
    privileges: string[];
}

type Employee = {
    name: string;
    starDate: Date;
}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Max',
    privileges: ['created-server'],
    starDate: new Date(),
}

type Combinable = string | number; // instersection types
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: number, b: number): number;
function add(a: string, b: string): string; // overload functions

function add(a: Combinable, b: Combinable){
    if(typeof a === 'string' || typeof b === 'string'){ // a type guards
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add('M', 'A');
result.split(' '); // overload functions

const fetchUserData = {
    id: 1,
    name: 'Glenda',
    job: {
        title: 'CEO',
        description: 'this is an important job'
    }
}
console.log(fetchUserData?.job?.title); // check if exists

// type UnknownEmployee = Admin | Employee;

// function printEmployoyeeInformation(emp: UnknownEmployee){
//     console.log('Name', emp.name)
//     if ('privileges' in emp) console.log('Priviliges', emp.privileges)
//     if ('starDate' in emp) console.log('Star Date', emp.starDate)
// }

// printEmployoyeeInformation(e1)

// // 

// class Car {
//     drive(){
//         console.log('DRIVING...')
//     }
// }

// class Truck{
//     drive(){
//         console.log('Driving a truck')
//     }
//     loadCargo(amount: number){
//         console.log('Loading cargo... ti ', amount)
//     }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle){
//     vehicle.drive();
//     if(vehicle instanceof Truck) vehicle.loadCargo(100); // avoid malespelling in type guards
// }

// useVehicle(v1);
// useVehicle(v2);


// // discriminated unions

// interface Bird {
//     type: 'bird';
//     flyingSpeed: number;
// }

// interface Horse {
//     type: 'horse';
//     runningSped: number;
// }
// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal){
//     let speed;
//     switch(animal.type) {
//         case 'bird': 
//         speed = animal.flyingSpeed;
//         break;
//         case 'horse':
//             speed = animal.runningSped;
//         break;
//     }
//     console.log('Moving with speed', speed)
// }

// moveAnimal({
//     type: 'bird',
//     flyingSpeed: 200,
// })

// // type casting

// // const userInput = <HTMLInputElement>document.getElementById("u")!; //TOTAL RIGHT! this excclamation never null
// const userInput = document.getElementById('u'); // total right!
// console.log(userInput)
// if (userInput) {
//     (<HTMLInputElement>userInput).value = "Hi there";
// }

// interface ErrorContainer {
//     [prop: string]: string; // i don't know the name of the property, but the only i know is that is a string, this is a index
// }

// const errorBag: ErrorContainer = {
//     email: 'Not valid email!',
//     username: 'Must start with a capital letter',
// }

