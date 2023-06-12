/*
  But :    affiche tous les matériels
  Auteur : esther pham
  Date :   11.06.2023 / V1.0
*/
class MaterielsCtrl {

    materielsJson;

    constructor(api) {
        $(".retourChoixCat").click(() => {
            this.loadChoixCat();
        });
        this.materielsJson = null;
        api.getMateriels(((data) => {
            this.materielsJson = data;
            this.afficheInfos();
        }));
    }
    afficheInfos() {
        //console.log(this.materielsJson.data);
        (this.materielsJson.data).forEach(materiel => {

            $(".imgNomDesc").append(
                "<div class='miseEnForme'>" +
                "<img class='image' src='" + materiel.image + "'></img>" +
                "<div class='nomDesc'>" +
                "<div class='nom'><p>" + materiel.name + "</p></div>" +
                "<div class='description'>" + materiel.description + "</div>" +
                "</div>" +
                "</div>"
            );
        });
    }
    loadChoixCat() {
        indexCtrl.loadChoixCat();
    }
}