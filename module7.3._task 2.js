
const user = {
    name: 'Artur',
    surname: 'Aminev',
    age: 31,
    position: 'developer'
};

function searchString(obj, string) {
    return (string in obj);
}

console.log(searchString(user, "same"));  // false
console.log(searchString(user, "name"));  // true