const fetchUser = async (accountId) => {
    const url = `https://api.github.com/users/${accountId}`;

    const request = new Request(url, {
        method: "GET",
        headers: {
            "Accept": "application/vnd.github+json",
            "X-GitHub-Api-Version": "2026-03-10"
        }
    })

    try {
        const response = await fetch(request);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error.message);
    }
}

const hydrate = async () => {
    const userSearch = document.getElementById("userSearch");
    
    const promise = fetchUser(userSearch.value);
    const imgElem = document.getElementById("img");
   
    imgElem.innerHTML = "";
    
    document.getElementById("name").textContent = "";
    document.getElementById("blog").textContent = "";
    document.getElementById("created").textContent = "";

    const user = await promise;
    if (!(await user)) {
        return;
    }

    const img = document.createElement("img");
    img.src = user.avatar_url;
    imgElem.appendChild(img);

    document.getElementById("name").textContent = user.name;
    document.getElementById("blog").textContent = user.blog;
    document.getElementById("created").textContent = user.created_at;

}

const domLoaded = () => {
    const btn = document.getElementById("searchButton");
    btn.addEventListener("click", hydrate);
}

window.addEventListener("DOMContentLoaded", domLoaded);