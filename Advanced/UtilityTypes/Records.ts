type RolePermissions = "admin" | "user" | "guest"

//Creates a key-value type.
const permissions:Record<RolePermissions, string[]> = {
    admin: ['read','write','delete'],
    user: ['read', 'write'],
    guest: ['read']
}

console.log(permissions)