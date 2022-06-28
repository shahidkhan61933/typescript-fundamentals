// variable with datatypes
let username : string = "john";
let age: number = 1000.08;
let isMarried:boolean = true;
let empty:null = null;

// object
let user: User =  {
    id : 100,
    name : "jon",
    email : 'john@admin.com',
    gender:"male",
    status : true
}

// array
let companies: string[] = ['john','will'];
let numberList: number[] = [100,110,1202,4,55];

// tuple
let workStatus : [string, string] = ['ACTIVE', "INACTIVE"];

// custom typing  : user model
interface User {
    id: number;
    name: string;
    email:string;
    gender:string;
    status: boolean;
}


console.log(username);
console.log(age);
console.log(isMarried);
console.log(empty);
console.log("----------------");
console.log(user);
console.log("----------------");
console.log(companies);
console.log(numberList);



