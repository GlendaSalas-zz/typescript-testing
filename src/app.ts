interface Named {
    readonly name: string; // set only once
}
interface Greetable extends Named { // interface to describe the definition of a object, no implementation

    greet(phrase: string): void;
}
class Person implements Greetable { // this class follow the interface above
    name: string;
    age = 30;
    constructor(name: string){
        this.name = name;
    }

    greet(phrase: string){
        console.log(phrase, ' ', this.name);
    }
}
let user1: Greetable;

user1 = new Person('Glenda');
console.log(user1)

user1.greet('Hello stranger! My name is')