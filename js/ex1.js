const fetchPaintings = async () => {
    const url = "https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json";

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error.message);
    }
}

const buildTable = async () => {
    const table = document.getElementById("paintings");
    const paintings = await fetchPaintings();

    paintings.forEach(p => {
        let row = document.createElement("tr");

        let name = document.createElement("td");
        name.textContent = p.name;

        let year = document.createElement("td");
        year.textContent = p.year;

        let artist = document.createElement("td");
        artist.textContent = p.artist;

        row.appendChild(name);
        row.appendChild(year);
        row.appendChild(artist);
        table.appendChild(row);
    })
}


buildTable();