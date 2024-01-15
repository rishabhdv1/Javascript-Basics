// Function Defination
function myFunctionA(n){
    // Function body
    console.log("Hello "+n+" How are you");

    return n;
}
// Function Calling
let c= myFunctionA("Rishabh Bairagi");

console.log();

let myFunctionB=(name)=>{
    console.log("Hello "+name+" How are you");
}
myFunctionB("Anant");

let a = ["Rishabh","Anant","Anchit"];

console.log(a);
console.log(a.length);

let b = [...a,"Ritik","Abhishek","Shivam","Arun","Gamad"];

console.log(b);

let d = ["An"," arrow"];
let e = [...d," function"];
let f = [...e," expression"];
let g = [...f," is"];

console.log(g);

var paragraph="";
for(var i=0;i<g.length;i++){
    console.log(g[i]);
    paragraph=paragraph+g[i]
    console.log(paragraph);
}