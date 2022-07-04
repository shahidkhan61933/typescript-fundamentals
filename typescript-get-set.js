var User = /** @class */ (function () {
    function User() {
    }
    ;
    User.prototype.getId = function () {
        return this.id;
    };
    User.prototype.setId = function (id) {
        this.id = id;
    };
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.setName = function (name) {
        this.name = name;
    };
    return User;
}());
var user = new User();
// ssett values
user.setId(1000);
user.setName('John Smith');
console.log(user.getId());
console.log(user.getName());
