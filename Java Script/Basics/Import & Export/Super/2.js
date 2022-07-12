const {choclate} = require ('./1');
class choc extends choclate{
    constructor(a,b,c,d,e){
        super(a,b);
        this.Chocobar=c;
        this.Melody=d;
        this.Eclairs=e;
    }
}
let r=new choc("Dairymilk","FiveStar","Melody","Eclairs","Milkybar");
console.log(r);