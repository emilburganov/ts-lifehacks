// Exhaustive check

// interface CarBase {
//     year: number;
//     brand: string;
// }
//
// interface ToyotaCar extends CarBase {
//     comfort: boolean;
//     brand: "toyota"
// }
//
// interface MercedesCar extends CarBase {
//     speed: boolean;
//     brand: "bmw"
// }
//
// interface LadaCar extends CarBase {
//     abs: boolean;
//     brand: "lada"
// }
//
// type Car = ToyotaCar | MercedesCar | LadaCar;
//
// const exhaustiveCheck = (param: never) => {
//     console.log("Process the type " + param);
// }
//
// const printAboutCar = (car: Car) => {
//     switch (car.brand) {
//         case "toyota":
//             console.log("Toyota is a car with " +  car.comfort);
//             break;
//         case "bmw":
//             console.log("Bmw is a car with " +  car.speed);
//             break;
//         case "lada":
//             console.log("Lada is a car with " +  car.abs);
//             break;
//         default:
//             exhaustiveCheck(car);
//     }
// }

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


// Conditional

// type Conditional<T> = T extends string ? number : boolean;
// const firstConditional: Conditional<string> = 1;
// const secondConditional: Conditional<number> = true;
//
// type Car = {
//     model: string;
// }
//
// type Data = {
//     value: string;
// }
//
// type CarOrData<T> = T extends string ? Car : Data;
//
// const todoFunction = <T>(argument: T): CarOrData<T> => {
//     throw Error("Not implemented!");
// };
//
// const todoValue = todoFunction("Hello, todoFunction!");
// console.log(todoValue.model);


// Tuples
// type Tuple = [string, number, boolean, ...number[]];
// const tupleArray: Tuple = ["Hello", 123, false, 123, 123, 123, 123, 123];


// Immutable, readonly

// interface User {
//     username: string;
// }
//
// const userObject: User = {
//     username: "Username"
// } as const
//
// const mutateUser = (user: Readonly<User>) => {
//     // user.username = "Changed";
// }


// Utility types

// interface User {
//     id: number;
//     username: string;
//     password: string;
//     points: number;
// }
//
// type NewUser = Omit<User, "points">;
// type OldUser = Pick<User, "id" | "username" | "password">;
//
// const newUserObject: NewUser = {
//     id: 0,
//     password: "",
//     username: "",
// };
//
// const oldUserObject: OldUser = {
//     id: 0,
//     username: "",
//     password: "",
// };
//
// type CarBrands = "lada" | "bmw" | "mercedes" | "audi" | "renault"
//
// type GermanyCarBrands = Exclude<CarBrands, "lada" | "renault">
// type RussianCarBrands = Extract<CarBrands, "lada">
//
// const germanyCarBrandObject: GermanyCarBrands = "bmw";
// const russianCarBrandObject: RussianCarBrands = "lada";

// interface User {
//     id: number;
//     username: string;
//     password: string;
//     points: number;
//     birthdate: {
//         day: number;
//         month: number;
//         year: number;
//     };
// }
//
// type ValueOf<T> = T[keyof T]
//
// type Birthdate = ValueOf<Pick<User, "birthdate">>
//
// const birthdateObject: Birthdate = {
//     day: 0,
//     month: 0,
//     year: 0,
// };
//
// const partialUser: Partial<User> = {
//     birthdate: {
//         day: 0,
//         month: 0,
//         year: 0,
//     },
// };
//
// type DeepPartial<T> = T extends object ? {
//     [P in keyof T]?: DeepPartial<T[P]>
// } : T;
//
// const deepPartialUser: DeepPartial<User> = {
//     birthdate: {
//
//     }
// };