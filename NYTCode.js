function buildQueryURL() {
    var nytURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";

    //q=election&api-key=y9It4xe4xRUiYuSIDde2KDmSv37SvV36



    var term = $("#search-term").val().trim();

    var startYear = $("#start-year").val().trim();

    var endYear = $("#end-year").val().trim();

    var newUrl = nytURL + "q=" + term + "&begin-date=" + startYear + "&end-date=" + endYear;



    return newUrl;

}


function clear() {
    $("#article-section").empty;
}



// This function handles events where one button is clicked
$("#run-search").on("click", function () {

    event.preventDefault();



    var url = buildQueryURL();
    console.log("Hello");
    console.log("" + url);

    clear();

    // console.log("" + term);
    // console.log("" + startYear);
    // console.log("" + endYear);



});