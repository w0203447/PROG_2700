
$(document).ready(function(){   

    $("#returnproperty_button").click(function(){
        var styleinfo = $("#content_div").css("border");
        alert(styleinfo);
    });

    $("#addproperty_button").click(function(){
        $("#content_div").css({ "font-size" : "20pt" });
    });

    $("#addproperties_button").click(function(){
        $("#content_div").css({ "font-size" : "12pt", "color" : "red", "font-family" : "Courier", "background-color" : "black", "text-align" : "center"});
        $("#content_div").html("<h1>THIS IS FUN!</h1>");
    });

});
