const person = {
    name: 'Igor',
    age: 21,
    city: 'SPB' 
};

getObjectValues(person);

function getObjectValues(obj) {
    for (var key in obj) {
        console.log(key + ' = ' + obj[key]);
    }
}