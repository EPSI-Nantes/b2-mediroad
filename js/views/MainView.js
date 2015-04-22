'use strict';

(Mediroad.views = Mediroad.views || {}).main = {
    firstDisplay: function () {
        $('#particulier').fadeOut();
        $('#entreprise').fadeIn();
        $('#idTotalPrice').fadeOut();
        $('#otherItineraire').fadeOut();
    },
    updateKmInput: function (distanceKm) {
        $('#km' + i).val(distanceKm + ' km');
    },
    updatePrice: function (price) {
        $("#priceN" + i).val(Math.round(price * 100) / 100 + " €");
    },
    updatePriceMult: function (price) {
        $("#prixDiv").val(Math.round(price * 100) / 100 + " €");
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
    checkRadio2: function (id) {
        if (document.getElementById(id).checked === true)
        {
            $('#particulier').fadeIn();
            $('#entreprise').fadeOut();
        }
    },
    displayNextStep: function () {
        $('#idTotalPrice').fadeIn();
        $('#otherItineraire').fadeIn();
    },
    creationDiv: function () {
        var divCopy = ' \n\
            <form id="monFormulaire" method="post" onSubmit="setDirections($("#fromAddress'+i+'").val(), $("#toAddress'+i+'").val(), "fr");return false;">\n\\n\
            <div id="tab_it' + i + '">\n\
            <table id="debut' + i + '">\n\
                <tr>\n\
                    <td><strong>Départ :</strong></td>\n\
                        <td><input type="text" id="fromAddress' + i + '" name="from" size="50"></td>\n\
                </tr>\n\
                <tr>\n\
                    <td><strong>Arrivée :</strong></td>\n\
                    <td><input type="text" id="toAddress' + i + '" name="to" size="50"></td>\n\
                    <td><input name="itineraire" type="submit" value="Itinéraire" onclick=""/></td>\n\
                </tr>\n\
                <tr>\n\
                    <td><strong>Kilométrage :</strong></td>\n\
                    <td><input type="text" id="km' + i + '" size="10" disabled ></td>\n\
                </tr>\n\
                <tr>\n\
                    <td><strong>Prix du trajet:</strong></td>\n\
                    <td><input type="text" id="priceN' + i + '" size="10" disabled ></td>\n\
                </tr>\n\
            </table>\n\
            <table class="itineraire" id="itineraire' + i + '">\n\
                <tr>\n\
                    <th>Itinéraire détaillé</th>\n\
                </tr>\n\
                <tr>\n\
                    <td><div class="directions" id="directions' + i + '"></td>\n\
                </tr>\n\
            </table>\n\
            <table class="tab_map" id="tab_map' + i + '">\n\
                <tr>\n\
                    <th>Carte</th>\n\
                </tr>\n\
                <tr>\n\
                    <td><div class="map_canvas" id="map_canvas' + i + '" class="print"></div></td>\n\
                </tr>\n\
            </table>\n\
        </div>\n\
</form>';
        var $myDiv = $(divCopy);
        $myDiv.appendTo('.container');
        initialize();
        var i2 = i-1;
        $("#fromAddress"+i).prop('value', $("#toAddress"+i2).val());
    }
};
