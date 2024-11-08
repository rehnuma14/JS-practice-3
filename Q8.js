function anyNegative()
{
    let numbers=prompt("Enter a series of numbers(,):");
    let n=numbers.split(",").map(Number);
    let nn=n.some(num=>num<0);
    console.log(nn);
}
anyNegative();