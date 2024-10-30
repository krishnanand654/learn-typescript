//Literal types restrict a variable to specific values rather than general types.

type status = "Done" | "onProgress" | "Pending"

let currentStatus:status = "Pending"