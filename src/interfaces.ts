
interface AddFn {
    (a: number, b: number): number;
}
interface Named {
    readonly name?: string; // set only once
    outputName?: string; // optional property
}
interface Greetable extends Named { // interface to describe the definition of a object, no implementation
    greet(phrase: string): void;
}
class Person implements Greetable { // this class follow the interface above
    name?: string;
    age = 30;

    constructor(name?: string){
        if (name) this.name = name;
    }
    greet(phrase: string){
        if (this.name) console.log(phrase, ' ', this.name);
        else console.log(phrase)
    }
}
let user1: Greetable;

user1 = new Person();
console.log(user1)

user1.greet('Hello stranger! My name is')