class items{
    fruits(){
        return "Orange, Grapes,Banana,Apple";
    }
    vegetables(){
        return "Tomato,Beans,Carrot,Beetroot";
    }
}
class items1 extends items{
    medicinal_plants(){
        return "Tulasi,Aloevera,Neem,Periwinkle";
    }
}
let i= new items1();
console.log(i);
console.log(i.fruits());
console.log(i.vegetables());
console.log(i.medicinal_plants());