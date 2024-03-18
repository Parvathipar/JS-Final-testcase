let a=255;
let b=120;
let c=22;
let sum,average;

try{
sum=a+b+c; //sum of these numbers
console.log("sum of these numbers is",sum);
average=(sum/3);  //average of these numbers
console.log("average of these numbers is",average);


// console.log(larger)   //to show the error message

//finding largest among 3 numbers
if(a>b && a>c){
    console.log(a,"is larger")
}
else if(b>a && b>c){
    console.log(b,"is larger")
}
else{
    console.log(c,"is larger")
}

//finding smallest among 3 numbers

if(a<b && a<c){
    console.log(a,"is smaller")
}
else if(b<a && b<c){
    console.log(b,"is smaller")
}
else{
    console.log(c,"is smaller")
}
throw 'error shown'  // to show throw
}
catch(e){
  console.log("error occured",e)
}
finally{
    console.log("no errors found");
}
