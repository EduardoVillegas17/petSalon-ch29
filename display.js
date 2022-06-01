function displayTables(){
    let petDiv = $("#pets");
    petDiv.html("");//claer the canvas
    //travel the array
    document.getElementById("pets").innerHTML=
    `
        <tr class="pet">
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Breed</th>
            <th>Service</th>
            <th>Owner</th>
            <th>Phone number</th>
        </tr>
    `
    let tmp="";
    for(let i=0;i<salon.pets.length;i++){
        let pet = salon.pets[i];
        tr=`
        <tr class="pet">
            <td>Name: ${pet.name} </td>
            <td>Age: ${pet.age}</td>
            <td>Gender: ${pet.gender}</td>
            <td>Breed: ${pet.breed}</td>
            <td>Service: ${pet.service}</td>
        </tr>
            `;
        petDiv.append(tr);//adding to the HTML
    }
}

