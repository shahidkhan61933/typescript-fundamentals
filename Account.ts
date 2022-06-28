interface Address {
    id: number;
    street:string;
    state:string;
    pincode:number;
}

interface Account {
    id: number;
    name:string;
    balance:number;
    status:boolean;
    address:Address[];
}

let addOne:Address =  {
    id: 1000,
    street:"M street",
    state:"M state",
    pincode:101010,
}

let addTwo:Address =  {
    id: 1001,
    street:"N street",
    state:"N state",
    pincode:202020,
}

let account: Account = {
    id: 420202,
    name:"John",
    balance:454566.56,
    status:true,
    address: [addOne, addTwo]
}

console.log(account);
