function displayTables(){
    let petDiv = $("#pets");
    petDiv.html("");//claer the canvas
    //travel the array
    let tmp="";
    for(let i=0;i<salon.pets.length;i++){
        let pet = salon.pets[i];
        tmp=`
        <tr class="pet">
            <h5>Name: ${pet.name} </h5>
            <p>Age: ${pet.age}</p>
            <p>Gender: ${pet.gender}</p>
            <p>Breed: ${pet.breed}</p>
            <p>Service: ${pet.service}</p>
        </tr>
            `
        petDiv.append(tmp);
    }
}