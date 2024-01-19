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
    // BTS members RM and V are reportedly among six ‘elite’ graduates
    // from the Korean military to receive top honours.
    // RM had shared the photos.

let a1=["BTS ","members "];
let a2=[...a1,"RM ","and"," V "];
let a3=[...a2,"are"," reportedly"];
let a4=[...a3," among ","six "];
let a5=[...a4,"elite ","graduates "];
let a6=[...a5,"from ","the ","Korean "];
let a7=[...a6,"military ","to receive "];
let a8=[...a7,"top honours."," RM had"];
let a9=[...a8," shared"," the photos."];

console.log('data >>>',a9);

var paragraph2=""
for(var i=0;i<=19;i++){
    paragraph2=paragraph2+a9[i];
};

console.log(paragraph2);

    // EaseMyTrip CEO Nishant Pitti defended the decision of his company
    // to suspend flight bookings to the island nation amid the India-Maldives
    // row, claiming that some people on social media accused his company
    // of taking a political stance.

let b1=["EaseMyTrip CEO","Nishant Pitti"];
let b2=["defended","the decision"];
let b3=["of his company","to suspend the flights"];
let b4=["booking to the","island nation"];
let b5=["amid the India-Maldives row,"];
let b6=["claiming that","some people on social media"];
let b7=["accused his company","of taking"];
let b8=["a political","stance"];

let b9=[...b1,...b2,...b3,...b4,...b5,...b6,...b7,...b8]; // Spread Function

console.log(b9);

var p3=""
for(var i=0;i<=14;i++){
    console.log(b9[i]);
    p3+=b9[i]+" "
}
console.log(p3);



//1. Function Defination
function myFunctionC(n){; // n is a formal argument
    // Function Body
    console.log("Hello"+n+"How are you");

    // Function returning something
    return n;
}
//2. Function Calling
let x = myFunctionC(" Rishabh Bairagi ");
    console.log();

myFunctionC(" Abhishek Bairagi ");