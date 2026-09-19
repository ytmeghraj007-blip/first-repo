const main = document.querySelector("main");
const box = document.querySelector(".box2");
const btn = document.querySelector(".btn1");
const timer = document.querySelector("#timer");
const score = document.querySelector("#score")
const parent = document.querySelector(".box1");
const overlay = document.querySelector(".overlay");
const final = document.querySelector("#final");

const color = ()=>{
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`;
    
}
let interval;
let timeout ;
let time = 0;
let scoree = 0;
const position = ()=>{
    box.style.backgroundColor = color();
   
    let mainH = parent.clientHeight - box.offsetHeight;
  let mainW = parent.clientWidth - box.offsetWidth;  

  const rY = Math.random() * mainH;
  const rX = Math.random() * mainW;

    box.style.top = `${rY}px`;
    box.style.left = `${rX}px`;
}
btn.addEventListener('click',()=>{
   
clearInterval(interval);


interval = setInterval(() => {
    time += 1;
    position();
    timer.textContent = time;
},1000);

timeout = setTimeout(() => {
    clearInterval(interval);
    overlay.style.display = "flex";
    setInterval(() => {
        overlay.style.display = "none";
    }, 1000);
    final.innerHTML = scoree;
}, 5000);

});

box.addEventListener('click',()=>{

    scoree += 1;
    setInterval(() => {
        scoree = scoree;
    }, 1000);
    score.textContent = scoree;
})