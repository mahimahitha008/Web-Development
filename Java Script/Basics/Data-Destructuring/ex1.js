let phones={
    product:{Brand:"Iphone",
    model:"7s",
    cost:85000,
},
Availability:"Stock Available"
}
//console.log(phones.Availability);     //Stock Available
//console.log(phones.product.Brand);    //Iphone
let {Availability}=phones;
console.log(Availability);
let {product}=phones;
console.log(product.Brand);
console.log(product.model);
console.log(product.cost);
