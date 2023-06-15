/*
  But :    affiche tous les tresors
  Auteur : esther pham
  Date :   12.06.2023 / V1.0
*/
class TresorsCtrl {
  //création d'une variable globale utile pour les données de l'API
  tresorsJson;

  constructor(api) {
    //met un écouteur sur le bouton qui permet de retourner à la page permettant de choisir les différentes catégories
    $(".retourChoixCat").click(() => {
      this.loadChoixCat();
    });
    //récupération des données des monstres
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