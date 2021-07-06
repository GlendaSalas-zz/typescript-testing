// Generic types
function merge<T, U>(ob1:T, ob2:U){
    return Object.assign(ob1, ob2);
}

const mergedObject = merge({ name: 'Glenda'}, { age: 2})
console.log(mergedObject)

// type constrains

function merge2<T extends object, U extends object>(ob1:T, ob2:U){
    return Object.assign(ob1, ob2);
}

const mergedObject2 = merge({ name: 'Glenda'}, { age: 30 })
console.log(mergedObject);

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy> (element: T): [T, string]{
    let descriptionText = 'Got no value';
    if (element.length > 0) descriptionText = 'Got ' + element.length + ' values';
    return [element, descriptionText];
}

console.log(countAndDescribe('Hi there'));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U){
    return obj[key];
}

console.log(extractAndConvert({ name: 'my'}, 'name'));

