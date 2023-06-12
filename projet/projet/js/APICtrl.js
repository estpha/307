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
}