/////////////////////////////////////////////////////////////////////////////////////
// .NAME
//   team.js
// .WHAT
//   Contains the logic calling the API's and populating the regions in the
//   "Teams" page. 
// .AUTHOR
//   SportsFan App team. 
// .DATE
//   27-JUL-2019
// .NOTES
//   There is one function for each section in the page. Each function calls the
//   SportsDB API and fetches the data, and populates the HTML elements in the page.
//////////////////////////////////////////////////////////////////////////////////////

//functions
function getTeamDescription(idTeam) {

    //Given the idTeam parameter, return the team description field from the API data.
    //event.preventDefault(); // Prevent default form processing.

    var queryURL = "https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=" + idTeam;


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        renderTeamDescCallback(response);
    });

}

// Function to render the data from the API call to the page.
// This version sends the data to the test-table in index.html
// The JQuery selectors must be changed to send the data to the correct page
// when they become available. 

function renderTeamDescCallback(ajaxResult) {

    $("#team_test_table thead").empty();
    $("#team_test_table tbody").empty();

    //Create the table headings and append to <thead>:
    var th_tr1 = $("<th scope='col'>");
    th_tr1.text("Team Name");
    var th_tr2 = $("<th scope='col'>");
    th_tr2.text("Team Description");
    $("#team_test_table thead").append(th_tr1).append(th_tr2);

    //Create each row in the table and append to <tbody>

    //Create the row element for the table
    var tr = $("<tr>");
    tr.attr("data-rowkey", ajaxResult.teams[0].idTeam);
    //Create a <td> element the remaining elements from the ajaxResult
    var column1 = $("<td>").text(ajaxResult.teams[0].strTeam);
    var column2 = $("<td>").text(ajaxResult.teams[0].strDescriptionEN);
    upcominEvents(ajaxResult.teams[0].strTeam);
    //Append the <td>'s to the <tr>
    tr.append(column1).append(column2);

    //Append the row to the <tbody>
    $("#team_test_table tbody").append(tr);
};


$(function () {

    console.log("team.js: Javascript OK");

    $.urlParam = function (name) {
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        if (results == null) {
            return null;
        }
        return decodeURI(results[1]) || 0;
    }


    getTeamDescription($.urlParam("idTeam"));

});


function upcominEvents(team) {
    console.log(team);
    var queryURL = "https://app.ticketmaster.com/discovery/v2/events?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&keyword=" + team + "&locale=*";


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        //get the next 5 events of the team from ticket master
        for(var i=0; i<5; i++){
        //date of the game
        console.log(response._embedded.events[i].dates.start.localDate); 
        //time of the game
        console.log(response._embedded.events[i].dates.start.localTime);
        //name and teams of the game
        console.log(response._embedded.events[i].name); 
        //url to buy tickets to the game
        console.log(response._embedded.events[i].url); 
        }
    });
}

