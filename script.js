const apiUrl = "https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/patisserie.json";

fetch(apiUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        displayBanner(data);
        displayCardAdvantages(data);
        displayCardProducts(data);
        displayCardServices(data);
        displayCardVouch(data);
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

    const cardAdvantagesContainer = document.getElementById("card-advantages-container");

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

        // Affichage des card
        cardAdvantagesContainer.appendChild(cardAdvantages);
    });

}

function displayCardProducts(data) {
    const cardProductsContainer = document.getElementById("card-products-container");

    // Création des card produits avec un forEach
    data.produits.forEach(product => {
        const cardProducts = document.createElement("div");
        cardProducts.classList.add("card-products");

        const imgCardProducts = document.createElement("img");
        imgCardProducts.src = product["image-url"];
        imgCardProducts.alt = product.nom;

        const titleCardProducts = document.createElement("h3");
        titleCardProducts.textContent = product.nom;

        const paraCardProducts = document.createElement("p");
        paraCardProducts.textContent = product.description;

        cardProducts.appendChild(imgCardProducts);
        cardProducts.appendChild(titleCardProducts);
        cardProducts.appendChild(paraCardProducts);

        // Affichage des card
        cardProductsContainer.appendChild(cardProducts);
    });
}

function displayCardServices(data) {
    const cardServicesContainer = document.getElementById("card-services-container");

    // Création des card services avec un forEach
    data.services.forEach(service => {
        const cardServices = document.createElement("div");
        cardServices.classList.add("card-services");

        const titleCardServices = document.createElement("h3");
        titleCardServices.textContent = service.nom;

        const paraCardServices = document.createElement("p");
        paraCardServices.textContent = service.description;

        cardServices.appendChild(titleCardServices);
        cardServices.appendChild(paraCardServices);

        // Affichage des card
        cardServicesContainer.appendChild(cardServices);
    });
}

function displayCardVouch(data) {
    const cardVouchContainer = document.getElementById("card-vouch-container");

    // Création des card temoignages avec un forEach
    data.temoignages.forEach(vouch => {
        const cardVouch = document.createElement("div");
        cardVouch.classList.add("card-vouch");

        const titleCardVouch = document.createElement("h3");
        titleCardVouch.textContent = vouch.prenom;

        const para1CardVouch = document.createElement("p");
        para1CardVouch.textContent = vouch.typeExperience;

        const para2CardVouch = document.createElement("p");
        para2CardVouch.textContent = `Note: ${vouch.note}/5`;

        const para3CardVouch = document.createElement("p");
        para3CardVouch.textContent = vouch.commentaire;

        cardVouch.appendChild(titleCardVouch);
        cardVouch.appendChild(para1CardVouch);
        cardVouch.appendChild(para2CardVouch);
        cardVouch.appendChild(para3CardVouch);

        // Affichage des card
        cardVouchContainer.appendChild(cardVouch);
    });

}