/*
  But :    bouton de choix pour les catégories
  Auteur : esther pham
  Date :   12.06.2023 / V1.0
*/
class ChoixCatCtrl {
  constructor() {
    //charge les pages html des différentes catégories
    this.listeCreatures();
    this.listeEquipement();
    this.listeMateriels();
    this.listeMonstres();
    this.listeTresors();
    //cache le nom de l'auteur du code
    $("#auteur").hide();
    //si l'on passe la souris sur l'image se trouvant dans le pied de page le nom de l'auteur s'affiche
    $(".imgFooterChoix").hover(function(){
      $("p").animate({
        height: 'toggle'
      }, "fast");
    });
  };
  //si l'utilisateur clique sur ce bouton la page listant les créatures se charge
  listeCreatures() {
    $("#btnCreatures").click(() => {
      // charger la vue demandee
      vue.chargerVue("creatures", () => new CreaturesCtrl(api));
    })
  }
  //si l'utilisateur clique sur ce bouton la page listant les équipements se charge
  listeEquipement() {
    $("#btnEquipement").click(() => {
      // charger la vue demandee
      vue.chargerVue("equipement", () => new EquipementCtrl(api));
    })
  }
  //si l'utilisateur clique sur ce bouton la page listant les matériaux se charge
  listeMateriels() {
    $("#btnMateriels").click(() => {
      // charger la vue demandee
      vue.chargerVue("materiels", () => new MaterielsCtrl(api));
    })
  }
  //si l'utilisateur clique sur ce bouton la page listant les monstres se charge
  listeMonstres() {
    $("#btnMonstres").click(() => {
      // charger la vue demandee
      vue.chargerVue("monstres", () => new MonstresCtrl(api));
    })
  }
  //si l'utilisateur clique sur ce bouton la page listant les trésors se charge
  listeTresors() {
    $("#btnTresor").click(() => {
      // charger la vue demandee
      vue.chargerVue("tresors", () => new TresorsCtrl(api));
    })
  }
}
