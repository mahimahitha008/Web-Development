let product={
    prod:{
        Item:"Shirt",
        Color:"White",
        Brand:"Peter England",
    },
    cost:5000,
    Exchange:"Available"
}
let {prod}=product;
console.log(prod);
console.log(prod.Item);
console.log(prod.Color);
console.log(prod.Brand);
let {cost}=product;
console.log(cost);
let {Exchange}=product;
console.log(Exchange);