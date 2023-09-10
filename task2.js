const person = {
    name: 'Igor',
    age: 21,
    city: 'SPB' 
};

console.log(isThere(person, 'town'));

function isThere(obj, prop) {
    if (obj.hasOwnProperty(prop)) {
        return true;
    } 
    else {
        return false;
    }
}