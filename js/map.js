'use strict';

function initialize() {
  if (GBrowserIsCompatible()) {
                window["map" + i] = new GMap2(document.getElementById("map_canvas" + i));
                window["gdir" + i] = new GDirections(window["map" + i], document.getElementById("directions" + i));
                GEvent.addListener(window["gdir" + i], "load", onGDirectionsLoad);
                GEvent.addListener(window["gdir" + i], "error", handleErrors);
                window["map" + i].setCenter(new GLatLng(46.98025, 3.66943), 6);
                window["map" + i].addControl(new GMapTypeControl());
                window["map" + i].addControl(new GLargeMapControl());
                window["map" + i].addControl(new GOverviewMapControl());
                window["map" + i].addControl(new GScaleControl());
                window["map" + i].enableScrollWheelZoom();
            }
}

function setDirections(fromAddress, toAddress, locale) {     //réfléchir a insérer une variable ici dont toutes la suite dépendra
  window["gdir" + i].load("from: " + fromAddress + " to: " + toAddress, {"locale": locale});
}

function handleErrors() {
  if (window["gdir" + i].getStatus().code == G_GEO_UNKNOWN_ADDRESS)
    alert("Aucune location géographique correspondante n'a pu être trouvée pour l'une des adresses spécifiées.\nCe qui peut être du à une adresse récente, ou incorrecte.\nN'oubliez pas d'ajouter dans l'adresse le pays (en anglais).\nError code: " + window["gdir" + i].getStatus().code);
  else if (window["gdir" + i].getStatus().code == G_GEO_SERVER_ERROR)
    alert("La demande d'itinéraire n'a pu être calculée avec succès, aucune raison de l'échec n'est connu.\n Error code: " + window["gdir" + i].getStatus().code);
  else if (window["gdir" + i].getStatus().code == G_GEO_MISSING_QUERY)
    alert("The HTTP q parameter was either missing or had no value. For geocoder requests, this means that an empty address was specified as input. For directions requests, this means that no query was specified in the input.\n Error code: " + window["gdir" + i].getStatus().code);
  else if (window["gdir" + i].getStatus().code == G_GEO_BAD_KEY)
    alert("La clé (Key) n'est pas valide ou ne correspond pas au nom de domaine. \n Error code: " + window["gdir" + i].getStatus().code);
  else if (window["gdir" + i].getStatus().code == G_GEO_BAD_REQUEST)
    alert("La demande d'itinéraire n'a pu être correctement parsé.\n Error code: " + window["gdir" + i].getStatus().code);
  else alert("Une erreur inconnue est survenue.");
}

function onGDirectionsLoad() {
  var distanceKm = window["gdir" + i].getDistance().meters / 1000;
  Mediroad.views.main.updateKmInput(distanceKm);

    
  var price = document.getElementById("statut1").checked === true ? Mediroad.models.price.compute(distanceKm, Mediroad.views.main.getPower()) 
                : Mediroad.models.price.particulier(distanceKm, Mediroad.views.main.getConso(), Mediroad.views.main.getFuel());
    
  var priceMult = price / Mediroad.views.main.getNumber();
  Mediroad.views.main.updatePrice(price);
  Mediroad.views.main.updatePriceMult(priceMult);
  Mediroad.views.main.displayNextStep();
  i++;
  }
