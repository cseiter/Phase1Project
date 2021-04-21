const proxyURL = "https://cors-anywhere.herokuapp.com/";
const rootURL = "http://zelda-api.apius.cc/api/";
const arrTypes = ["Games","Staff","Characters","Monsters","Bosses","Dungeons","Places","Items"];
const testResults = {
    "success": true,
    "count": 2,
    "data": [
        {
            "appearances": [],
            "_id": "5f6e9a9efee1a5347127ca47",
            "games": [],
            "name": "Hookshot",
            "description": "Hookshots ,, also known as Hook Shots, are Items in...",
            "__v": 0
        },
        {
            "appearances": [],
            "_id": "5f6e9a9efee1a5347127ca7d",
            "games": [],
            "name": "Nice Hookshot",
            "description": "The Nice Hookshot is an item in A Link Between Worlds",
            "__v": 0
        }
    ]
}

function populateDropDown (arrTypes) {
    dropContainer = document.getElementById("type-dropdown")
    arrTypes.forEach (dropObj => {
        const dropSelect = document.createElement("option")
        dropSelect.innerText = dropObj;
        dropSelect.value = dropObj;
        dropContainer.append(dropSelect);
    });
}

populateDropDown(arrTypes);

document.getElementById("btnResults").addEventListener("click",getGroup)

function getGroup(e) {
    const selectedGroup = (document.getElementById("type-dropdown").value).toLowerCase();
//    getResults(selectedGroup,"100").then(console.log);
}

function getResults(type,limit) {
    const builtURL = `${proxyURL}${rootURL}${type}?limit=${limit}`;
    return fetch(builtURL)
        .then(r => r.json())
        .then(r => r.data)
}

{/* <table>
            <thead>
                <tr id="table-header">
                </tr>
            </thead>
            <tbody id="table-results">
            </tbody>
    </table> */}

function createResultsTable(testResults) {
    const headerTitle = document.getElementById("table-header")
    const resultsHeaders = Object.keys(testResults.data[0]);
    resultsHeaders.forEach (searchHeaderObj => {
        const th = document.createElement("th")
        th.innerText = searchHeaderObj
        headerTitle.appendChild(th);
    });
}

console.log(Object.keys(testResults.data[0]));
createResultsTable(testResults);