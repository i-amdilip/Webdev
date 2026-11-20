let box = document.getElementById("btn-event-helper");
        let btn = document.getElementById("btn-events");

        btn.addEventListener("click", function() {
            box.style.backgroundColor = "lightcyan";
        });

        btn.addEventListener("mouseover", function() {
            box.style.backgroundColor = "lightblue";
        });

        btn.addEventListener("mouseleave", function() {
            box.style.backgroundColor = "transparent";
        });

        btn.addEventListener("dblclick", function() {
            box.style.backgroundColor = "lightgreen";
        });

        btn.addEventListener("contextmenu",function(e) {
            e.preventDefault();
            box.style.backgroundColor = "yellow";

        })

    let input = document.querySelector("input");
    let str ="";
    input.addEventListener("keydown",function(e){
        console.log("event object" , e.key);
        let p = document.querySelector("p");
        str = str+e.key ;
        p.textContent = str;
    })