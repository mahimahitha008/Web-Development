let dress={
    color:"White",
    model:"Palazo",
    brand:"H&M"
}
let dress1={
    color:"Black",
    brand:"Biba",
    size:38,
    waranty:"1 Year"
}
let dress_new={...dress,...dress1};
console.log(dress_new);