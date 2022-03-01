
var szoveg="Szép az élet";
console.log(szoveg);
console.log(a);
var a="2";
var b="alma";
var osszeg=Number(a)+Number(b);
console.log(osszeg)

if (a==2){
    console.log("Az a értéke kettő")
    console.log(typeof a);
}else{
    console.log("Az a értéke nem kettő")
    console.log(typeof a);
}

var logikai=true;
logikai=a<=2;
console.log(logikai);

var szin="red";

switch (szin){
    case "red":
        console.log("Piros");
        break;
    case "blue":
        console.log("Kék");
        break;
    case "green":
        console.log("Zöld");
        break;
    case "yellow":
        console.log("Citromsárga");
        break;
    default:
        console.log("Nem ismerem ezt a színt!"); 
}

if (szin=="red"){
    console.log("Piros");
}else if(szin=="blue"){
    console.log("Kék");
}else if (szin=="green"){
    console.log("Zöld");
}else if(szin=="yellow"){
    console.log("Citrmosárga");
}else{
    console.log("Nem ismerem ezt a színt!");
}