let cap = {
    firstName : "Steve",
    LastName : "Rogers",
    WasAvenger : true,
    address:{
        country:"US",
        state : "NY",
        city : "Leahman"
    },
    enemies: ["Hydra" , "Loki" , "Thanos" , "Ultron" , "Dr Doom"],
    greet : function () {
        console.log("Cap say's : I can do this all Day ! ");
    }
}

console.log("City : " , cap.address.city);
console.log("Last Enemy  : " , cap.enemies[cap.enemies.length-1]);
cap.greet();