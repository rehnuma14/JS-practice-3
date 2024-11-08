function findMax()
{
    let numbers=prompt("Enter a series of numbers(,):");
    let n=numbers.split(",").map(Number);
    let mn=n.reduce((max,current)=>
        {
            return current>max?current:max;
        },n[0]);
        console.log(mn);
}
findMax();