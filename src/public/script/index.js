getdevices();
const handlegetdevices = (res) => {

    document.getElementById("devicetable").innerHTML = "";


    const newObject = document.createElement("tr");
    const newName = document.createElement("th");
    const newTime = document.createElement("th");
    const newUID = document.createElement("th");
    newName.innerHTML = `Name`;
    newUID.innerHTML = `UID`;
    newTime.innerHTML = `Date and Time`;
    newObject.appendChild(newName);
    newObject.appendChild(newTime);
    newObject.appendChild(newUID);
    document.getElementById("devicetable").append(newObject);



    const response = JSON.parse(res);
    console.log(response);
    response.data.forEach(item => {
        console.log(item.name)
        const newDiv = document.createElement("tr");
        const newName = document.createElement("td");
        const newUUID = document.createElement("td");
        const newType = document.createElement("td");
        newName.innerHTML = `${item.name}`;
        newUUID.innerHTML = `${item.uid}`;
        newType.innerHTML = `${item.typename}`;

        newDiv.appendChild(newName);
        newDiv.appendChild(newUUID);
        newDiv.appendChild(newType);
        document.getElementById("devicetable").appendChild(newDiv);
       
    });

    console.log("executed");
}



