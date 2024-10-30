
function getIdentity<T>(value:T):T{
    return value
}

const getIdentityX = <T>(value:T):T =>{
    return value
}

console.log(getIdentity<string>("hello"))
console.log(getIdentity<number>(101))