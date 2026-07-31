class user {
    constructor(fname,lname,contact){
        this.fname = fname;
        this.lname = lname;
        this.contact = contact;
    }
    greetuser(){
        console.log(`welcome ${this.fname} ${this.lname}`)
    }
}

class admin extends user{
        constructor(fname,lname,contact){
            super(fname,lname,contact);
            this.adminAccess = true;
        }
        addcourse(){
            console.log('new course added')
        }
         greetuser(){
        console.log(`welcome ${this.fname} ${this.lname}`)
    }  // method overriding --> two methods in two class
}
let u1 = new user('abhishek','sharma',74648452245);
let u2 = new admin('meghraj','rajput',4639374759)
u1.greetuser();
u2.greetuser();
u2.addcourse();
