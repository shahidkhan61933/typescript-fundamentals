let displayMessage = function () : void {
    console.log("Hi sample show message function");
}

let displayUser = function(username:string, age:number,status:boolean) :void {
    console.log(`The user data 
    username : ${username}
    age : ${age}
    status : ${status}
    `);
    
}

interface User {
    id: number;
    name: string;
    email:string;
    gender:string;
    status: boolean;
}

let getUser = function ( user: User) : any {
    console.log(user);
}

displayMessage();
displayUser("john", 30, true);
getUser({
    id : 100,
    name : "jon",
    email : 'john@admin.com',
    gender:"male",
    status : true
});