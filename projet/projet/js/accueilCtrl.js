/*
  But :     
  Auteur : prénom + nom
  Date :   jj.mm.aaaa / V1.0
*/
class LoginCtrl {
  constructor() {
    // Ajouter un écouteur. On est obligé de le faire là car l'objet n'est pas connu dans le html si on le fait directement dans l'html
    $("#btnCreatures").click(() => {
      // charger la vue demandee
      $("#view").load("views/" + vue + ".html", function () {

        // si une fonction de callback est spécifiée, on l'appelle ici
        if (typeof callback !== "undefined") {
          callback();
        }

      });
    });
  }
}
