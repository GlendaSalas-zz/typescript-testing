"use strict";
var _a;
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
const result = add('M', 'A');
result.split(' ');
const fetchUserData = {
    id: 1,
    name: 'Glenda',
    job: {
        title: 'CEO',
        description: 'this is an important job'
    }
};
console.log((_a = fetchUserData === null || fetchUserData === void 0 ? void 0 : fetchUserData.job) === null || _a === void 0 ? void 0 : _a.title);
//# sourceMappingURL=app.js.map