class User {

    private id: number;
    private name: string;
    private age: number;
    private address: string;
    private status?: boolean;

    constructor(){};

    public getId(): number {
        return this.id;
    }
    public setId(id: number) {
        this.id = id;
    }

    public getName(): string {
        return this.name;
    }
    public setName(name: string) {
        this.name = name;
    }
}
let user = new User();

// ssett values
user.setId(1000);
user.setName('John Smith');

console.log(user.getId());
console.log(user.getName());
