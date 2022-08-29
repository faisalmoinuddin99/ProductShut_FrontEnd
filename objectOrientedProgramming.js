var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    function Department(name, vertical, numberOfEmployees, floorNumber) {
        this.name = name;
        this.vertical = vertical;
        this.numberOfEmployees = numberOfEmployees;
        this.floorNumber = floorNumber;
        console.log("The ".concat(name, " belongs to the ").concat(vertical, "\n        has ").concat(numberOfEmployees, " employees and is located on \n        floor ").concat(floorNumber, "\n        "));
    }
    return Department;
}());
var Tech = /** @class */ (function (_super) {
    __extends(Tech, _super);
    function Tech() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // constructor(name: string, vertical: string, numberOfEmployees: number,floorNumber: number ){
    //     super(name, vertical, numberOfEmployees, floorNumber)
    // }
    Tech.prototype.numberOfTables = function () {
        return this.numberOfEmployees / 5;
    };
    return Tech;
}(Department));
var backend = new Tech("Technology Service", "Tech", 50, 10);
console.log(backend.numberOfTables());
