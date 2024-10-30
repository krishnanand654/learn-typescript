//Union types allow a variable to be one of several specified types.
export type Id = string|number;

function printId(id:Id){
    return `${id}`
}

console.log(printId(1))