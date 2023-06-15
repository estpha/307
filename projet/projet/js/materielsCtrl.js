/*
  But :    affiche tous les matériaux
  Auteur : esther pham
  Date :   12.06.2023 / V1.0
*/
class MaterielsCtrl {
  //création d'une variable globale utile pour les données de l'API
  materielsJson;

  constructor(api) {
    //met un écouteur sur le bouton qui permet de retourner à la page permettant de choisir les différentes catégories
    $(".retourChoixCat").click(() => {
      this.loadChoixCat();
    });
    //récupération des données des matériels
    api.getMateriels(((data) => {
      this.materielsJson = data;
      this.afficheInfos();
    }));
  }
  //méthode permettant de lister les matériaux
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