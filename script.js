const apiUrl = "https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/patisserie.json";

fetch(apiUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        displayBanner(data);


    })
    .catch(function (error) {
        console.error("Erreur lors de la récupération des données :", error);
    });

function displayBanner(data) {
    const banner = document.getElementById("banner");


}