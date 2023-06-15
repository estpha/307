/*
  But :    récupération des infos de l'API
  Auteur : esther pham
  Date :   12.06.2023 / V1.0
*/
class APICtrl {

    constructor() {
    }
    //récupère toutes les données se trouvant dans la catégorie creatures de l'API
    getCreatures(successCallback) {
        $.ajax({
            type: "GET",
            url: "https://botw-compendium.herokuapp.com/api/v2/category/creatures",
            success: successCallback
        });
    }
    //récupère toutes les données se trouvant dans la catégorie equipment de l'API
    getEquipement(successCallback) {
        $.ajax({
            type: "GET",
            url: "https://botw-compendium.herokuapp.com/api/v2/category/equipment",
            success: successCallback
        });
    }
    //récupère toutes les données se trouvant dans la catégorie materials de l'API
    getMateriels(successCallback) {
        $.ajax({
            type: "GET",
            url: "https://botw-compendium.herokuapp.com/api/v2/category/materials",
            success: successCallback
        });
    }
    //récupère toutes les données se trouvant dans la catégorie monsters de l'API
    getMonstres(successCallback) {
        $.ajax({
            type: "GET",
            url: "https://botw-compendium.herokuapp.com/api/v2/category/monsters",
            success: successCallback
        });
    }
    //récupère toutes les données se trouvant dans la catégorie treasure de l'API
    getTresor(successCallback) {
        $.ajax({
            type: "GET",
            url: "https://botw-compendium.herokuapp.com/api/v2/category/treasure",
            success: successCallback
        });
    }
}