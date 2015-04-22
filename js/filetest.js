'use strict';

function creationDiv () {
    var divCopy = '\
        <div id="tab_it'+i+'">\n\
            <table id="debut'+i+'">\n\
                <tr>\n\
                    <td><strong>Départ :</strong></td>\n\
                        <td><input type="text" id="fromAddress'+i+'" name="from" size="50"></td>\n\
                </tr>\n\
                <tr>\n\
                    <td><strong>Arrivée :</strong></td>\n\
                    <td><input type="text" id="toAddress'+i+'" name="to" size="50"></td>\n\
                    <td><input name="itineraire" type="submit" value="Itinéraire" /></td>\n\
                </tr>\n\
                <tr>\n\
                    <td><strong>Kilométrage :</strong></td>\n\
                    <td><input type="text" id="km'+i+'" size="10" disabled ></td>\n\
                </tr>\n\
                <tr>\n\
                    <td><strong>Prix du trajet:</strong></td>\n\
                    <td><input type="text" id="pricewithCV'+i+'" size="10" disabled ></td>\n\
                </tr>\n\
            </table>\n\
            <table class="itineraire" id="itineraire'+i+'">\n\
                <tr>\n\
                    <th>Itinéraire détaillé</th>\n\
                </tr>\n\
                <tr>\n\
                    <td><div class="directions" id="directions'+i+'"></td>\n\
                </tr>\n\
            </table>\n\
            <table class="tab_map" id="tab_map'+i+'">\n\
                <tr>\n\
                    <th>Carte</th>\n\
                </tr>\n\
                <tr>\n\
                    <td><div class="map_canvas" id="map_canvas'+i+'" class="print"></div></td>\n\
                </tr>\n\
            </table>\n\
        </div>';
    var $myDiv = $(divCopy);
    $myDiv.appendTo('body');
}


