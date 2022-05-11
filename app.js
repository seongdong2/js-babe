const h1 = document.querySelector(".hello h1");

console.dir(h1);

function handleTitleClick(){
    const currentColor = h1.style.color;
    let newColor;
    if(currentColor === "black"){
        newColor = "tomato";
    }
    else {
        newColor = "black";
    }
    h1.style.color = newColor;

}

h1.addEventListener("click", handleTitleClick);
  