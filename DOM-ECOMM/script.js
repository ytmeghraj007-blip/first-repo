const formDiv = document.querySelector(".form");
const create = document.querySelector("#create");
const closeBtn = document.querySelector(".cross");
const form = document.querySelector('form');

const productDiv = document.querySelector(".products");
const productArr = [];
let indexUpdate = null;

let ui = ()=>{
     productDiv.innerHTML = "";
    productArr.forEach((elem,index)=>{
       
        productDiv.innerHTML += `<div class="product-card">
                <div class="img">
                    <img src="${elem.imageUrl}" alt="">
                </div>
                <div class="text">
                    <h3>${elem.productName}</h3>
                    <p>${elem.description}</p>
                    <p>${elem.price}/-</p>
                </div>
                <div class="btns">
                    <button onclick="updateProduct('${elem.productName}')">Update</button>
                    <button onclick="deleteProduct(${index})">Delete</button>
                </div>
            </div>`
    });
}








create.addEventListener('click',()=>{
formDiv.style.display = "flex";
})

closeBtn.addEventListener('click',()=>{
    formDiv.style.display = "none";
})

form.addEventListener('submit',(event)=>{
    event.preventDefault() // prevent from reload
   
    // variable 
    let productName = event.target[0].value;
    let description = event.target[1].value;
    let price =       event.target[2].value;
    let imageUrl =    event.target[3].value;

        // imp conditions
    if(productName.trim() === '' || description.trim()==="" || price.trim() === '' || imageUrl.trim() === ''){
        alert("please fill all the fields")
        return;
    }
      

    let obj = {
        productName,
        description,
        price,
        imageUrl
    };
    if(indexUpdate !== null){
        productArr[indexUpdate] = obj;
        indexUpdate = null;
    }
    else{
        productArr.push(obj);
    }
    
    ui();
    formDiv.style.display = "none";
    console.log(productArr);
    form.reset();
})

const updateProduct = (name)=>{
    formDiv.style.display = "flex";
    let product = productArr.find((elem)=>elem.productName === name);
    indexUpdate = productArr.findIndex((elem)=>elem.productName === name);
    form[0].value = product.productName;
    form[1].value = product.description;
    form[2].value = product.price;
    form[3].value = product.imageUrl;
}

const deleteProduct = (index)=>{
    productArr.splice(index,1);
    ui();
}