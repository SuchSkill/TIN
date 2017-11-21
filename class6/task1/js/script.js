var person = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue"
};

function printObject(object){
    for (var property in object) {
        console.log( property + ': ' + object[property]+' '+ checkTypes(object[property]) +'; ');
    }
}

function checkTypes( arg ) {
    return ({}).toString.call( arg ).match(/\s(\w+)/)[1].toLowerCase();
}
printObject(person)

