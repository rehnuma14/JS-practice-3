function sumArray(arr)
 {
     let sum = 0;
     arr.forEach(function(e) 
     { sum += e;});
      return sum;
 }
 let n = prompt("Total Elements:");
 let a = []; 
 for (let i = 0; i < n; i++) 
    { a[i] = parseInt(prompt(i + 1));} 
  console.log(sumArray(a));