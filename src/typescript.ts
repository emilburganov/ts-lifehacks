// Const enums

// const enum UserRole {
//     ADMIN = "admin",
//     USER = "user",
// }


// Objects instead enums

// const UserRole = {
//     ADMIN: "admin",
//     USER: "user",
// } as const;
//
// type ValueOf<T> = T[keyof T]
//
// type UserRole = ValueOf<typeof UserRole>;
//
// const printRole = (role: UserRole) => {
//     console.log(role);
// };
//
// printRole(UserRole.ADMIN);
// printRole("admin");


// Return types

// interface User {
//     id: number;
//     data: string;
// }
//
// const printUser = (timestamp: number, comment: string): User => {
//     console.log(timestamp);
//     console.log(comment);
//
//     return {
//         id: 1,
//         data: "data",
//     };
// };
//
// type PrintUserResult = ReturnType<typeof printUser>
// type PrintUserParams = Parameters<typeof printUser>
//
// const returnTypeObject: PrintUserResult = {
//     id: 2,
//     data: "data",
// };
//
// const paramsTypeObject: PrintUserParams = [1234, "Hello, world!"];


/* Conditional */
type Conditional<T> = T extends string ? number : boolean;

const firstConditional: Conditional<string> = 1;
const secondConditional: Conditional<number> = true;