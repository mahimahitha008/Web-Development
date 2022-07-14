let phone={
    Brand:"IPhone",
    Model:"7S",
    Price:125000
}
let new_Phone={
    Price:150000,
    color:"Green",
    stock:"Available"
}
let phones={...phone,...new_Phone};
console.log(phones);