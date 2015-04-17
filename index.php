<html>
<head>
<title>mestest </title>
<script src="jquery-2.1.3.min.js"></script>
<script type="text/javascript">
    var i = 1;
</script>
<script>
function cloneDiv(divClassName) {
        var clone    = $('#' + divClassName).clone();
        
        $(clone).attr('id', $(clone).attr('id') + i);
        $(clone).find('#fromAddress').attr('id', "fromAddress" + i);
        $(clone).find('#directions').attr('id', "directions" + i);
        clone.appendTo('body');

        i++;
      }
</script>
</head>
<body>
    
  <div id="divCloner">
    swag
    <input type="submit" id="swag-maggle" value="repetage de swag" onclick="cloneDiv('divCloner')"/>
     <input type="text" id="fromAddress" name="from" size="50" />
     <div id="directions">
         c'est ma directions
     </div>
  </div>
   




</body>
</html>