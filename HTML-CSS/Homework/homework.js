
let input = document.querySelector("#taskInput");
let button = document.querySelector("#addBtn");
let list = document.querySelector("#taskList");

button.addEventListener("click", function () {

    let task = input.value;

    if (task.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.textContent = task;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(deleteBtn);
    list.appendChild(li);

    input.value = "";
});
