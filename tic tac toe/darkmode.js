let btn = document.querySelector(".btnclass");
let body = document.querySelector("body");
let currMode = "light";
let hoverCount = 0;
const Mode = () => {
    if (currMode === "light"){
        currMode = "dark";
        body.classList.remove("light");
        body.classList.add("dark");
         }
    else { currMode = "light";
        body.classList.remove("dark");
        body.classList.add("light");
        }
        console.log(currMode);
        hoverCount++;
        if (hoverCount === 20) {
            alert("Voila! You've hovered over the button 20 times.");
            hoverCount = 0;
    }}
btn.addEventListener("mouseover", Mode);