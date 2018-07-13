export interface User {
    name: string;
    age: number;
}


export class UserImpl implements User{
    age: number;
    name: string;

    constructor(age: number, name: string) {
        this.age = age;
        this.name = name;
    }
}

