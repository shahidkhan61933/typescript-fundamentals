class User2 {
    constructor() { }
    ;
    get Id() {
        return this.id;
    }
    set Id(id) {
        this.id = id;
    }
    get Name() {
        return this.name;
    }
    set Name(name) {
        this.name = name;
    }
}
let user = new User2();
// ssett values
user.Id = 1000;
user.Name = 'John Smith';
console.log(user.Id);
console.log(user.Name);
