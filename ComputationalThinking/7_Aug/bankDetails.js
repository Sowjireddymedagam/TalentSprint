class bankDetails {
    constructor(firstName, lastName, acc_no, IFSC_code, mb_no, post_off, branch){
        this.firstName = firstName;
        this. lastName = lastName;
        this. acc_no = acc_no;
        this.IFSC_code = IFSC_code;
        this.mb_no = mb_no;
        this.post_off = post_off;
        this.branch = branch;
    }
    fullName = () =>{
        return `${this.firstName} ${this.lastName}`
    }
    getDetails = () =>
    {
        return `fullName : ${this.fullName()} \n acc_no: ${this.acc_no} \n IFSC_code: ${this.IFSC_code} \n mb_no: ${this.mb_no} \n post_off: ${this.post_off} \n Branch: ${this.branch}`
    }
}

const user1 = new bankDetails('sowjanya' , 'medagam' ,  '098765432198', 'SBIN *******833',9553904142 ,'mutukula', 'marrivemula');
console.log(user1.getDetails());