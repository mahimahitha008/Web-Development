let choclate=[{choc_name:"dairymilk",edition:"Bubbly",cost:75},
{choc_name:"dairymilk",edition:"Crackle",cost:275},
{choc_name:"dairymilk",edition:"Fruit & Almond",cost:85},
{choc_name:"dairymilk",edition:"Oreo",cost:135},
{choc_name:"dairymilk",edition:"Silk",cost:500}
];
let c= choclate.filter((choc)=>{
    return choc.cost >100;
})
console.log(c)
let d= choclate.filter(function(f){
    return f.cost <100
})
console.log(d)