const bulb = document.querySelector(".bulb");
const btn = document.querySelector("button");

let flag = true;

btn.addEventListener("click", () => {
   const val = bulb.classList.toggle("lightup");
   if(val){
    btn.textContent = "OFF";
   }
   else{
    btn.textContent = "ON";
   }
   
} );
