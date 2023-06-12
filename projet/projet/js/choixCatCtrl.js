/*
  But :    bouton de choix pour les catégories
  Auteur : esther pham
  Date :   12.06.2023 / V1.0
*/
class ChoixCatCtrl {
  constructor() {
    this.listeCreatures();
    this.listeEquipement();
    this.listeMateriels();
    this.listeMonstres();
    this.listeTresors();
  };

  listeCreatures() {
    $("#btnCreatures").click(() => {
      // charger la vue demandee
      vue.chargerVue("creatures", () => new CreaturesCtrl(api));
    })
  }
  listeEquipement() {
    $("#btnEquipement").click(() => {
      // charger la vue demandee
      vue.chargerVue("equipement", () => new EquipementCtrl(api));
    })
  }
  listeMateriels() {
    $("#btnMateriels").click(() => {
      // charger la vue demandee
      vue.chargerVue("materiels", () => new MaterielsCtrl(api));
    })
  }
  listeMonstres() {
    $("#btnMonstres").click(() => {
      // charger la vue demandee
      vue.chargerVue("monstres", () => new MonstresCtrl(api));
    })
  }
  listeTresors() {
    $("#btnTresor").click(() => {
      // charger la vue demandee
      vue.chargerVue("tresors", () => new TresorsCtrl(api));
    })
  }
}
