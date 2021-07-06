"use strict";
function merge(ob1, ob2) {
    return Object.assign(ob1, ob2);
}
const mergedObject = merge({ name: 'Glenda' }, { age: 2 });
console.log(mergedObject);
function merge2(ob1, ob2) {
    return Object.assign(ob1, ob2);
}
const mergedObject2 = merge({ name: 'Glenda' }, 30);
console.log(mergedObject);
//# sourceMappingURL=app.js.map