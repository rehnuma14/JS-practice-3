let sent=prompt("Enter your sentance:"),s=[];
function capitalizeWord()
{
   let s=sent.split(" ");
   for(let i=0;i<s.length;i++){
   s[i] = s[i].charAt(0).toUpperCase() + s[i].slice(1);
   }
   let NS=s.join(" ");
   console.log(NS);
}
capitalizeWord();