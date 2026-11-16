let elem= document.querySelector("#info");
console.log("info" , elem.textContent);

let elemArr = document.querySelectorAll("#info");
let secElement = elemArr[1];
console.log("info" , secElement.textContent);


let greetingElem = document.getElementById("info");
greetingElem.textContent = "Changed by id";
let notesArr = document.getElementsByClassName("note");
console.log("````````````````````````````");
for(let i = 0 ; i<notesArr.length ; i++){
    console.log("notes" , notesArr[i].textContent);
}