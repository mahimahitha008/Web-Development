let user={
    id:100,
    name:"Mahitha",
    email:"mahimahitha@gmail.com"
}
let users={
    email:"mahimahitha008@gmail.com",
    salary:200000,
    location:"Bengaluru"
}
let new_users={...user,...users};
console.log(new_users);