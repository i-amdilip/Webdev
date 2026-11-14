let query = prompt("Enter a Sentence :");
console.log("Query:", query);
let trimmedQuery = query.trim();
console.log("Trimmed Query:", trimmedQuery);
let wordsArray = trimmedQuery.split(" ");
console.log("Split Query:", wordsArray);

let outcome =wordsArray.join("+");
console.log("Outcome:", outcome);