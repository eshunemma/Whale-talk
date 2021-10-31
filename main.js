const input = 'a whale of a deal!';
const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = [];

//loop to iterate through each letter of input
for (let i = 0; i < input.length; i++){
  //console.log(`inputIdex = ${i}`);
   for (let j = 0; j < vowels.length; j++){
     //console.log(`vowel = ${j}`)
     if (input[i] === vowels[j]){
       if (input[i] === 'e'){
         resultArray.push('ee');
       }
       else if (input[i] === 'u'){
         resultArray.push('uu');
       }
       else {
         resultArray.push(input[i]);
       }
     }
  }
}
//print AAEEOAEEA
console.log(resultArray.join("").toUpperCase());