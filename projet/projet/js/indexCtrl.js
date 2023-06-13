/*
  But :    index des ctrls 
  Auteur : esther pham
  Date :   11.06.2023 / V1.0
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
}
