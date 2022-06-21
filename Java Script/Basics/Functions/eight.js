//After return statement no statement is going to execute only before return statements are going to execute.
function age(y){
    y=y+1
    return 2022-y
    console.log(y)
    console.log(age)    //These 5 and 6 lines statementa are not going to execute as cursor will  not go back again to execute these statements
}
console.log(age(1983))
h=age(2033)
console.log(h)