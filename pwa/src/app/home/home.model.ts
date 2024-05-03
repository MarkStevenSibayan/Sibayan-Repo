export class User{
    // id: string;
    // firstName: string;
    // middleName: string;
    // lastName: string;

    id: string;
    flavor:string;
    price: number;
    addOns:boolean;
    whatAddOns: string;
    mobileNum: number;
    


    constructor(id: string = '', flavor: string = '', price: number = 0, addOns: boolean = false, whatAddOns: string ='', mobileNumber: number = 0) {
        this.id = id;
        this.flavor = flavor;
        this.price = price;
        this.addOns = addOns;
        this.whatAddOns = whatAddOns;
        this.mobileNum = mobileNumber;
    }

    // constructor(id: string = '', firstName: string = '', lastName: string = '', middleName: string = '') {
    //     this.id = id;
    //     this.middleName = middleName;
    //     this.lastName = lastName;
    //     this.firstName = firstName;
    // }
}

export interface iUser{
    // id: string;
    // firstName: string;
    // middleName: string;
    // lastName: string;

    id: string;
    flavor:string;
    price: number;
    addOns:boolean;
    whatAddOns: string;
    mobileNum: number;

    
}