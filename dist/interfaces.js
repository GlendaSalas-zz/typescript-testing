"use strict";
class Person {
    constructor(name) {
        this.age = 30;
        if (name)
            this.name = name;
    }
    greet(phrase) {
        if (this.name)
            console.log(phrase, ' ', this.name);
        else
            console.log(phrase);
    }
}
let user1;
user1 = new Person();
console.log(user1);
user1.greet('Hello stranger! My name is');
//# sourceMappingURL=interfaces.js.map