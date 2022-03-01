
var tomb=[];
var tomb2=[1,2,3,4,5];
var tomb3=[4];

console.log(tomb.length);
console.log(tomb2.length);
console.log(tomb3.length);
tomb2[10]=10;
var txt="";

for (let index = 0; index < tomb2.length; index++) {
    txt+=tomb2[index]+",";
    
}
console.log(txt);

var gyumolcs=["alma","szilva","körte","barack","eper"];
var gyumolcsszin=["piros","lila","sárga","barack","piros"];
var gyumolcsar=[250, 420, 350, 120, 2500];

var i=0;
while(i<gyumolcsszin.length && !(gyumolcsszin[i]=="sárga")){
    i++;
}
var van=i<gyumolcsszin.length;
console.log(van);
var db=0;
for (var index = 0; index < gyumolcsszin.length; index++) {
    if(gyumolcsszin[index]=="piros"){
        db++;
    }
}
console.log(db)

var osszeg=0;
for (let index = 0; index < gyumolcsar.length; index++) {
    osszeg+= gyumolcsar[index];
}
console.log(osszeg)

var db1=0;
var db2=0;
for (var index = 0; index < gyumolcsszin.length; index++) {
    if(gyumolcsszin[index]=="piros"){
        db1++;
    }
}
for (var index = 0; index < gyumolcsszin.length; index++) {
    if(gyumolcsszin[index]=="sárga"){
        db2++;
    }
}
if(db1>db2){
    console.log("Piros-ból ban több szín")
}else{
    console.log("Sárgá-ból ban több szín")
}

index = 0;
while (index < gyumolcsar.length  && !(gyumolcsar[index]>1000)  ) {
    index++
}
if(index < gyumolcsar.length){
    console.length("Van")
}else{
    console.length("Nincs")
}