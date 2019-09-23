// const spiderman = (person: string) => {
//     return 'Hello, ' + person;
// }
var worksWithStrings = function (type) {
    console.log("Android " + type.name + " has " + type.language + " language");
};
var nougat = {
    name: 'N',
    language: 'Java'
};
worksWithStrings(nougat); // I cannot call worksWithStrings function, with an object which properties contain numbers, the chosen interface of the worksWithStrings function will produce a syntax error because it can see that i am attempting to jam an object with number properties into the already predetermined String datatype properties
var worksWithNumbers = function (type) {
    console.log("Android " + type.randomNum1 + " has " + type.randomNum2 + " language");
};
var chocolate = {
    randomNum1: 5,
    randomNum2: 48
};
worksWithNumbers(chocolate); // Same as the other function, but in reverse
