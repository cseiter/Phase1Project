const proxyURL = "https://cors-anywhere.herokuapp.com/";
const rootURL = "http://zelda-api.apius.cc/api/";
const arrTypes = ["Games","Staff","Characters","Monsters","Bosses","Dungeons","Places","Items"];

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

function displayLoading() {
    const loaderDiv = document.getElementById("loading");
    const loadingGif = document.getElementById("loading-gif");
    imgPicker = Math.floor((Math.random() * 6) + 1);
    loadingGif.src = `./images/${imgPicker}.gif`
    loaderDiv.style.display = "block";
}

function hideLoading() {
    const loaderDiv = document.getElementById("loading");
    loaderDiv.style.display = "none";
}

function showError() {
    const loaderDiv = document.getElementById("loading");
    const loadingGif = document.getElementById("loading-gif");
    loaderDiv.innerHTML = "<h3>I'm sorry, something went wrong.  Please try again.</h3><br><img src=./images/Error.png>"
    loaderDiv.style.display = "block";
}


function getGroup(e) {
    const selectedGroup = (document.getElementById("type-dropdown").value).toLowerCase();
    document.getElementById("table-header").innerText = ""
    document.getElementById("table-results").innerText = ""
    if(selectedGroup == "games") {
        getResults(selectedGroup,100).then(showGamesTable);
    }
    else if (selectedGroup == "characters") {
        getResults(selectedGroup,100).then(showCharactersTable);
    }
    else if (selectedGroup == "staff") {
        getResults(selectedGroup,100).then(showStaffTable);
    }
    else if (selectedGroup == "monsters") {
        getResults(selectedGroup,100).then(showMonstersTable);
    }
    else if (selectedGroup == "bosses") {
        getResults(selectedGroup,100).then(showBossesTable);
    }
    else if (selectedGroup == "dungeons") {
        getResults(selectedGroup,100).then(showDungeonsTable);
    }
    else if (selectedGroup == "places") {
        getResults(selectedGroup,100).then(showPlacesTable);
    }
    else if (selectedGroup == "items") {
        getResults(selectedGroup,100).then(showItemsTable);
    }
    else {console.log("no search")}
}

function getResults(type,limit) {
    const builtURL = `${proxyURL}${rootURL}${type}?limit=${limit}`;
    displayLoading();
    return fetch(builtURL)
        .then(r => r.json())
        .then(r => r.data)
}

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
    tdName.className = "oneLine";
    tdDate.innerText = itemObj.released_date;
    tdDate.className = "oneLine";
    tdPub.innerText = itemObj.publisher;
    tdPub.className = "oneLine";
    tdDev.innerText = itemObj.developer;
    tdDev.className = "oneLine";
    tdDesc.innerText = itemObj.description;
    trBody.append(tdName,tdDate,tdPub,tdDev,tdDesc);
    return trBody;
}

function showGamesTable(ArrayGames) {
    hideLoading();
    createGamesTableHeaders();
    createGamesTableBody(ArrayGames);
    const TableHeaderContainer = document.getElementById("table-header");
    TableHeaderContainer.appendChild(trHeader);
    const tableBodyContainer = document.getElementById("table-results");
    ArrayGames.forEach(itemObj => {
        const itemTable = createGamesTableBody(itemObj);
        tableBodyContainer.appendChild(itemTable);
    });
}

function createCharactersTableHeaders() {
    const charactersHeaders = ["name","appearances","gender","race","description"];
    trHeader = document.createElement("tr");
    charactersHeaders.forEach(headerObj => {
        const th = document.createElement("th");
        th.innerText = headerObj;
        trHeader.append(th);
    });
    return trHeader;
}

function createCharactersTableBody(itemObj) {
    trBody = document.createElement("tr");
    const tdName = document.createElement("td");
    const tdAppearances = document.createElement("td");
    const tdGender = document.createElement("td");
    const tdRace = document.createElement("td");
    const tdDesc = document.createElement("td");
    tdName.innerText = itemObj.name;
    tdName.className = "oneLine";
    tdAppearances.innerText = itemObj.appearances;
    tdGender.innerText = itemObj.gender;
    tdGender.className = "oneLine";
    tdRace.innerText = itemObj.race;
    tdRace.className = "oneLine";
    tdDesc.innerText = itemObj.description;
    trBody.append(tdName,tdAppearances,tdGender,tdRace,tdDesc);
    return trBody;
}

