"use strict";
class Person {
    constructor(name) {
        this.age = 30;
        this.name = name;
    }
    greet(phrase) {
        console.log(phrase, ' ', this.name);
    }
}
let user1;
user1 = new Person('Glenda');
console.log(user1);
user1.greet('Hello stranger! My name is');
//# sourceMappingURL=app.js.map