class scheme{
    pension (){
        return "Recieved";
    }
}
class scheme1 extends scheme{
    pension1(){
        return "Recieved twice";
    }
}
p1=new scheme1();
console.log(p1.pension1());