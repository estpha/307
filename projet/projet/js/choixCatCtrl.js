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
      vue.chargerVue("creatures", () => new CreaturesCtrl());
      console.log("oui");
    })
  }
}
