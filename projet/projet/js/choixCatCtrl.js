/*
  But :     
  Auteur : prénom + nom
  Date :   jj.mm.aaaa / V1.0
*/
class ChoixCat {
  constructor() {
    this.chargementPage();
  };

  chargementPage() {
    $("#btnCreatures").click(function openCreatures() {
      // charger la vue demandee
      this.vue.chargerVue("CreaturesCtrl", () => new CreaturesCtrl());
      console.log("oui");
    })
  }
}
