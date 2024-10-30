import { User } from "../../Interfaces/Interface";

//Makes all properties of a type optional.
const updateUser =(user:Partial<User>)=>{
    const existingUser:User = {id:101,name:"kris",isActive:true}

    const updatedUser = {...existingUser,...user}

    return updatedUser
}

console.log(updateUser({name:"krishnanand"}))