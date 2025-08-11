class person{
    constructor(firstname, lastname, age, gender){
        this.firstName = firstname;
        this.lastName = lastname;
        this.Age = age;
        this.Gender = gender;
    }
    fullName = () =>{
        return `${this.firstName} ${this.lastName}`
    }
    age= () =>{ 
        return `${this.firstName} age is ${this.Age}`
    }
    getDetails = () =>
    {
        return `fullName : ${this.fullName()} \n Gender: ${this.Gender}`
    }
}
const user = new person('sowjanya' , 'medagam' , 22, 'female');
console.log(user.fullName())
console.log(user.age())
console.log(user.getDetails());


class student extends person{
    constructor(firstname, lastname, age1, gender1, regNo, dept, branch, phNo, email){
        super(firstname, lastname, age1, gender1);
        this.regNo = regNo;
        this.dept = dept;
        this.branch = branch;
        this.phNo = phNo;
        this.email = email; 
    }
    getDetails = () =>
    {
        return `fullName : ${this.fullName()} \n Age: ${this.age1} \n Gender: ${this.gender1} \n  
        regNo: ${this.regNo} \n Dept: ${this.dept} \n Brach: ${this.branch}\n PHNO: ${this.phNo} \n Email: ${this.email}`
    }
}
const user1 = new student('sowjanya' , 'medagam' , 22, 'female', '192111605', 'Btech', 'CSE', 9553904142, "medagamsowjanya.sse@saveetha.com");
console.log(user1.getDetails());