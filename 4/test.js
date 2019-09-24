var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Banks = /** @class */ (function () {
    function Banks(myName, myHiring, myCostumerCount) {
        this.name = myName;
        this.hiring = myHiring;
        this.costumerCount = myCostumerCount;
    }
    return Banks;
}());
var Bank = /** @class */ (function (_super) {
    __extends(Bank, _super);
    function Bank(name, hiring, costumerCount, myType) {
        return _super.call(this, name, hiring, costumerCount) || this; // calling the base class' constructor with the given parameters in the newBank Variable below
        // this.type = myType;
    }
    return Bank;
}(Banks));
var newBank = new Bank("Danske Bank", true, 50, "Privat ejet");
console.log(newBank);
