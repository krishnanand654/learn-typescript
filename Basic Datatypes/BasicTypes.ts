//Type Annotations

let isDone:boolean = true
let num:number = 123
let username:string = "kris"
let list:number[]= [1,23,4]
let list1:string[] = ["a","b","c"]


//Union Types

let Id:string | number = "ID-121" //valid
Id = 123 // valid

//enum
/* enum is a way to define a set of named constants*/

export enum Status{
    Success = 200,
    NotFound = 404,
    ServerError = 500,
    UnAuthorized = 401,
}

let response:Status = Status.Success;
// console.log(response)



