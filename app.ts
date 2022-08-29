// Built-in datatypes

// Boolean
let isLoggedIn : boolean = true ;

console.log(isLoggedIn);

// Number
let numberOfScreen : number = 5 ;
console.log(numberOfScreen);

// string
let firstName: string = "Ifrah" ;
console.log(firstName);

// typeAssertion / typecasting

let someValue: any = "this is a string" ;
let strLenth: number = (someValue as string).length ;
console.log(strLenth);

let vehicleNumber: string | number
vehicleNumber = "MH-"
console.log(vehicleNumber);
vehicleNumber = 57345
console.log(vehicleNumber);


