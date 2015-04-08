'use strict';
(Mediroad.models = Mediroad.models || {}).price = {

  pricePerCV: {
    '3CVp': 0.41,
    '3CVm': 0.245,
    '3CVg': 0.285,
    '3CVc': 824,
    '4CVp': 0.493,
    '4CVm': 0.27,
    '4CVg': 0.332,
    '4CVc': 1082,
    '5CVp': 0.543,
    '5CVm': 0.27,
    '5CVg': 0.364,
    '5CVc': 1188,
    '6CVp': 0.568,
    '6CVm': 0.32,
    '6CVg': 0.382,
    '6CVc': 0.1244,
    '7CVp': 0.595,
    '7CVm': 0.337,
    '7CVg': 0.401,
    '7CVc': 1288
  },

  /**
   * [compute description]
   * @param  {Number} distanceKm ...
   * @param  {String} power      e.g. '7CV'
   * @return {Number}            price...
   */
  compute: function (distanceKm, power) {
    if (distanceKm <= 5000) {
      return this.pricePerCV[power + "p"] * distanceKm;
    }

    if (distanceKm > 5000 && distanceKm <= 20000) {
      return this.pricePerCV[power + "m"] * distanceKm + this.pricePerCV[power + "c"];
    }

    return this.pricePerCV[power + "g"] * distanceKm;
  }

  // function calculprixparticulier() {
  //     var distance = parseInt($("#km").val().replace(/ /g, ""), 10);
  //     var voiture = $("#puissance").val();
  // }

};
