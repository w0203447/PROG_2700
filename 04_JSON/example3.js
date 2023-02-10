
//create a string representing a JSON Structure
var jsonStr = '{ "first_name" : "Aaron", "last_name" : "DeViller", "age": 34, "occupation" : "Gigalo" }';

//turn that string into a JSON object
var person = JSON.parse(jsonStr);

//objects don't have a length property, but we can use the following to iterate:
//shortened syntax:

for (let x in person) {
  console.log(x + ": "+ person[x])
}
