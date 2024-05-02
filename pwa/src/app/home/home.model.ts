export class User{
    id: string = '';
    firstName: string = 'Mark Steven';
    middleName: string = 'Babon';
    lastName: string = 'Sibayan';

    // Age: number = 1;
    // Address: string = '';
    // isActive:boolean = true;
    // birthday: number = 1;
    // salary = 0;
}

export interface iUser{
    id: string;
    firstName: string;
    middleName: string;
    lastName: string;
}