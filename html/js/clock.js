const clock = document.querySelector("#clock");

function getClock(){
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  clock.innerText = `${hours}:${minutes}`;
}

getClock();
setInterval(getClock, 1000);