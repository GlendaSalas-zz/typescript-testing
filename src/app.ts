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
console.log(mergedObject)