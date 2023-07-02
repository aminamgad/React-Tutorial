// Parent class
export class User {
     static count = 0;
    constructor(id, userName, salary ) {
        this.id = id;
        this.userName = userName || 'unknown';
        this.salary = salary < 6000 ? salary + 500 : salary;
        this.msg = function (){
            return `Hello ${this.userName} Your salary is ${this.salary}`
        }
        User.count++;
    }
    //Methods
    writeMsg() {
        return `Hello ${this.id} ${this.userName}`
    }
    static countMembers() {
        return`${this.count} members created`;
    }
}
// Derived class
class Admin extends User{
    #e;
    constructor (id , userName , permissions,esalary) {
        super(id , userName)
        this.p = permissions;
        // Private Property
        this.#e = esalary;
    }
    getSalary(){
        return parseInt(this.#e)
    }
}

export let userOne = new User(100 , 'Amin Amgad' , 4000 )
export let userTwo = new Admin(2 , 'Ahmed','Okay',"50")

// Object Meta Data and Descriptor

export const myPobject = {
    a:1,
    b:2
} 

// Object.defineProperty(myPobject , 'c' , {
//     writable:true,
//     enumerable:true,
//     configurable:true,
//     value:3
// })

Object.defineProperties(myPobject  , {
    d:{
        configurable:true,
        value:4
    },
    e:{
        configurable:true,
        value:5
    }
})

// delete myPobject.c