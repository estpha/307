/*
  But :    affiche toutes les créatures
  Auteur : esther pham
  Date :   11.06.2023 / V1.0
*/
class CreaturesCtrl {

  creaturesJson;

  constructor(api) {
    $(".retourChoixCat").click(() => {
      this.loadChoixCat();
    });
    this.creaturesJson = null;
    api.getCreatures(((data) => {
      this.creaturesJson = data;
      this.afficheInfos();
    }));

  }
  afficheInfos() {

    //console.log(this.creaturesJson.data.food);
    (this.creaturesJson.data.food).forEach(creatureF => {

      $(".imgNomDesc").append(
        "<div class='miseEnForme'>" +
        "<img class='image' src='" + creatureF.image + "'></img>" +
        "<div class='nomDesc'>" +
        "<div class='nom'><p>" + creatureF.name + "</p></div>" +
        "<div class='description'>" + creatureF.description + "</div>" +
        "</div>" +
        "</div>"
      );
    });
    //console.log(this.creaturesJson.data.non_food);
    (this.creaturesJson.data.non_food).forEach(creatureNF => {

      $(".imgNomDesc").append(
        "<div class='miseEnForme'>" +
        "<img class='image' src='" + creatureNF.image + "'></img>" +
        "<div class='nomDesc'>" +
        "<div class='nom'><p>" + creatureNF.name + "</p></div>" +
        "<div class='description'>" + creatureNF.description + "</div>" +
        "</div>" +
        "</div>"
      );
    });
  }
  loadChoixCat() {
    indexCtrl.loadChoixCat();
  }
}