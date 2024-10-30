import { User } from "../../Interfaces/Interface";

//Selects specific properties from a type.
type userNameAndActiveStatus = Pick<User, "name"|"isActive">

const newUser:userNameAndActiveStatus = {name:"kris",isActive:true}

