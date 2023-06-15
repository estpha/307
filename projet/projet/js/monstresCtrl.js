/*
  But :    affiche tous les monstres
  Auteur : esther pham
  Date :   12.06.2023 / V1.0
*/
class MonstresCtrl {
  //création d'une variable globale utile pour les données de l'API
  monstresJson;

  constructor(api) {
    //met un écouteur sur le bouton qui permet de retourner à la page permettant de choisir les différentes catégories
    $(".retourChoixCat").click(() => {
      this.loadChoixCat();
    });
    //récupération des données des monstres
    api.getMonstres(((data) => {
      this.monstresJson = data;
      this.afficheInfos();
    }));
  }
  //méthode permettant de lister les monstres
  afficheInfos() {
    //console.log(this.materielsJson.data);
    (this.monstresJson.data).forEach(monstres => {

      $(".imgNomDesc").append(
        "<div class='miseEnForme'>" +
        "<img class='image' src='" + monstres.image + "'></img>" +
        "<div class='nomDesc'>" +
        "<div class='nom'><p>" + monstres.name + "</p></div>" +
        "<div class='description'>" + monstres.description + "</div>" +
        "</div>" +
        "</div>"
      );
    });
  }
  loadChoixCat() {
    indexCtrl.loadChoixCat();
  }
}