function showCharactersTable(ArrayCharacters) {
    hideLoading();
    createCharactersTableHeaders();
    createCharactersTableBody(ArrayCharacters);
    const TableHeaderContainer = document.getElementById("table-header");
    TableHeaderContainer.appendChild(trHeader);
    const tableBodyContainer = document.getElementById("table-results");
    ArrayCharacters.forEach(itemObj => {
        const itemTable = createCharactersTableBody(itemObj);
        tableBodyContainer.appendChild(itemTable);
    });
}

function createStaffTableHeaders() {
    const staffHeaders = ["name","worked_on"];
    trHeader = document.createElement("tr");
    staffHeaders.forEach(headerObj => {
        const th = document.createElement("th");
        th.innerText = headerObj;
        trHeader.append(th);
    });
    return trHeader;
}

function createStaffTableBody(itemObj) {
    trBody = document.createElement("tr");
    const tdName = document.createElement("td");
    const tdWorked = document.createElement("td");
    tdName.innerText = itemObj.name;
    tdName.className = "oneLine";
    tdWorked.innerText = itemObj.worked_on;
    trBody.append(tdName,tdWorked);
    return trBody;
}

function showStaffTable(arrayStaff) {
    hideLoading();
    createStaffTableHeaders();
    createStaffTableBody(arrayStaff);
    const TableHeaderContainer = document.getElementById("table-header");
    TableHeaderContainer.appendChild(trHeader);
    const tableBodyContainer = document.getElementById("table-results");
    arrayStaff.forEach(itemObj => {
        const itemTable = createStaffTableBody(itemObj);
        tableBodyContainer.appendChild(itemTable);
    });
}

function createMonstersTableHeaders() {
    const monsterHeaders = ["name","appearances","description"];
    trHeader = document.createElement("tr");
    monsterHeaders.forEach(headerObj => {
        const th = document.createElement("th");
        th.innerText = headerObj;
        trHeader.append(th);
    });
    return trHeader;
}

function createMonstersTableBody(itemObj) {
    trBody = document.createElement("tr");
    const tdName = document.createElement("td");
    const tdAppearances = document.createElement("td");
    const tdDescription = document.createElement("td");
    tdName.innerText = itemObj.name;
    tdName.className = "oneLine";
    tdAppearances.innerText = itemObj.appearances;
    tdDescription.innerText = itemObj.description;
    trBody.append(tdName,tdAppearances,tdDescription);
    return trBody;
}

function showMonstersTable(arrayMonsters) {
    hideLoading();
    createMonstersTableHeaders();
    createMonstersTableBody(arrayMonsters);
    const TableHeaderContainer = document.getElementById("table-header");
    TableHeaderContainer.appendChild(trHeader);
    const tableBodyContainer = document.getElementById("table-results");
    arrayMonsters.forEach(itemObj => {
        const itemTable = createMonstersTableBody(itemObj);
        tableBodyContainer.appendChild(itemTable);
    });
}

function createBossesTableHeaders() {
    const bossesHeaders = ["name","appearances","dungeons","description"];
    trHeader = document.createElement("tr");
    bossesHeaders.forEach(headerObj => {
        const th = document.createElement("th");
        th.innerText = headerObj;
        trHeader.append(th);
    });
    return trHeader;
}

function createBossesTableBody(itemObj) {
    trBody = document.createElement("tr");
    const tdName = document.createElement("td");
    const tdAppearances = document.createElement("td");
    const tdDescription = document.createElement("td");
    const tdDungeons = document.createElement("td");
    tdName.innerText = itemObj.name;
    tdName.className = "oneLine";
    tdAppearances.innerText = itemObj.appearances;
    tdDungeons.innerText = itemObj.dungeons;
    tdDescription.innerText = itemObj.description;
    trBody.append(tdName,tdAppearances,tdDungeons,tdDescription);
    return trBody;
}

