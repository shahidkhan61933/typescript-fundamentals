var addOne = {
    id: 1000,
    street: "M street",
    state: "M state",
    pincode: 101010
};
var addTwo = {
    id: 1001,
    street: "N street",
    state: "N state",
    pincode: 202020
};
var account = {
    id: 420202,
    name: "John",
    balance: 454566.56,
    status: true,
    address: [addOne, addTwo]
};
console.log(account);
