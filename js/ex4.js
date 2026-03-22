const createTable = (data) => {
    const tblDiv = document.getElementById("tblDiv");
    tblDiv.innerHTML = "";
    const tbl = document.createElement("table");
    tbl.innerHTML = '<tr><th>Key</th><th>Value</th></tr>';

    for (const key in data) {
        if (!Object.hasOwn(data, key)) continue;
        
        const element = data[key];
        
        const tr = document.createElement("tr");
        const tKey = document.createElement("td");
        tKey.textContent = key;
        tr.appendChild(tKey);

        const tVal = document.createElement("td");
        tVal.textContent = element;
        tr.appendChild(tVal);

        tbl.appendChild(tr);        
    }

    const h3 = document.createElement("h3");
    h3.innerText = "Form Data Entered"

    tblDiv.appendChild(h3);
    tblDiv.appendChild(tbl);
}

const main = () => {
    document.getElementById("form").addEventListener("submit", (e) => {
        e.preventDefault();

        const form = e.target;

        const data = {
            name: form.name.value,
            email: form.email.value,
            payment: form.payment.value,
            promotion: form.promotion.checked,
            location: form.location.value
        };

        createTable(data);
    });
}

window.addEventListener("DOMContentLoaded", main);