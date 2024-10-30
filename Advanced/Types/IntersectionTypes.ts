//simulating imports
import { Id } from "./UnionTypes"

//Intersection types combine multiple types into one, useful for mixing multiple interfaces or type aliases.
interface person{
    name:string
}

interface employeeId{
    id:Id
}

type Employee = person & employeeId

const employee:Employee = {id:"101", name:"kris"}