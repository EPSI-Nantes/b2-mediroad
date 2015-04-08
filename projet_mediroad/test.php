<!DOCTYPE HTML PUBLIC>
<html>
    <head>
        <title>test</title>
        <link href="css1.css" rel="stylesheet" />
        <meta charset="utf8"/>
        <script src=" http://maps.google.com/?file=api&amp;v=2.x&amp;key=ABQIAAAAFw0lDRKsdCra15LPvIxvehRjMgnVhZHmNh95BVtUkp0XgfXLlhSXfnSAP-eiQqfEOGaImc_V_dSQGQ" type="text/javascript"></script>
        <script src="carte.js" type="text/javascript"></script>
        <script src="prix.js" type="text/javascript"></script>
    </head>
    <body onLoad="initialize();" onUnload="GUnload()">
        <form id="monFormulaire" method="post" onSubmit="setDirections(this.from.value, this.to.value, 'fr'); return false;" onSubmit="calculprix(this.puissance.value);">
            <table id="début">
                <tr>
                    <td><strong>Puissance de votre voiture :</strong></td>
                    <td><select name="puissance" STYLE="width:383">
                        <option value="3CV">3CV et moins</option>
                        <option value="4CV">4CV</option>
                        <option value="5CV">5CV</option>
                        <option value="6CV">6CV</option>
                        <option value="7CV">7CV et plus</option>
                    </select></td>
                </tr>
                <tr>
                    <td><strong>Départ :</strong></td>
                    <td><input type="text" id="fromAddress" name="from" size="50"></td>
                </tr>
                <tr>
                    <td><strong>Arrivée :</strong></td>
                    <td><input type="text" id="toAddress" name="to" size="50"></td>   
                    <td><input name="itineraire" type="submit" value="Itinéraire" /></td>
                <tr>
                    <td><strong>Kilométrage :</strong></td>
                    <td><input type="text" id="km" size="10" disabled ></td>
                </tr>
                <tr>
                    <td><strong>Prix du trajet:</strong></td>
                    <td><input type="text" id="prix" size="10" disabled ></td>
                </tr>
            </table>
            <div id="tab_it1">
                <table id="itineraire">
                    <tr>
                        <th>Itinéraire détaillé</th>
                    </tr>
                   <tr>
                        <td><div id="directions"></td>
                    </tr>
                </table>
                <table id="tab_map">
                    <tr>
                        <th>Carte</th>
                    </tr>
                    <tr>
                        <td><div id="map_canvas" class="print"></div></td>
                    </tr>
                </table>
            </div>
    </body>
</html>