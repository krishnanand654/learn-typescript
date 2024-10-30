import { User } from "../../Interfaces/Interface";

type ReadOnlyPerson = {
    readonly [k in keyof User]: User[k]
};

const user:ReadOnlyPerson = {
    id:101,
    name:"kris",
    isActive:true
}

//Cannot assign to 'id' because it is a read-only property.
//user.id = 200