a=10
b=20
c="30"
d="GM"
e="Raghul"
f=true
g=false
h="Twenty"
var i;
console.log(a+b)
console.log(a+c)
console.log(a+d)
console.log(d + e)
console.log(d+f)
console.log(e+g)
console.log(f+g)       //0+1
console.log(a+g)       //True value is 1
console.log(a+f)       //False value is 0
console.log(c+h)      //String+String
console.log(i+a)      //Number +undefined gives not a number(NaN)
console.log(a+i)       //NaN
console.log(i+d)      //undefined +string gives undefined and string
console.log(d+i)      //viceversa as above