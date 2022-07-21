let car={
    description:{
        color:"Maroon",
        company:"KIA",
        model:"Seltos",
    },
    Stock:"Available"
}
/*
console.log(car);
console.log(car.description);
console.log(car.description.color);
console.log(car.description.company);
console.log(car.description.model);
console.log(car.Stock);
*/
let {description}= car;
console.log(description);
console.log(description.color);
console.log(description.company);
console.log(description.model);
let {Stock}=car;
console.log(Stock);
