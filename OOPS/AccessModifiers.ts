class Animal{
    public name:string;
    private age:number;

    constructor(name:string, age:number){   
        this.name = name;
        this.age = age;
    }   

    //Only accessable within the class
    private getAge(){
        return this.age
    }

    //Accessible through this
    public accessGetAge(){
        return this.getAge()
    }
}

const dog = new Animal("bucky",12)

console.log(dog.accessGetAge())