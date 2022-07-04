var Account = /** @class */ (function () {
    function Account(id, name, balance, address, status) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.balance = balance;
        this.status = status;
    }
    Account.prototype.showBalance = function () {
        console.log("The user balance ".concat(this.balance));
        return this.balance;
    };
    Account.prototype.depositAmount = function (amount) {
        this.balance += amount;
        console.log("The user balance after deposit : ".concat(this.balance));
        return this.balance;
    };
    Account.prototype.withdrawAmount = function (amount) {
        this.balance -= amount;
        console.log("The user balance  after withdraw : ".concat(this.balance));
        return this.balance;
    };
    return Account;
}());
var account = new Account(101, 'John smith', 4444, 'Ak street', true);
console.log(account);
// console.log(account.name); private property
account.showBalance();
console.log("----------------");
account.withdrawAmount(1000);
console.log("----------------");
account.depositAmount(1000);
