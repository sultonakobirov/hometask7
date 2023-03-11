//task-1
let word = ['Bob', 'Janeo', "Leo", 'Alexo', 'Dicko','Roma', 'Antony']
let nameDelete = prompt("Input name")
let finalView = nameDelete.replace(nameDelete[0], nameDelete[0].toLocaleUpperCase())// to prevent from error while typing lowercase letters
if(word.includes(finalView) === true){
    let outPut = word.splice(word.indexOf(finalView), 1) // deleting given element 
   alert(outPut) // output deleted element 
   alert(word) // output array 
}else{
    alert("Not found!")
}

//task2 
let namesObject = {
    nameOne: "Thomas",
    nameTwo: "Marko",
    nameThree: "Polo",
    nameFour: "Andres",
    nameFive: "Pablo"
}
let namesArray = ['Bob', 'Janeo', "Leo", 'Alexo', 'Dicko','Roma', 'Antony']
let nemes
let objectToArray = Object.values(namesObject) // getting values of the object and returning array containing only values of the object 
namesArray = namesArray.concat(objectToArray) // concatonation of two arrays
console.log(namesArray);
