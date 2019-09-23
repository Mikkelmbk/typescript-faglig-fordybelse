class Car {
    model: String;
    doors: Number;
    isElectric: Boolean;

    constructor(model: String, doors: Number, isElectric: Boolean) {
        this.model = model;
        this.doors = doors;
        this.isElectric = isElectric;
    }

    // make(): void {
    //     console.log(`Model Contains ${this.model} Doors Contains ${this.doors} isElectric Contains ${this.isElectric}`);
    // }
}


let newCar = new Car('Innova', 4, false); // the first parameter gets passed to the constructors first parameter slot and gets type checked, then it gets passed from the constructors first parameter slot, and into the classes chosen property. This happens for all the parameters obviously and when the last parameter has been passed, it creates a new object with the "newCar" name and with all the properties of the class

let oldCar = new Car('Fala', 8, true); // All parameters must be provided, otherwise a syntax error will occur and the constructor wont do it's job

console.log(newCar); // This is the object after it has been created through the class
console.log(oldCar);

// newCar.make(); // function called with the properties of the chosen object
// oldCar.make();