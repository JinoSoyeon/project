const h1 = document.querySelector("h1");


function changes() {
  if(h1.style.color === "black"){
    h1.style.color = "tomato";
  }else {
    h1.style.color = "black";
  }
}

h1.addEventListener("click", changes);