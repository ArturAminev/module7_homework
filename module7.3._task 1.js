const person = {

 city: "Moscow"

}
 
 const student = Object.create(person);
student.ownCity = "Piter";
student.ownName = "Artur";
student.ownSurname = "Aminev";

function printObj(obj) {
  for (let [key, value] of Object.entries(obj)) {
    if(student.hasOwnProperty(key)){
      console.log(`${key}: ${value}`);
    }
  }
}
printObj(student) 
