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
    pets:[
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
        }
    ]
}

console.log(salon.pets[0]);//Displaying scooby

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