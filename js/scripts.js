const proxyURL = "https://cors-anywhere.herokuapp.com/";
const rootURL = "http://zelda-api.apius.cc/api/";
const arrTypes = ["Games","Staff","Characters","Monsters","Bosses","Dungeons","Places","Items"];

function populateDropDown (arrTypes) {
    dropContainer = document.getElementById("type-dropdown")
    arrTypes.forEach (dropObj => {
        const dropSelect = document.createElement("option")
        dropSelect.innerText = dropObj;
        dropContainer.append(dropSelect);
    });
}

function getResults(type,limit) {
    const builtURL = `${proxyURL}${rootURL}${type}?limit=${limit}`;
    return fetch(builtURL)
        .then(r => r.json())
        .then(r => r.data)
}

getResults("games","100").then(console.log);
populateDropDown(arrTypes);