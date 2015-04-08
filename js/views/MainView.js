'use strict';

(Mediroad.views = Mediroad.views || {}).main = {
  updateKmInput: function (distanceKm) {
    $('#km').val(distanceKm + ' km');
  },

  updatePrice: function (price) {
    $("#prix_avec_calcul_CV").val(Math.round(price) + " €");
  },

  getPower: function () {
    return $('#puissance').val();
  }
};
