let userInput =prompt("Enter a number :");
for(let i=1; i<=userInput; i++){
    let row = "";
    for(let j=1; j<=i; j++){
       row += j;
    }
    console.log(row);
}