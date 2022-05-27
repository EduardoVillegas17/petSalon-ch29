let student = {
    //attr or properties
    name:"Eduardo",
    age:23,
    isActive:true,
    //function or methods
    sayHi:function(){
        return "Hello!";
    },
    hobbies:["Football","Listen music","Play Zelda"],  //Array
    address:{
        street:"Federacion Croc",
        zip:"22625",
        city:"Tijuana",
        country:"MEX"
    }
}
//display on the document
/* document.write(student.address.city,student.address.country,student.address.zip); */

//display on the console
//console.log(student.address.zip);

/* let product1={
    name:"Laptop",
    description:"HP Laptop 14'' core i7",
    price:200
}

let product2={
    name:"TV",
    description:"Sony 32'' UHD",
    price:300
}

let product3={
    name:"Phone",
    description:"Samsung s21Ultra 128gb",
    price:250
} */
/* products = [product1,product2,product3]; */
function Product(n,d,p){
    this.name=n;
    this.description=d;
    this.price=p;
}

let product1 = new Product("Speaker","Sony wireless",20.50);
let product2 = new Product("Laptop","HP",100.00);
let product3 = new Product("Tv","Samsumng",250.00);
let product4 = new Product("WebCam","Logitech",15.00);

products.push(product1,product2,product3,product4);
/* console.log(products);
console.log(product1,product2,product3); */

//products.push[product1,product2,product3];

function displayNames(){
    for(let i=0;i<products.length;i++){
        console.log(products[i].description);
    }
}

//displayNames();