class User2 {

    private id: number;
    private name: string;
    private age: number;
    private address: string;
    private status?: boolean;

    constructor(){};

    public get Id(): number {
        return this.id;
    }
    public set Id(id: number) {
        this.id = id;
    }

    public get Name(): string {
        return this.name;
    }
    public set Name(name: string) {
        this.name = name;
    }
}
let user = new User2();

// ssett values
user.Id = 1000;
user.Name ='John Smith';

console.log(user.Id);
console.log(user.Name);
