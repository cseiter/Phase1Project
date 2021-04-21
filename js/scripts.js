const proxyURL = "https://cors-anywhere.herokuapp.com/";
const rootURL = "http://zelda-api.apius.cc/api/";
const arrTypes = ["Games","Staff","Characters","Monsters","Bosses","Dungeons","Places","Items"];

const testItemGames = {
    "_id": "5f6ce9d805615a85623ec2b7",
    "name": "The Legend of Zelda",
    "description": "The Legend of Zelda is the first...",
    "developer": "Nintendo R&D 4",
    "publisher": "Nintendo",
    "released_date": " February 21, 1986",
    "__v": 0
}

function populateDropDown (arrTypes) {
    dropContainer = document.getElementById("type-dropdown");
    arrTypes.forEach (dropObj => {
        const dropSelect = document.createElement("option");
        dropSelect.innerText = dropObj;
        dropSelect.value = dropObj;
        dropContainer.append(dropSelect);
    });
}

populateDropDown(arrTypes);

document.getElementById("btnResults").addEventListener("click",getGroup);

function getGroup(e) {
    const selectedGroup = (document.getElementById("type-dropdown").value).toLowerCase();
    getResults(selectedGroup,100).then(console.log);
}

function getResults(type,limit) {
    const builtURL = `${proxyURL}${rootURL}${type}?limit=${limit}`;
    return fetch(builtURL)
        .then(r => r.json())
        .then(r => r.data)
}

/* <table>
            <thead i>
                <tr id="table-header">
                </tr>
            </thead>
            <tbody id="table-results">
            </tbody>
    </table> */

function createGamesTableHeaders() {
    const gamesHeaders = ["name","released_date","publisher","developer","description"];
    trHeader = document.createElement("tr");
    gamesHeaders.forEach(headerObj => {
        const th = document.createElement("th");
        th.innerText = headerObj;
        trHeader.append(th);
    });
    return trHeader;
}

function createGamesTableBody(itemObj) {
    trBody = document.createElement("tr");
    const tdName = document.createElement("td");
    const tdDate = document.createElement("td");
    const tdPub = document.createElement("td");
    const tdDev = document.createElement("td");
    const tdDesc = document.createElement("td");
    tdName.innerText = itemObj.name;
    tdDate.innerText = itemObj.released_date;
    tdPub.innerText = itemObj.publisher;
    tdDev.innerText = itemObj.developer;
    tdDesc.innerText = itemObj.description;
    trBody.append(tdName,tdDate,tdPub,tdDev,tdDesc);
    return trBody;
}

createGamesTableHeaders();
createGamesTableBody(testItemGames);

console.log(trHeader);
console.log(trBody);