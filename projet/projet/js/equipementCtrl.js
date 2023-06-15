/*
  But :    affiche tous les équipements
  Auteur : esther pham
  Date :   12.06.2023 / V1.0
*/
class EquipementCtrl {
  //création d'une variable globale utile pour les données de l'API
  equipmentJson;

  constructor(api) {
    //met un écouteur sur le bouton qui permet de retourner à la page permettant de choisir les différentes catégories
    $(".retourChoixCat").click(() => {
      this.loadChoixCat();
    });
    //récupération des données des équipements
    api.getEquipement(((data) => {
      this.equipmentJson = data;
      this.afficheInfos();
    }));
  }
  //méthode permettant de lister les équipements
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
  //chargement de la page d'accueil
  loadChoixCat() {
    indexCtrl.loadChoixCat();
  }
}