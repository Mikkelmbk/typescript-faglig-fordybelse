// // https://www.tutorialsteacher.com/typescript/type-annotation
// function addNumbers(a:number, b:number){
// 	return a + b;
// }
// let sum: number = addNumbers(10.532,15.791)
// console.log(`Sum of the two numbers is ${sum.toFixed(1)}`)


var Employee = /** @class */ (function () {
    function Employee(code, name) {
        this.empName = name;
        this.empCode = code;
    }
    Employee.prototype.getSalary = function () {
        return 10000;
    };
    return Employee;
}());
