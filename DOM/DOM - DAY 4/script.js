// const btn = document.querySelector("button");
// const main = document.querySelector("main")
// const div = document.querySelector("div");
// const doc = document.body;
// btn.addEventListener("click",(event)=>{
//     console.log("button");
// },true);
// div.addEventListener("click",(event)=>{
//     console.log("div");
// },true);
// doc.addEventListener("click",(event)=>{
//     console.log("doctype");
// },true);


const form = document.querySelector("form");
const inp1 = document.querySelector("#name")
const inp2 = document.querySelector("#email");
const users = document.querySelector(".user")
const url = document.querySelector("#url")

let default_users = [
    {
        name: "Rahul Sharma",
        email: "rahul@gmail.com",
        image: "https://i.pravatar.cc/150?img=12"
    },
    {
        name: "Priya Singh",
        email: "priya@gmail.com",
        image: "https://i.pravatar.cc/150?img=47"
    },
    {
        name: "Aman Verma",
        email: "aman@gmail.com",
        image: "https://i.pravatar.cc/150?img=33"
    },
    {
        name: "Neha Patel",
        email: "neha@gmail.com",
        image: "https://i.pravatar.cc/150?img=45"
    },
    {
        name: "Rohit Kumar",
        email: "rohit@gmail.com",
        image: "https://i.pravatar.cc/150?img=68"
    }
];


  const ui = ()=>{
    users.innerHTML = "";
  default_users.forEach((elem,index)=>{
 
  users.innerHTML += ` <div class="user_card">
     <div class="img_box">
      <img src=${elem.image} alt="image not found">
     </div>
     <h3>Name: ${elem.name}</h3>
     <h3>email : ${elem.email}</h3>
     <div class="action">
       <button class = "edit">edit</button>
      <button  onclick="remove(${index})" class = "delete">delete</button>
    
     </div>
    </div> `
});
}
ui();

form.addEventListener("submit",(events)=>{
  
  events.preventDefault();
 
  default_users.length = 0;
  let name = inp1.value;
  let email = inp2.value;
  let link = url.value;
  

  if((name.trim() === "") || (email.trim() === "" )|| (link.trim() === "")) return ;
   
  default_users.push({
    name : name,
    email : email,
    image : link
  })
  ui();
 form.reset();
})

let remove = (index)=>{
      default_users.splice(index,1);
      ui();
}