function getDataFromAPI() {
    // Check if the jQuery library has been imported
    if (typeof $ === 'undefined') {
        alert('jQuery is not loaded');
        return;
    }

    // Check if the DOM elements exist
    if (!$("#age").length || !$("#marry").length || !$("#results_container").length) {
        alert('One of the required elements is missing from the search');
        return;
    }

    var age = $("#age").val();
    var marry = $("#marry").val();

    // Check if the values of the input elements are not empty
    if (!age || !marry) {
        alert('Both age and marital status are required');
        return;
    }

    marry = marry.toLowerCase();

    var url = "https://data.novascotia.ca/resource/kak2-qqg9.json"; 
    url +=  "?$where=ageyears%20%3C%20" + parseInt(age) + "%20AND%20marriedstatus=%27" + marry + "%27";

    $.get(url, function(data, status){
        // Check if the API request was successful
        if (status !== 'success') {
            alert('An error occurred while retrieving data from the API');
            return;
        }

        console.log(data, status);
        // Alert the user if nothing was found, otherwise show the results.
        if (data.length === 0) {
            alert("No results returned.");
            // Empty the results container (in case it contained data from a previous search)
            $("#results_container").html("<br/>");
        } else {
            // Iterate over the array of results and construct some HTML
            var htmlString = "<p>" + data.length + " results found.</p>";
            htmlString += "<ul>";
            for(var i = 0; i < data.length; i++) {
                htmlString += "<li>" + data[i].firstname + " " + data[i].lastname + ", Died in the year " + data[i].regyear + 
                ", at the age of " + data[i].ageyears + " years old. They were " + data[i].marriedstatus + 
                ", and their ancestry could be traced back to the " + data[i].race + "." + "</li>";
            }
            htmlString += "</ul>";

            $("#results_container").html(htmlString);
        }
    });    
}

window.addEventListener("load", (event) => {
    const el = document.getElementById("getdata_btn");
    el.addEventListener("click", getDataFromAPI, false);
});