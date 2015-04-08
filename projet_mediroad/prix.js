
function calculprix(voiture) {
    var distance = document.getElementById("km").value;         //résupérer la distance contenu dans le champ
    distance = distance.replace(/ /g,"");                       //enlever tous les espaces
    distance=parseInt(distance);                                //le transformer en type int (ce qui supprime les "km" de la fin)
    var prix;
    if (voiture ==="3CV")
    {
        if (distance <= 5000)
        {
            prix = 0.41*distance;
        }
        if (distance > 5000 && distance <= 20000)
        {
            prix = (0.245*distance)+824;
        }
        else
            prix = 0.285*distance;
    }
    if (voiture ==="4CV")
    {
        if (distance <= 5000)
        {
            prix = 0.493*distance;
        }
        if (distance > 5000 && distance <= 20000)
        {
            prix = (0.27*distance)+1082;
        }
        else
            prix = 0.332*distance;
    }
    if (voiture ==="5CV")
    {
        if (distance <= 5000)
        {
            prix = 0.543*distance;
        }
        if (distance > 5000 && distance <= 20000)
        {
            prix = (0.27*distance)+1188;
        }
        else
            prix = 0.364*distance;
    }
    if (voiture ==="6CV")
    {
        if (distance <= 5000)
        {
            prix = 0.568*distance;
        }
        if (distance > 5000 && distance <= 20000)
        {
            prix = (0.32*distance)+1244;
        }
        else
            prix = 0.382*distance;
    }
    if (voiture ==="7CV")
    {
        if (distance <= 5000)
        {
            prix = 0.595*distance;
        }
        if (distance > 5000 && distance <= 20000)
        {
            prix = (0.337*distance)+1288;
        }
        else
            prix = 0.401*distance;
    }
     document.getElementById("prix").value = prix;
};


