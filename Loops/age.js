  let rlSync = require('readline-sync');

let age = Number(rlSync.question('How old are you? '));
console.log(`You are ${age} years old.`);

for (let addedAge = 10; addedAge <= 40; addedAge += 10){
  console.log(`In ${addedAge} years, you will be ${age + addedAge} years old.`);
}


