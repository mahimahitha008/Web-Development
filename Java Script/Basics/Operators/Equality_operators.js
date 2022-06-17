a=100
b="100"
console.log(a==b)     //It evaluates only values so answer is true even though 100 in b is a string
console.log(a===b)    //It evaluates first datatype and then value so that we get false
//=== indicates Strict equality operator