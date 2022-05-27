//object literal
let salon={
    name:"the Fashon Pet",
    address:{
        street:"Federacion Croc",
        zip:"22625",
        city:"Tijuana",
        number:"332-4"
    },
    hours:{
        open:"9:00 a.m.",
        close:"5:00 p.m.",
    },
    phone:"664-285-84-40",
    pets:[]
}

/* console.log(salon.pets[0]);//Displaying scooby */

function displaySalonInfo(){
    let tmp=`
    <p>Welcome to the ${salon.name} located in ${salon.address.street}</p>
    <p> </p>`;
    document.getElementById("info").innerHTML=tmp;
}
displaySalonInfo();

function displayName(){
    for(let i=0;i<salon.pets.length;i++){
        console.log(salon.pets[i].name);
    }
}

displayName();

alert("There is "+salon.pets.length+" Registers");

function Pet(n,a,g,b,s,o,p){
    this.name=n;
    this.age=a;
    this.gender=g;
    this.breed=b;
    this.service=s;
    this.owner=o;
    this.phone=p;
}




let pet1 = new Pet("Scooby",50,"Male","Dane","Grooming","Shaggy","888-888-888");
let pet2 = new Pet("Moon",10,"Female","Poodle","Grooming","Luis","999-999-999");
let pet3 = new Pet("Rocky",32,"Male","Chihuahua","Nails Court","Juan","777-777-777");

function register(){
    console.log("Registering");
    //get the info from the inputs ***getElementById().value
    let petName=document.getElementById("txtName").value;
    let petAge=document.getElementById("txtAge").value;
    let petGender=document.getElementById("txtGender").value;
    let petBreed=document.getElementById("txtBreed").value;
    let petServices=document.getElementById("selService").value;
    let petOwner=document.getElementById("txtOwner").value;
    let petPhone=document.getElementById("txtPhone").value;
    //create the object using the constructor
    let newPet = new Pet(petName,petAge,petGender,petBreed,petServices,petOwner,petPhone);
    //push the object in on the array
    salon.pets.push(newPet);
    //display it on the console
    console.log(newPet);
    console.log(salon.pets);
    clearForm();
}

function clearForm(){
    document.getElementById("txtName").value="";
    document.getElementById("txtAge").value="";
    document.getElementById("txtGender").value="";
    document.getElementById("txtBreed").value="";
    document.getElementById("selService").value="";
    document.getElementById("txtOwner").value="";
    document.getElementById("txtPhone").value="";
}

function init(){
    //hook events, triggered events
    displayName();
    console.log(pet1,pet2,pet3);
}

window.onload=init;





/*   PETS[]
 {
    name:"Scooby",
    age:50,
    gender:"Male",
    breed:"Dane",
    service:"Grooming",
    owner:"Shaggy",
    phone:"888-888-888"
},
{
    name:"moon",
    age:10,
    gender:"Female",
    breed:"Poodle",
    service:"Grooming",
    owner:"Luis",
    phone:"999-999-999"
},
{
    name:"Rocky",
    age:32,
    gender:"Male",
    breed:"Chihuahua",
    service:"Nails court",
    owner:"Juan",
    phone:"777-777-777"
} */