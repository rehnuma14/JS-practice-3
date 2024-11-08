function countVowels()
{
    let s=prompt("Enter a sentance:");
    const vowels="aeiouAEIOU";
    let VC=s.split("").reduce((count,char)=>
    {
        return vowels.includes(char)?count+1:count;
    },0);
    console.log(VC);
}
countVowels();