class Account{
    constructor(){
        console.log("Balace is low");
    }
    get_details(){
        console.log("Account Created Successfully");
    }
    get_Address(){
        console.log("Marathahalli");
    }
}
class Savings_Account extends Account{
    constructor(){
        super();
        console.log("But it is Suficient");
    }
}
new Savings_Account();
let c1=new Savings_Account();
c1.get_Address();
c1.get_details();