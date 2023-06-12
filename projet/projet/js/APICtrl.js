/*
  But :    récupération des infos de l'API
  Auteur : esther pham
  Date :   12.06.2023 / V1.0
*/
class APICtrl {

    constructor() {
    }

    getCreatures(successCallback) {
        $.ajax({
            type: "GET",
            url: "https://botw-compendium.herokuapp.com/api/v2/category/creatures",
            success: successCallback
        });
    }

    getEquipement(successCallback) {
        $.ajax({
            type: "GET",
            url: "https://botw-compendium.herokuapp.com/api/v2/category/equipment",
            success: successCallback
        });
    }

    getMateriels(successCallback) {
        $.ajax({
            type: "GET",
            url: "https://botw-compendium.herokuapp.com/api/v2/category/materials",
            success: successCallback
        });
    }

    getMonstres(successCallback) {
        $.ajax({
            type: "GET",
            url: "https://botw-compendium.herokuapp.com/api/v2/category/monsters",
            success: successCallback
        });
    }

    getTresor(successCallback) {
        $.ajax({
            type: "GET",
            url: "https://botw-compendium.herokuapp.com/api/v2/category/treasure",
            success: successCallback
        });
    }
}