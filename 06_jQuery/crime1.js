
function getDataFromAPI() {
    var url = "";
    //
    //

    $.get(url, function(data, status){
        console.log(data, status);
        //
        //
        //
        //
    });    
}

window.addEventListener("load", (event) => {

    $("#pleasewait").hide();
    $("#geography").focus();

    const el = document.getElementById("getdata_btn");
    el.addEventListener("click", getDataFromAPI, false);
});