'use strict';
var map, gdir;

function initialize() {
  if (GBrowserIsCompatible()) {
    map = new GMap2(document.getElementById("map_canvas"));
    gdir = new GDirections(map, document.getElementById("directions"));
    GEvent.addListener(gdir, "load", onGDirectionsLoad);
    GEvent.addListener(gdir, "error", handleErrors);
    map.setCenter(new GLatLng(46.98025, 3.66943), 6);
    map.addControl(new GMapTypeControl());
    map.addControl(new GLargeMapControl());
    map.addControl(new GOverviewMapControl());
    map.addControl(new GScaleControl());
    map.enableScrollWheelZoom();
        $('#particulier').fadeOut();
    $('#particulier').fadeOut();
    $('#entreprise').fadeIn();
  }
}

function setDirections(fromAddress, toAddress, locale) {
  gdir.load("from: " + fromAddress + " to: " + toAddress, {
    "locale": locale
  });
}

function handleErrors() {
  if (gdir.getStatus().code == G_GEO_UNKNOWN_ADDRESS)
    alert("Aucune location géographique correspondante n'a pu être trouvée pour l'une des adresses spécifiées.\nCe qui peut être du à une adresse récente, ou incorrecte.\nN'oubliez pas d'ajouter dans l'adresse le pays (en anglais).\nError code: " + gdir.getStatus().code);
  else if (gdir.getStatus().code == G_GEO_SERVER_ERROR)
    alert("La demande d'itinéraire n'a pu être calculée avec succès, aucune raison de l'échec n'est connu.\n Error code: " + gdir.getStatus().code);
  else if (gdir.getStatus().code == G_GEO_MISSING_QUERY)
    alert("The HTTP q parameter was either missing or had no value. For geocoder requests, this means that an empty address was specified as input. For directions requests, this means that no query was specified in the input.\n Error code: " + gdir.getStatus().code);
  else if (gdir.getStatus().code == G_GEO_BAD_KEY)
    alert("La clé (Key) n'est pas valide ou ne correspond pas au nom de domaine. \n Error code: " + gdir.getStatus().code);
  else if (gdir.getStatus().code == G_GEO_BAD_REQUEST)
    alert("La demande d'itinéraire n'a pu être correctement parsé.\n Error code: " + gdir.getStatus().code);
  else alert("Une erreur inconnue est survenue.");
}

function onGDirectionsLoad() {
  var distanceKm = gdir.getDistance().meters / 1000;
  Mediroad.views.main.updateKmInput(distanceKm);


  if (document.getElementById("statut1").checked === true)
    {
        var price = Mediroad.models.price.compute(distanceKm, Mediroad.views.main.getPower());
    }
  else 
    {
        var price = Mediroad.models.price.particulier(distanceKm, Mediroad.views.main.getConso(), Mediroad.views.main.getFuel());
    };
  var priceMult = price / Mediroad.views.main.getNumber();
  Mediroad.views.main.updatePrice(price);
  Mediroad.views.main.updatePriceMult(priceMult);
}
