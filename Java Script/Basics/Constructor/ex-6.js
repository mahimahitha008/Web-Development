class choclate{
    constructor(a,b){
        this.silk= a;
        this.bubbly= b;
    }
    get_brand(){
        console.log(this.silk,"and",this.bubbly)
    }
}
let c1=new choclate("Darymilk","Fivestar")
console.log(c1)
c1.get_brand()
