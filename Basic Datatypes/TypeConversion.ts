let unknownValue: unknown = "This is a string";
let stringValue: string = unknownValue as string; // Type assertion
console.log(stringValue.toUpperCase()); // Output: THIS IS A STRING
