/*
  But :    affiche tous les équipements
  Auteur : esther pham
  Date :   11.06.2023 / V1.0
*/
class EquipementCtrl {

    equipmentJson;

    constructor(api) {
        $(".retourChoixCat").click(() => {
            this.loadChoixCat();
        });
        this.equipmentJson = null;
        api.getEquipement(((data) => {
            this.equipmentJson = data;
            this.afficheInfos();
        }));
    }
    afficheInfos() {
        //console.log(this.equipmentJson.data);
        (this.equipmentJson.data).forEach(equipment => {

            $(".imgNomDesc").append(
                "<div class='miseEnForme'>" +
                "<img class='image' src='" + equipment.image + "'></img>" +
                "<div class='nomDesc'>" +
                "<div class='nom'><p>" + equipment.name + "</p></div>" +
                "<div class='description'>" + equipment.description + "</div>" +
                "</div>" +
                "</div>"
            );
        });
    }
    loadChoixCat() {
        indexCtrl.loadChoixCat();
    }
}