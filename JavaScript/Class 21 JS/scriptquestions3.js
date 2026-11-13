let query = prompt("Enter a Sentence :");
console.log("Query:", query);

let wordsArray = query.split(" ");
console.log("Split Query:", wordsArray);

for(let i = 0 ; i < wordsArray.length; i++){
    wordsArray[i] = wordsArray[i].charAt(0).toUpperCase() + wordsArray[i].slice(1);
}
let result = wordsArray.join(" ");
console.log("Outcome:", result);