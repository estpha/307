/*
  But :     
  Auteur : esther pham
  Date :   11.06.2023 / V1.0
*/
class CreaturesCtrl {
  constructor() {

  }

  afficheInfos() {
    var getcreatures = function () {
      $("#image").attr("src", function getImg() {
        $.ajax({
          type: "GET",
          url: "https://botw-compendium.herokuapp.com/api/v2/entry/white-maned_lynel/image",
          data: { "": httpNonAccessibleFilePath },
          success: function (imageData) {
            $("#image").attr('<img src="' + imageData + '" />');
          }
        });
      });

    }
  }
}