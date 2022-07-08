class choclate{
    dairymilk(){
        return "Choclate is my Favourite!";
    }
}
class oreo extends choclate{}
class crackle extends choclate{}
let c1=new oreo();
let c2=new crackle();
console.log(c1.dairymilk());
console.log(c2.dairymilk());
console.log(c1);
console.log(c2);