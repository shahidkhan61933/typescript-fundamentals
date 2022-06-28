var Shop = /** @class */ (function () {
    function Shop(id, name, status, revenue, address) {
        this.id = id;
        this.name = name;
        this.status = status;
        this.revenue = revenue;
        this.address = address;
    }
    Shop.prototype.showName = function () {
        return this.name;
    };
    Shop.prototype.showShopId = function () {
        return this.id;
    };
    return Shop;
}());
var add = {
    id: 1000,
    street: "M street",
    state: "M state",
    pincode: 101010
};
var shop = new Shop("AK101", "john", true, 456456, add);
console.log(shop);
console.log(shop.address);
var shopTwo = new Shop();
console.log(shopTwo);
