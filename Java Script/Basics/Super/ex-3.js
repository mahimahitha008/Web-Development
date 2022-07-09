class colors{
    constructor(){
        console.log("There are different colors");
    }
    get_color(){
        console.log("Orange,Red,Pink,Black");
    }
    new_color(){
        console.log("White,Brown,Purple,Yellow");
    }
}
class colors1 extends colors{
    constructor(){
        super();
        console.log("With different shades");
    }
    new_color1(){
        console.log("Gold,Grey,Blue,Green");
    }
}
new colors1();     //display both constructor values
let w1= new colors1();
w1.get_color();
w1.new_color();
w1.new_color1();