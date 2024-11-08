let n=prompt("Total elements:"),a=[],i;
for(i=0;i<n;i++)
{
    a[i]=parseFloat(prompt(i+1));
}
function filterPrimes(p) 
{
     return p.filter((num) => 
        {
             if (num <= 1)
                 return false; 
                else{
for (let i = 2; i <= Math.sqrt(num); i++)
     {
         if (num % i === 0)
             return false; 
    } return true;}
        }
    );
 } 
 console.log( filterPrimes(a));


