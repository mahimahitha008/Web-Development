let cars=[
    {brand:"Hyundai",price:1799999,model:"City",color:"White"},
    {brand:"Toyota",price:2500000,model:"Etios",color:"Red"},
    {brand:"Kia",price:1200000,model:"Seltos",color:"White"},
    {brand:"Mahindra",price:1100000,model:"SUV",color:"Black"},
    {brand:"Tata",price:850000,model:"Nexon",color:"White"},
];
let newc= cars.filter((c)=>{
    return c.color == "White"
})
console.log(newc)