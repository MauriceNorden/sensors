getdevices();


const changethisrange = (deviceid, value) => {


}

const handlerange = async (deviceid) => {

    const response = JSON.parse( await getrange(deviceid));


    console.log(response);

    if(response.status == "ok"){
        const slider =  document.createElement("input");
        const apply = document.createElement("button");
        const min = document.createElement("p");
        const max = document.createElement("p");
        const current = document.createElement("p");
        apply.innerHTML = "Apply";
        apply.onclick = () => {changethisrange(deviceid, slider.value)};
        slider.type = "range";
        min.innerHTML= `Minimal value: ${response.data.lowvalue}`
        slider.min = response.data.lowvalue;
        max.innerHTML =`Maximun value: ${response.data.highvalue}`;
        slider.max = response.data.highvalue;
        slider.value = response.data.lowvalue;
        slider.oninput = () => {current.innerHTML = `current value: ${slider.value}`};
        document.getElementById("customize").appendChild(slider);
        document.getElementById("customize").appendChild(apply);
        document.getElementById("customize").appendChild(min);
        document.getElementById("customize").appendChild(max);
        document.getElementById("customize").appendChild(current);
        
    }



}
const handlegetdevices = (res) => {

    document.getElementById("devicetable").innerHTML = "";


    const newObject = document.createElement("tr");
    const newName = document.createElement("th");
    const newTime = document.createElement("th");
    const newUID = document.createElement("th");
    const newButton = document.createElement("th");

    newName.innerHTML = `Name`;
    newUID.innerHTML = `UID`;
    newTime.innerHTML = `Date and Time`;
    newButton.innerHTML = `Action`;
    newObject.appendChild(newName);
    newObject.appendChild(newTime);
    newObject.appendChild(newUID);
    newObject.appendChild(newButton);
    document.getElementById("devicetable").append(newObject);

    const response = JSON.parse(res);
    console.log(response);
    response.data.forEach(item => {
        console.log(item.name)
        const newDiv = document.createElement("tr");
        const newName = document.createElement("td");
        const newUUID = document.createElement("td");
        const newType = document.createElement("td");
        const newButton = document.createElement("button");
        newName.innerHTML = `${item.name}`;
        newUUID.innerHTML = `${item.uid}`;
        newType.innerHTML = `${item.typename}`;
        newButton.innerHTML = `View`;
        newButton.onclick = () => {handlerange(item.ID)};
        newDiv.appendChild(newName);
        newDiv.appendChild(newUUID);
        newDiv.appendChild(newType);
        newDiv.appendChild(newButton);
        document.getElementById("devicetable").appendChild(newDiv);
       
    });

}



