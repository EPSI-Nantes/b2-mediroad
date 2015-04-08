<!DOCTYPE HTML PUBLIC>
<html>
    <head>
        <title>test</title>
        <script>
        function calculprix(voiture) {
    //var distance = document.getElementById("km").value;         //résupérer la distance contenu dans le champ
    //distance = distance.replace(/ /g,"");                       //enlever tous les espaces
    //distance=parseInt(distance);                                //le transformer en type int (ce qui supprime les "km" de la fin)
    //var distance = parseInt(document.getElementById("km").value.replace(/ /g,""), 10);
    var distance = 2000;
    var monDico = {};
    monDico["3CVp"]=0.41;
    monDico["3CVm"]=0.245;
    monDico["3CVg"]=0.285;
    monDico["3CVc"]=824;
    monDico["4CVp"]=0.493;
    monDico["4CVm"]=0.27;
    monDico["4CVg"]=0.332;
    monDico["4CVc"]=1082;
    monDico["5CVp"]=0.543;
    monDico["5CVm"]=0.27;
    monDico["5CVg"]=0.364;
    monDico["5CVc"]=1188;
    monDico["6CVp"]=0.568;
    monDico["6CVm"]=0.32;
    monDico["6CVg"]=0.382;
    monDico["6CVc"]=0.1244;
    monDico["7CVp"]=0.595;
    monDico["7CVm"]=0.337;
    monDico["7CVg"]=0.401;
    monDico["7CVc"]=1288;
    
    var prix;
    
    if (distance <= 5000)
    {
        prix=monDico[voiture + "p"]*distance;
    }
    else if (distance > 5000 && distance <= 20000)
    {
        prix=monDico[voiture + "m"]*distance + monDico[voiture + "c"];
    }
    else 
    {
        prix=monDico[voiture + "g"]*distance;
    }
    //$('#prix_avec_calcul_CV').val(prix);
    document.getElementById("prix_avec_calcul_CV").value = prix;
};</script>
    </head>
    <body>
        <td><input name="test" type="submit" value="test" onclick="calculprix('3CV');"/></td>
        <td><input type="text" id="prix_avec_calcul_CV" size="10" disabled ></td>

    </body>
</html>