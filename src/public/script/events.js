gettype();
const handlegettype = (res) => {
    document.getElementById("selecttype").innerHTML = "";
    const response = JSON.parse(res);
    console.log(response);
    response.data.forEach(item => {
        const newOption = document.createElement("option");
        newOption.innerHTML = `${item.name}`;
        newOption.value = `${item.ID}`;
        document.getElementById("selecttype").appendChild(newOption);

    });
}

const handlegetevents = (res) => {
    document.getElementById("eventtable").innerHTML = "";

    const newObject = document.createElement("tr");
    const newName = document.createElement("th");
    const newTime = document.createElement("th");
    const newValue = document.createElement("th");
    newName.innerHTML = `Name`;
    newValue.innerHTML = `Value`;
    newTime.innerHTML = `Date and Time`;
    newObject.appendChild(newName);
    newObject.appendChild(newTime);
    newObject.appendChild(newValue);
    document.getElementById("eventtable").append(newObject);

    const response = JSON.parse(res);
    console.log(response);
    response.data.forEach(item => {
        const newObject = document.createElement("tr");
        const newName = document.createElement("td");
        const newTime = document.createElement("td");
        const newValue = document.createElement("td");
        newName.innerHTML = `${item.devicename}`;
        newTime.innerHTML = `${item.dateadded}`;
        newValue.innerHTML = `${item.value}`;
        newObject.appendChild(newName);
        newObject.appendChild(newTime);
        newObject.appendChild(newValue);
        document.getElementById("eventtable").append(newObject);

    });

}


document.getElementById("eventtype").addEventListener("submit", (e) => {
    e.preventDefault();
    var type = document.getElementById("selecttype");
    var typevalue = type.options[type.selectedIndex].value;
    getevents(typevalue);
})




