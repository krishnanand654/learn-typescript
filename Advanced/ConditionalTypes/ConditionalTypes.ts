type IsString<T> = T extends string ? "Yes, it's a string" : "No, it's not a string";

type Test1 = IsString<string>;  // "Yes, it's a string"
type Test2 = IsString<number>;  // "No, it's not a string"
type Test3 = IsString<"hello">; // "Yes, it's a string"
type Test4 = IsString<42>;      // "No, it's not a string"

//More
interface User {
    name: string;
    age: number;
  }
  
  interface Admin {
    name: string;
    role: string;
  }
  
  type UserType<T> = T extends Admin ? "Admin" : "User";
  
  type TestUserType1 = UserType<User>;  // "User"
  type TestUserType2 = UserType<Admin>;  // "Admin"
  