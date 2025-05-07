export interface User {
    id : number, name : string, dob : Date
}

export const USERS : User[] = [
    {id : 100, name : "Atharv", dob : new Date("2024-04-08")},
    {id : 200, name : "Siddharth", dob : new Date("2019-03-26")},
    {id : 300, name : "Ravi", dob : new Date("1988-03-18")},
    {id : 400, name : "Lakshmi", dob : new Date("1970-01-01")},
]