// localStorage.setItem('name','Nitin gadkari');
// let lsd = localStorage.getItem("name");
// console.log(lsd); // Nitin gadkari

let data = [
    {
        name : "piyush",
        age : 79,
        address : "saket nagar"
    },
    {
        name : "ansh",
        age : 23,
        address : "allahbaad bank"
    },
    {
        name : "meghraj",
        age : 20,
        address : "saikheda"
    }

]

localStorage.setItem("users",JSON.stringify(data));
let lsd = localStorage.getItem("users");
let value = JSON.parse(lsd);
console.log(value);
// result
// 0: {name: 'piyush', age: 79, address: 'saket nagar'}
// 1: {name: 'ansh', age: 23, address: 'allahbaad bank'}
// 2: {name: 'meghraj', age: 20, address: 'saikheda'}]