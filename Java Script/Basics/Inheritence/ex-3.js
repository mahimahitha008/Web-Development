class central{
    tax=18;
    status(){
        return "Paid";
    }
}
class ka extends central{
    tax=29;
    status(){
        return "Balance is to be pay immediately";
    }
}
class goa extends central{

}
let s1=new ka();
let s2= new goa();
console.log(s1.tax);
console.log(s2.tax);
console.log(s1.status());
console.log(s2.status());