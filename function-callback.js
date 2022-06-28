var x = function (username, callback) {
    console.log("The user data  username :" + username);
    callback();
};
var y = function () {
    console.log("This is Y function.");
};
x("John", y);
