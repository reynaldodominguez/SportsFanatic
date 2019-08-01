/////////////////////////////////////////////////////////////////////////////////////
// .NAME
//   players.js
// .WHAT
//   Contains the logic calling the API's and populating the HTML page regions 
//   for anything related to a teams's players.  
// .AUTHOR
//   SportsFan App team. 
// .DATE
//   27-JUL-2019
// .NOTES
//   There is one function for each section in the page. Each function calls the
//   SportsDB API and fetches the data, and populates the HTML elements in the page.
//////////////////////////////////////////////////////////////////////////////////////

//functions:
//Retrieve all the players in a team.

function getPlayersInTeam( idTeam ) {

    //event.preventDefault(); // Prevent default form processing.

    var queryURL = "https://www.thesportsdb.com/api/v1/json/1/lookup_all_players.php?id=" + idTeam ;
    
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then( function (response)  { 
          console.log(response);
          renderPlayersCallback(response) ; 
      } );

}

// Function to render the data from the API call to the page.
// This version sends the data to the a table element.
// TODO: The JQuery selectors must be changed to send the data to the correct page. 
function renderPlayersCallback( ajaxResult ) {

    $( "#players_table thead" ).empty();
    $( "#players_table tbody" ).empty();
    
    //Create the table headings and append to <thead>:
      var th_tr1     = $("<th scope='col'>") ;
      th_tr1.text("Player Name"); 
      var th_tr2     = $("<th scope='col'>") ;
      th_tr2.text("Pic");
      th_tr3         = $("<th scope='col'>");
      th_tr3.text("Bio"); 

      $( "#players_table thead" ).append(th_tr1).append(th_tr2).append(th_tr3);
      var divRow = $('<div>').attr('class', 'row');
    //Create each row in the table and append to <tbody>
    for (var i = 0; i < ajaxResult.player.length; i++) {
        //Create the row element for the table

        var tr = $("<tr>"); 
        tr.attr("data-rowkey", ajaxResult.player[i].idPlayer); 
        
        //Create a <td> element the remaining elements from the ajaxResult
        var column1 = $("<td>").text(ajaxResult.player[i].strPlayer);
        //column1.addClass("team_name");

        console.log (ajaxResult.player[i].strThumb);
        var column2 = $("<td>").html("<img src='" + ajaxResult.player[i].strThumb + "' style='width:100px;height:100px'>");
        //column2.addClass("team_logo");

        var column3 = $("<td>").text(ajaxResult.player[i].strDescriptionEN);

        //Append the <td>'s to the <tr>
        tr.append(column1).append(column2).append(column3); 
 
        //Append the row to the <tbody>
        $("#players_table tbody").append(tr);

    ////////////////////////////////////////////////////////////////////////////
                            //Adding rick-branch code
        //var divRow = $('<div>').attr('class', 'row');
        var divCol = $('<div>').attr('class', 'col s12 m4');
        divRow = divRow.append(divCol);
        var divCard = $('<div>').attr('class', 'card player-card grey lighten-1');
        divCol = divCol.append(divCard);
        var divCardImage = $('<div>').attr('class', 'card-image player-card-image');
        divCard = divCard.append(divCardImage);
        var img = $('<img>').attr('src', ajaxResult.player[i].strThumb).attr('class', 'Player-img');
        var playerName =$('<h5>').attr('class', 'player-name center-align').text(ajaxResult.player[i].strPlayer);
        var span1 = $('<h4>').attr('class', 'center-align player-position').text('Position: ' + ajaxResult.player[i].strPosition);
        var span2 = $('<h4>').attr('class', 'center-align player-position').text('Height:' + ajaxResult.player[i].strHeight);
        divCardImage = divCardImage.append(img).append(playerName).append(span1).append(span2);
       // $('#players-on-team').append(divRow);
    };
    $('#players-on-team').append(divRow);
}




///////////////////////////////////////////////////////////////
// Main
///////////////////////////////////////////////////////////////
$( function () { 

    console.log("Players.js: Javascript OK");    
    
    $.urlParam = function(name){
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        if (results==null) {
           return null;
        }
        return decodeURI(results[1]) || 0;
    }
    
    getPlayersInTeam($.urlParam( "idTeam" ) ) ; 

});



 
