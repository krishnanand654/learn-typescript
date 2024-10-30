class Person{
    id:number;
    name:string;

    constructor(id:number, name:string){
        this.id = id;
        this.name = name;
    }

    getUserDetail(){
        return {
            id: this.id,
            name: this.name
          };
    }
}

const person = new Person(101, "kris")

console.log(person.getUserDetail());



