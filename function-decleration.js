function showMessage() {
    console.log("Hi sample show message function");
}
function displayMsg(username, age, status) {
    console.log("The user data \n    username : ".concat(username, "\n    age : ").concat(age, "\n    status : ").concat(status, "\n    "));
}
function showUser(user) {
    console.log(user);
}
showMessage();
displayMsg("john", 30, true);
showUser({
    id: 100,
    name: "jon",
    email: 'john@admin.com',
    gender: "male",
    status: true
});
