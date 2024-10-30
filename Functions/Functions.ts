
//Normal function
function add(x:number, y:number): number {
    return x+y
}

//Arrow Function
const addx = (x: number, y:number): any=>{
    return x+y
}

//Optional Parameters
const greeting = (x:string, y?:string ): string =>{
    return "hello"+x+y
}

//Workouts -----------------------
const makeSquare = (x:number):number=>{
    return  x * x
}

const productsQuantity = (x:number[]): number[]=> {
    return x.map((e)=>makeSquare(e))
}

console.log(productsQuantity([1,2,3,4]))