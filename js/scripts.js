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

const testArrayGames = [
    {"_id":"5f6ce9d805615a85623ec2b7",
    "name":"The Legend of Zelda",
    "description":"The Legend of Zelda is the first installment of the Zelda series. It centers its plot around a boy named Link, who becomes the central protagonist throughout the series. It came out as early as 1986 for the Famicom in Japan, and was later released in the western world, including Europe and the US in 1987. It has since then been re-released several times, for the Nintendo GameCube as well as the Game Boy Advance. The Japanese version of the game on the Famicom is known as The Hyrule Fantasy: The Legend of Zelda.\n",
    "developer":"Nintendo R&D 4",
    "publisher":"Nintendo",
    "released_date":" February 21, 1986",
    "__v":0},
    {"_id":"5f6ce9d805615a85623ec2b8",
    "name":"The Legend of Zelda: A Link to the Past",
    "description":"One day, a band of evil thieves managed to open the gateway to the Sacred Realm, where the mystical Triforce was hidden. Upon finding the sacred golden relic, the leader of the thieves, Ganondorf, slew his followers and claimed it as his own. Before long, dark power began to flow forth from the Sacred Realm. People were drawn into this darkness, and never heard from again. As a result, the King of Hyrule ordered the seven sages to seal the entrance to the Sacred Realm. A great battle ensued—monsters poured into the Light World from the sacred land and attacked the castle. The Knights of Hyrule defended the sages during the great battle against evil, and, though most of them perished in the struggle, the sages were able to cast their seal, stopping the flow of darkness and trapping the evil king Ganon within. This battle became known as the Imprisoning War.\n",
    "developer":"Nintendo",
    "publisher":"Nintendo",
    "released_date":" April 13, 1992",
    "__v":0},
    {"_id":"5f6ce9d805615a85623ec2ba",
    "name":"The Legend of Zelda: Ocarina of Time",
    "description":"The Legend of Zelda: Ocarina of Time is the fifth main installment of The Legend of Zelda series and the first to be released for the Nintendo 64. It was one of the most highly anticipated games of its age. It is listed among the greatest video games ever created by numerous websites and magazines. Released in the United States on November 23, 1998, it was the first game in The Legend of Zelda series that was visually displayed in 3D .\n",
    "developer":"Nintendo EAD",
    "publisher":"Nintendo",
    "released_date":" November 23, 1998",
    "__v":0},
    {"_id":"5f6ce9d805615a85623ec2b9",
    "name":"The Legend of Zelda: Oracle of Ages",
    "description":"The Legend of Zelda: Oracle of Ages is one of two The Legend of Zelda  titles released for the Game Boy Color, the other being Oracle of Seasons, both representing the seventh and eighth main installments of the series. Released near the end of the system's lifespan, Oracle of Ages and its counterpart were said to \"send the Game Boy Color out with a bang.\" In anticipation of the upcoming release of the Game Boy Color's successor, the Game Boy Advance, the games exhibited special features  when played on the new handheld system.\n",
    "developer":"Capcom",
    "publisher":"Nintendo",
    "released_date":" May 14, 2001",
    "__v":0}
]

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

function showTable (testItemGames) {
    const TableHeaderContainer = document.getElementById("table-header");
    TableHeaderContainer.appendChild(trHeader);
    const tableBodyContainer = document.getElementById("table-results");
    const itemTable = createGamesTableBody(testItemGames);
    tableBodyContainer.appendChild(itemTable);
}

createGamesTableHeaders();
createGamesTableBody(testItemGames);

console.log(trHeader);
console.log(trBody);
showTable(testItemGames);