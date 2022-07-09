class Empty{
    constructor(){
        console.log("hi");
    }
}
class empty1 extends Empty{
    constructor(){
        super();
        console.log("hi");
    }
}
new empty1();