interface Address {
    id: number;
    street:string;
    state:string;
    pincode:number;
}

class Shop {

    private id?:string;
    private name?:string;
    public status?:boolean;
    public revenue?: number;
    public address?: Address;
    
    constructor(id?:string, name?:string, status?:boolean, revenue?:number, address?:Address) {
        this.id = id;
        this.name = name;
        this.status = status;
        this.revenue = revenue;
        this.address = address;
    }

    public showName() : any {
        return this.name;
    }
    public showShopId(): any {
        return this.id;
    }
}

let add = {
    id: 1000,
    street:"M street",
    state:"M state",
    pincode:101010
}
let shop = new Shop("AK101","john",true, 456456, add);
console.log(shop);

console.log(shop.address);


let shopTwo = new Shop();

console.log(shopTwo);
