function add(){
    console.log(this);
}
add();
//for fatarrow
let sub=()=>{
    console.log(this);
}                                 //{}
sub();