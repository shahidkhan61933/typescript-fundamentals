var displayMessage = function () {
    console.log("Hi sample show message function");
};
var displayUser = function (username, age, status) {
    console.log("The user data \n    username : ".concat(username, "\n    age : ").concat(age, "\n    status : ").concat(status, "\n    "));
};
var getUser = function (user) {
    console.log(user);
};
displayMessage();
displayUser("john", 30, true);
getUser({
    id: 100,
    name: "jon",
    email: 'john@admin.com',
    gender: "male",
    status: true
});
