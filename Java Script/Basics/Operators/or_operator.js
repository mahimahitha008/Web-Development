a=100
b=200
c=300
console.log(a<b || b<c)      //True  (true*true)
console.log(a>b || b>c)      //False (false*false)
console.log(a<b || b>c)      //True  (true*false)
console.log(a>b || b<c)      //True  (false *true)