class fashion{
    constructor(){
        console.log("Let's get started")
    }
    dresses(){
        console.log('Dresses-"Punjabi,Salwar,Patiyala,Lehanga"')
    }
    chappal(){
        console.log("High heels, flats, cut-shoe , shoes")
    }
}
class fashions extends fashion{
    constructor(){
        super();
        console.log("With New Trends")
    }
    jewellery(){
        console.log("Anklet, Chain, Bangeles, Ear-Rings")
    }
}
let f= new fashions
console.log(f)
f.jewellery()
f.dresses()
f.chappal()