function showBossesTable(arrayBosses) {
    hideLoading();
    createBossesTableHeaders();
    createBossesTableBody(arrayBosses);
    const TableHeaderContainer = document.getElementById("table-header");
    TableHeaderContainer.appendChild(trHeader);
    const tableBodyContainer = document.getElementById("table-results");
    arrayBosses.forEach(itemObj => {
        const itemTable = createBossesTableBody(itemObj);
        tableBodyContainer.appendChild(itemTable);
    });
}

function createDungeonsTableHeaders() {
    const DungeonsHeaders = ["name","appearances","description"];
    trHeader = document.createElement("tr");
    DungeonsHeaders.forEach(headerObj => {
        const th = document.createElement("th");
        th.innerText = headerObj;
        trHeader.append(th);
    });
    return trHeader;
}

function createDungeonsTableBody(itemObj) {
    trBody = document.createElement("tr");
    const tdName = document.createElement("td");
    const tdAppearances = document.createElement("td");
    const tdDescription = document.createElement("td");
    tdName.innerText = itemObj.name;
    tdName.className = "oneLine";
    tdAppearances.innerText = itemObj.appearances;
    tdDescription.innerText = itemObj.description;
    trBody.append(tdName,tdAppearances,tdDescription);
    return trBody;
}

function showDungeonsTable(arrayDungeons) {
    hideLoading();
    createDungeonsTableHeaders();
    createDungeonsTableBody(arrayDungeons);
    const TableHeaderContainer = document.getElementById("table-header");
    TableHeaderContainer.appendChild(trHeader);
    const tableBodyContainer = document.getElementById("table-results");
    arrayDungeons.forEach(itemObj => {
        const itemTable = createDungeonsTableBody(itemObj);
        tableBodyContainer.appendChild(itemTable);
    });
}

function createPlacesTableHeaders() {
    const PlacesHeaders = ["name","appearances","inhabitants","description"];
    trHeader = document.createElement("tr");
    PlacesHeaders.forEach(headerObj => {
        const th = document.createElement("th");
        th.innerText = headerObj;
        trHeader.append(th);
    });
    return trHeader;
}

function createPlacesTableBody(itemObj) {
    trBody = document.createElement("tr");
    const tdName = document.createElement("td");
    const tdAppearances = document.createElement("td");
    const tdInhabitants = document.createElement("td");
    const tdDescription = document.createElement("td");
    tdName.innerText = itemObj.name;
    tdName.className = "oneLine";
    tdAppearances.innerText = itemObj.appearances;
    tdInhabitants.innerText = itemObj.inhabitants;
    tdDescription.innerText = itemObj.description;
    trBody.append(tdName,tdAppearances,tdInhabitants,tdDescription);
    return trBody;
}

function showPlacesTable(arrayPlaces) {
    hideLoading();
    createPlacesTableHeaders();
    createPlacesTableBody(arrayPlaces);
    const TableHeaderContainer = document.getElementById("table-header");
    TableHeaderContainer.appendChild(trHeader);
    const tableBodyContainer = document.getElementById("table-results");
    arrayPlaces.forEach(itemObj => {
        const itemTable = createPlacesTableBody(itemObj);
        tableBodyContainer.appendChild(itemTable);
    });
}

function createItemsTableHeaders() {
    const ItemsHeaders = ["name","games","description"];
    trHeader = document.createElement("tr");
    ItemsHeaders.forEach(headerObj => {
        const th = document.createElement("th");
        th.innerText = headerObj;
        trHeader.append(th);
    });
    return trHeader;
}

function createItemsTableBody(itemObj) {
    trBody = document.createElement("tr");
    const tdName = document.createElement("td");
    const tdGames = document.createElement("td");
    const tdDescription = document.createElement("td");
    tdName.innerText = itemObj.name;
    tdName.className = "oneLine";
    tdGames.innerText = itemObj.games;
    tdDescription.innerText = itemObj.description;
    trBody.append(tdName,tdGames,tdDescription);
    return trBody;
}

function showItemsTable(arrayItems) {
    hideLoading();
    createItemsTableHeaders();
    createItemsTableBody(arrayItems);
    const TableHeaderContainer = document.getElementById("table-header");
    TableHeaderContainer.appendChild(trHeader);
    const tableBodyContainer = document.getElementById("table-results");
    arrayItems.forEach(itemObj => {
        const itemTable = createItemsTableBody(itemObj);
        tableBodyContainer.appendChild(itemTable);
    });
}