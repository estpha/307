/*
  But :     
  Auteur : prénom + nom
  Date :   jj.mm.aaaa / V1.0
*/
class ChoixCat {
  constructor() {
    // Ajouter un écouteur. On est obligé de le faire là car l'objet n'est pas connu dans le html si on le fait directement dans l'html
    $("#btnCreatures").click(() => {
      // charger la vue demandee
      $("#listeCreatures").load("views/creatures.html", function () {

        // si une fonction de callback est spécifiée, on l'appelle ici
        if (typeof callback !== "undefined") {
          callback();
        }

      });
    });
    /*$("#btnEquipement").click(() => {
      // charger la vue demandee
      $("#view").load("views/equipements.html", function () {

        // si une fonction de callback est spécifiée, on l'appelle ici
        if (typeof callback !== "undefined") {
          callback();
        }

      });
    });
    $("#btnMateriels").click(() => {
      // charger la vue demandee
      $("#view").load("views/materiels.html", function () {

        // si une fonction de callback est spécifiée, on l'appelle ici
        if (typeof callback !== "undefined") {
          callback();
        }

      });
    });
    $("#btnMonstres").click(() => {
      // charger la vue demandee
      $("#view").load("views/materiels.html", function () {

        // si une fonction de callback est spécifiée, on l'appelle ici
        if (typeof callback !== "undefined") {
          callback();
        }

      });
    });*/
  }
}
