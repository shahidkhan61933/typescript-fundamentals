function showMessage() : void {
    console.log("Hi sample show message function");
}

function displayMsg(username:string, age:number,status:boolean) :void {
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

function showUser( user: User) : any {
    console.log(user);
}

showMessage();
displayMsg("john", 30, true);
showUser({
    id : 100,
    name : "jon",
    email : 'john@admin.com',
    gender:"male",
    status : true
});