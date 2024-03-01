const input = require("readline-sync")

let a = input.questionInt("Enter the 1st number");
let b = input.questionInt("Enter the 2st number");
let c = input.questionInt("Enter the 3st number");
let d = input.questionInt("Enter the 4st number");

if(a<b)
{
  m1 = a
  m2 = b;
}  else
{
    m1 = b
    m2 = a;
} if(c<d)
{
    m3 = c
    m4 = d;
} else 
{
    m3 = d
    m4 = c;
} if(m1<m3)
{
    m5 = m1
    m6 = m3;
} else 
{
    m5 = m3
    m6 = m1;
} if(m5<m6)
{
    console.log(m6);
} else 
{
    console.log(m5);
}
    