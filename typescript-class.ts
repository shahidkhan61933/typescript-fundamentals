class Account {

    private id: number;
    private name: string;
    private balance: number;
    private address: string;
    private status?: boolean;

    constructor(id: number, name: string, balance: number, address: string, status?: boolean) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.balance = balance;
        this.status = status;
    }

    public showBalance(): number {
        console.log(`The user balance ${this.balance}`);
        return this.balance;
    }

    public depositAmount(amount: number): number {
        this.balance += amount;
        console.log(`The user balance after deposit : ${this.balance}`);
        return this.balance;
    }

    public withdrawAmount(amount: number): number {
        this.balance -= amount;
        console.log(`The user balance  after withdraw : ${this.balance}`);
        return this.balance;
    }
}


let account = new Account(101, 'John smith',4444,'Ak street',true);
console.log(account);
// console.log(account.name); private property
account.showBalance();
console.log("----------------");

account.withdrawAmount(1000);
console.log("----------------");

account.depositAmount(1000);
