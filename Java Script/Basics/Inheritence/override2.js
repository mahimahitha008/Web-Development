class central{
    tax=18;
}
class ka extends central{
    tax=24;
}
class goa extends central{

}
let s1= new ka();
let s2= new goa();
console.log(s1.tax);
console.log(s2.tax);