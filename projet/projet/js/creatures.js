/*
  But :     
  Auteur : esther pham
  Date :   11.06.2023 / V1.0
*/
class CreaturesCtrl {

  creaturesJson = null;

  constructor(api) {
    api.getCreatures((data => {
      this.creaturesJson = data;
    }));
    this.afficheInfos();
  }
  afficheInfos() {
    console.log(this.creaturesJson);
    /*(this.creaturesJson.food).forEach(creatureF => {
      console.log(creatureF.name);
      //console.log(creatureF.image);
    });*/
  }
}