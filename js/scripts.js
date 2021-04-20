const proxyURL = "https://cors-anywhere.herokuapp.com/";
const rootURL = "http://zelda-api.apius.cc/api/";
const arrTypes = ["Games","Staff","Characters","Monsters","Bosses","Dungeons","Places","Items"];
document.getElementById("results").addEventListener("click",getGroup)

function getGroup(e) {
    const selectedGroup = document.getElementById("type-dropdown").value;
    console.log(selectedGroup);
//    getResults(selectedGroup,"100").then(console.log)
}

function populateDropDown (arrTypes) {
    dropContainer = document.getElementById("type-dropdown")
    arrTypes.forEach (dropObj => {
        const dropSelect = document.createElement("option")
        dropSelect.innerText = dropObj;
        dropSelect.value = dropObj;
        dropContainer.append(dropSelect);
    });
    console.log(dropContainer);
}

function getResults(type,limit) {
    const builtURL = `${proxyURL}${rootURL}${type}?limit=${limit}`;
    return fetch(builtURL)
        .then(r => r.json())
        .then(r => r.data)
}

//getResults("games","100").then(console.log);
populateDropDown(arrTypes);