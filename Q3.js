let i,a=[],n=prompt("Total elements:");
for(i=0;i<n;i++)
{
    a[i]=parseFloat(prompt(i+1));
}
console.log("Square of elements:");
let sqrs=a.map((v)=>
{
    let m;
    m=(v*v);
    console.log(m);
    return m;
})
console.log("Sum of Squares:");
function squareAndSum(s)
{
    let sum=0;
    s.forEach((e) => { sum += e;});
    return sum;
}

console.log(squareAndSum(sqrs));