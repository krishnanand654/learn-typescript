//any
let dynamicValue: any = "Hello";
dynamicValue = 42; // This is allowed with 'any' type
console.log(dynamicValue); // Output: 42

//void
function logMessage(message: string): void {
    console.log(message);
  }
logMessage("This is a message"); // Output: This is a message
  
//never
function throwError(message: string): never {
    throw new Error(message);
  }
// throwError("This is an error"); // Throws: Error: This is an error
  
//unknown
let userInput: unknown = "Some input";
if (typeof userInput === "string") {
  console.log(userInput.toUpperCase()); // Output: SOME INPUT
}

//null
let nullableString: string | null = null;
nullableString = "Hello, TypeScript";
console.log(nullableString); // Output: Hello, TypeScript

