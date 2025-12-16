const apiUrl = "https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/patisserie.json";

fetch(apiUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        displayBanner(data);
        displayCardAdvantages(data);

    })
    .catch(function (error) {
        console.error("Erreur lors de la récupération des données :", error);
    });

function displayBanner(data) {

    const banner = document.getElementById("banner");

    // Création du texte de la bannière
    const textBanner = document.createElement("div");
    textBanner.classList.add("text-banner");

    const titleBanner = document.createElement("h1");
    titleBanner.textContent = `${data.nomCommercial}`;

    const paraBanner = document.createElement("p");
    paraBanner.textContent = `${data.phraseAccroche}`;

    const buttonBanner = document.createElement("button");
    buttonBanner.textContent = `${data.texteAppelAction}`;

    textBanner.appendChild(titleBanner);
    textBanner.appendChild(paraBanner);
    textBanner.appendChild(buttonBanner);

    // Affichage de la bannière
    banner.appendChild(textBanner);
}

function displayCardAdvantages(data) {

    const cardContainer = document.querySelector(".card-container");

    // Création des card avantages avec un forEach
    data.avantagesClients.forEach((advantage, index) => {
        const cardAdvantages = document.createElement("div");
        cardAdvantages.classList.add("card-advantages");

        const titleCardAdvantages = document.createElement("h3");
        titleCardAdvantages.textContent = `Avantage ${index + 1} `;

        const paraCardAdvantages = document.createElement("p");
        paraCardAdvantages.textContent = advantage;

        cardAdvantages.appendChild(titleCardAdvantages);
        cardAdvantages.appendChild(paraCardAdvantages);

        cardContainer.appendChild(cardAdvantages);
    });

}