const colors = require ('./3');
class colors1 extends colors{
    constructor(n,m,b,y,j,u){
        super(n,m,b);
        this.c4=y;
        this.c5=j;
        this.c6=u;
    }
}
let a=new colors1("Red","Pink","Green","Blue","Marron","Black");
console.log(a);