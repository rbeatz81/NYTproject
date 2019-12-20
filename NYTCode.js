function buildQueryURL() {
    var nytURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";

    var apiKey = "y9It4xe4xRUiYuSIDde2KDmSv37SvV36";
    //q=election&api-key=y9It4xe4xRUiYuSIDde2KDmSv37SvV36



    var term = $("#search-term").val().trim();

    var startYear = $("#start-year").val().trim();

    if (parseInt(startYear)) {
        startYear = startYear + "0101";
    }

    var endYear = $("#end-year").val().trim();

    if (parseInt(endYear)) {
        endYear = endYear + "0101";
    }

    var newUrl = nytURL + "q=" + term + "&begin-date=" + startYear + "&end-date=" + endYear + "key=" + apiKey;



    return newUrl;

}


function clear() {
    $("#article-section").empty;
}



// This function handles events where one button is clicked
$("#run-search").on("click", function () {

    event.preventDefault();


    clear();
    var url = buildQueryURL();

    $.ajax({
        url: url,
        method: "GET"

    }).then(function (response) {
        console.log(response);
    });
});

$("#clear-all").on("click", function () {
    clear();
});

