/*
  But :    affiche tous les tresors
  Auteur : esther pham
  Date :   11.06.2023 / V1.0
*/
class TresorsCtrl {

    tresorsJson;

    constructor(api) {
        $(".retourChoixCat").click(() => {
            this.loadChoixCat();
        });
        api.getTresor(((data) => {
            this.tresorsJson = data;
            this.afficheInfos();
        }));
    }
    afficheInfos() {
        //console.log(this.tresorsJson.data);
        (this.tresorsJson.data).forEach(tresor => {

            $(".imgNomDesc").append(
                "<div class='miseEnForme'>" +
                "<img class='image' src='" + tresor.image + "'></img>" +
                "<div class='nomDesc'>" +
                "<div class='nom'><p>" + tresor.name + "</p></div>" +
                "<div class='description'>" + tresor.description + "</div>" +
                "</div>" +
                "</div>"
            );
        });
    }
    loadChoixCat() {
        indexCtrl.loadChoixCat();
    }
}