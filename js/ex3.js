const postCountries = async (countries) => {
    const url = `https://thejsway-server.herokuapp.com/api/countries`;

    const request = new Request(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(countries)
    })

    try {
        const response = await fetch(request);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.text();
        return result;

    } catch (error) {
        console.error(error.message);
    }
}

const main = async () => {
    const countries = {
        "name": "James",
        "countries": [
            {
                "name": "Canada",
                "year": 2023
            },
            {
                "name": "Mexico",
                "year": 2002
            },
            {
                "name": "Peru",
                "year": 2014
            },
            {
                "name": "Chile",
                "year": 2018
            },
            {
                "name": "Guatemala",
                "year": 2022
            },
            {
                "name": "Costa Rica",
                "year": 2026
            },
            {
                "name": "Argentina",
                "year": 2030
            },
            {
                "name": "Venezuala",
                "year": 2034
            },
            {
                "name": "France",
                "year": 2038
            },
            {
                "name": "Germany",
                "year": 2042
            }
        ]
    }

    console.log(await postCountries(countries));

}

window.addEventListener("DOMContentLoaded", main);