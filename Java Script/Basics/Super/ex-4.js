class icecreams{ 
    constructor(){
        console.log("You can't be sad, when ur eating an icecream");
    }
    get_flavour(){
        console.log("Vennela,Butterscotch,Choclate");
    }
    get_flavour2(){
        console.log("Mango,Strawberry");
    }

}
class ice_cream extends icecreams{
    constructor(){
        super();
        console.log("for sure")
    }
}
let i=new icecreams
console.log(i)
i.get_flavour()
i.get_flavour2()