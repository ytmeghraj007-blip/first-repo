const main = document.querySelector("main");
const box = document.querySelector(".box2");
const btn = document.querySelector(".btn1");
const timer = document.querySelector("#timer");
const score = document.querySelector("#score")

const color = ()=>{
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`;
    
}

let time = 0;
const position = ()=>{
    box.style.backgroundColor = color();
    const rH = Math.floor(Math.random()*100);
   const rW = Math.floor(Math.random()*100);

    box.style.top = `${rH}%`;
    box.style.left = `${rW}%`;
}
btn.addEventListener('click',()=>{
   
position();

setInterval(() => {
    time += 1;
    timer.textContent = time;
},1000);

});

