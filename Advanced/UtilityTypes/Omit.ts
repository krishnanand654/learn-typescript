import { User } from "../../Interfaces/Interface";

// Removes specified properties from a type.
type userWithoutActiveStatus = Omit<User,"isActive">

