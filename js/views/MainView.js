'use strict';

(Mediroad.views = Mediroad.views || {}).main = {
    
  updateKmInput: function (distanceKm) {
    $('#km').val(distanceKm + ' km');
  },

  updatePrice: function (price) {
    $("#pricewithCV").val(Math.round(price*100)/100 + " €");
  },
  updatePriceMult: function (price) {
      $("#prixDiv").val(Math.round(price*100)/100 + " €");
  },

  getPower: function () {
    return $('#puissance').val();
  },
  getConso: function () {
    return $('#conso').val(); 
  },
  getFuel: function () {
    return $('#conso').val(); 
  },
  getNumber: function () {
      return $('#nbPeople').val();
  },
    checkRadio1: function (id) {
                if (document.getElementById(id).checked === true)
                {
                    $('#particulier').fadeOut();
                    $('#entreprise').fadeIn();
                }
            },
    checkRadio2 : function (id) {
                if (document.getElementById(id).checked === true)
                {
                    $('#particulier').fadeIn();
                    $('#entreprise').fadeOut();
                }
            }
};
