// // https://www.tutorialsteacher.com/typescript/type-annotation
// function addNumbers(a:number, b:number){
// 	return a + b;
// }
// let sum: number = addNumbers(10.532,15.791)
// console.log(`Sum of the two numbers is ${sum.toFixed(1)}`)


// https://medium.com/background-thread/why-javascript-is-an-oop-language-even-though-it-doesnt-have-classes-92a4e202176f Classes I JS?
// https://levelup.gitconnected.com/typescript-object-oriented-concepts-in-a-nutshell-cb2fdeeffe6e
// https://levelup.gitconnected.com/the-javascript-object-paradigm-and-prototypes-explained-simply-e9cb9eaa49aa

class Employee {
    empCode: number;
    empName: string;

    constructor(code: number, name: string) {
            this.empName = name;
            this.empCode = code;
    }

    getSalary() : number {
        return 10000;
    }
}