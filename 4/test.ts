class Banks {
	name: String;
	hiring: Boolean;
	costumerCount: Number;

	constructor(myName: String, myHiring: Boolean, myCostumerCount: Number) { // parentClass Constructor
		this.name = myName;
		this.hiring = myHiring;
		this.costumerCount = myCostumerCount;
	}

}

class Bank extends Banks { // When making a new Bank() object you need to pass 4 arguments to this subclass, 3 of them are being used through the parentClass' constructor because they are being sent with the super() function call which uses the parentClass' constructor. The 4'th and final parameter is declared in this very class and is being build the normal way through the subclass' constructor via this.type

	type:String;

	constructor(name: String, hiring: Boolean, costumerCount: Number, myType:String) {
		super(name, hiring, costumerCount) // calling the base class' constructor with the given parameters in the newBank Variable below
		this.type = myType;
	}
}


let newBank = new Bank("Danske Bank",true,50,"Privat ejet")

console.log(newBank)