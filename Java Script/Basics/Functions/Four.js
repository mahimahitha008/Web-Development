//Functions with multiple arguments
function c(x,y){
    console.log(x+y)
    console.log(x-y)
    console.log(x*y)
}
c(1,2)
c(10,40)
c(1)          //NaN(Undefined + number=NaN)
c()           //NaN(undefined +undefined =NaN)