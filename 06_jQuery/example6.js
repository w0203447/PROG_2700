

function animateMyDiv() {

    $("#content_div").animate({right: '600px'});

    $("#content_div").animate({bottom: '600px'});

    //multiple params
    $("#content_div").animate({bottom: '200px',  opacity: '0.8',  height: '100px',  width: '100px'});

    //animate with a 'callback' function (fired when animation is complete)
    $("#content_div").animate({right: '250px'}, function() {
        allDone();
    });
}

function allDone() {
    alert("I changed code like a big boy!.");
}


$(document).ready(function(){   
    $("#animate_button").click(function(){
        animateMyDiv();
    });
});

