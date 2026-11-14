let intname ;
let charname ;
let floatname ;
let booleanname;
let doublename;
intname = 1 ;
charname = 'A' ;
floatname = 2.0;
doublename = 2.00;

booleanname = true ;

console.log(intname,charname,floatname , doublename, booleanname);



//QUESTION 1-20
let n = 20;
for(let i = 1 ; i<=n ; i++){
            if(i%3==0 && i%5==0){
                console.log("fizzBuzz" );
            }
            else if (i%3==0){
                console.log("Fizz" );
            }
            else if(i%5==0){
                console.log("Buzz" );
            }
            else{
                console.log(i );
            }
        }