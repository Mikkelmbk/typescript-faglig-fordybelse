// const spiderman = (person: string) => {
//     return 'Hello, ' + person;
// }

// let user = 'Peter Parker';
// // let user = 1;
// console.log(spiderman(user));


interface SELVVALGT_NAVN1 {
    name: String;
    language: String;
}

const worksWithStrings = (type: SELVVALGT_NAVN1): void => {
    console.log(`Android ${type.name} has ${type.language} language`);
};

const nougat = {
    name: 'N',
    language: 'Java'
}

worksWithStrings(nougat); // I cannot call worksWithStrings function, with an object which properties contain numbers, the chosen interface of the worksWithStrings function will produce a syntax error because it can see that i am attempting to jam an object with number properties into the already predetermined String datatype properties



interface SELVVALGT_NAVN2 {
    randomNum1: Number;
    randomNum2: Number;
}

const worksWithNumbers = (type: SELVVALGT_NAVN2): void => { //data type properties of chosen interface determines which kind of data type the function will work with
    console.log(`Android ${type.randomNum1} has ${type.randomNum2} language`);
};

const chocolate = {
    randomNum1: 5,
    randomNum2: 48
}


worksWithNumbers(chocolate); // Same as the other function, but in reverse