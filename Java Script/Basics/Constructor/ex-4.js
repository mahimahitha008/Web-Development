class product{
    constructor(a,b,c){
        this.eid=a
        this.ename=b
        this.esal=c
    }
    get_details(){
        console.log(this.eid,this.ename,"and",this.esal)
    }
}
let e1 = new product(101,"Raghul",45000)
console.log(e1)
e1.get_details()
let e2=new product(102,"Sohel",50000)
console.log(e2)
e2.get_details()