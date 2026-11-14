// let arr=[1,2,3,4,5];
// let words = ["i","am","a","sentence"];

// arr.push(10);
// console.log("length of Array" , arr.length);
// console.log("Values of Array" , arr);

// arr.pop();
// console.log("length of Array" , arr.length);
// console.log("Values of Array" , arr);


let arr2 = [5, 2, 8, 1, 3];
console.log(arr2);

for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr2.length - 1; j++) {

        if (arr2[j] > arr2[j + 1]) {
            let temp = arr2[j];
            arr2[j] = arr2[j + 1];
            arr2[j + 1] = temp;
        }

    }
}

console.log(arr2);