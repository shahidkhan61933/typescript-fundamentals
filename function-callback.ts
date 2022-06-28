let x = function (username :string, callback : any ) {
    console.log("The user data  username :" + username );
    callback();
}


let y = function () {
    console.log("This is Y function.");
}

x("John", y);