const input = require("readline-sync")

let a = input.questionInt("Enter the 1st number");
let b = input.questionInt("Enter the 2nd number");
let c = input.questionInt("Enter the 3rd number");
let d = input.questionInt("Enter the 4th number");

if(a>b && a>c && a>d)
{
    console.log(a);
}

else if(b>a && b>c && b>d)
{
    console.log(b);
}

else if(c>a && c>b && c>d)
{
    console.log(c);
}

else if(d>a && d>b && d>c)
{
    console.log(d);
}
