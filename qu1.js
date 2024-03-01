const input = require("readline-sync")

let a = input.questionInt("Enter the1st number: ");
let b = input.questionInt("Enter the 2nd number: ");
let c = input.questionInt("Enter the 3rd number: ");

// if(a>b){
//     max = a;
// }else{
//     max = b;
// }
// if(max>c){
//     console.log(max);

// }
// else{
//     console.log(c);
// }
if (a>b && a>c)
{
    console.log("max:",a);
}
else if (b>a && b>c)
{
    console.log("max:",b);
}
else
{
    console.log("max:",c);
}



    



