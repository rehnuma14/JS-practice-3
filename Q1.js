function reverseWord(sent)
{ 
     sent = sent.split(" "); //space to not break the words
     sent.reverse(); 
     let rs = sent.join(" ");
    console.log(rs);
 }
 reverseWord(s=prompt("Enter your sentence:"));