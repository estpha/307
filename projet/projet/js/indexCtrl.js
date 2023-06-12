/*
  But :     
  Auteur : prénom + nom
  Date :   jj.mm.aaaa / V1.0
*/

$().ready(function () {
  // service et indexCtrl sont des variables globales qui doivent être accessible depuis partout => pas de mot clé devant ou window.xxx
  vue = null;
  http = new HttpService();
  indexCtrl = new IndexCtrl();  // ctrl principal
  http.centraliserErreurHttp(indexCtrl.afficherErreurHttp);
  api = new APICtrl();
});

class IndexCtrl {

  
  constructor() {
    vue = new VueService();
    this.loadChoixCat();
   
  }

  afficherErreurHttp(msg) {
    alert(msg);
  }

  // avec arrow function
  loadChoixCat() {
    vue.chargerVue("choixCat", () => new ChoixCatCtrl());
  }

  /* avec function classique
  loadAccueil(langue) {
    this.vue.chargerVue("accueil", function () {
      new AccueilCtrl(langue);
    });
  }

  loadCompte() {
    this.vue.chargerVue("compte", function () {
      new CompteCtrl();
    });
  }*/
}
