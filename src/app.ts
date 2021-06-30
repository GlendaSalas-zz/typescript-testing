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