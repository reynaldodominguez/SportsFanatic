/////////////////////////////////////////////////////////////////////////////////////
// .NAME
//   lgic.js
// .WHAT
//   Contains functions that are used throughout the Sports Fan Application.
// .AUTHOR
//   SportsFan App team. 
// .DATE
//   01-AUG-2019
// .NOTES
//   
//   
//////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////
// Globals
//////////////////////////////////////////
var teams = [];  // Gets populated with all teams for all leagues when program starts.
var hits  = [];  // Gets populated with teams matching the searchTerm.

//////////////////////////////////////////
//Functions
//////////////////////////////////////////
// Populates the teams[] array when loaded.
function populateSearchTerms () { 
  var leagues = ["NBA", "NFL", "MLB", "NHL", "American Major League Soccer"];
  for(var i = 0; i < leagues.length; i++){
    var queryURL = "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=" + leagues[i];
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        for(var j = 0; j < response.teams.length;j++){
          var teamObject = {};
          teamObject['idTeam'] = response.teams[j].idTeam;
          teamObject['strTeam'] = response.teams[j].strTeam;
          teamObject['strLeague'] = response.teams[j].strLeague;
          teamObject['strStadiumLocation'] = response.teams[j].strStadiumLocation;
          teams.push(teamObject);  
      }
  });
}
}


//Search function: Given a searchTerm, lookup the team in the array populated by populateSearchTerms
function search( searchTerm ) {
  //If teams[] array is empty, return (maybe it is still loading or is empty for some reason)
  if(teams.length === 0) {
    return;
  }
  
  var convertedSearchTerm = searchTerm.toUpperCase(); 
  hits.length = 0; 

  for ( var i = 0; i < teams.length; i++ ) { 
  // Search the searchTerm in teams[i], place hits in hits[]
  var convertedTeamObject = JSON.stringify(teams[i]).toUpperCase(); 
  if (convertedTeamObject.search(convertedSearchTerm) !== -1) {
      //A hit!  Put object in hits[]
      hits.push( teams[i] );
  }
}
}
 
//////////////////////////////////////////
//Calls 
//////////////////////////////////////////
console.log('logic.js : javascript OK');

//Hides the leauge page on load
$(document).ready(function(){
  $('.div2').hide();

 //Materialize init

 $( '.modal' ).modal();

 $('.slider').slider({
   indicators: true,
   height: 400,
   transition: 500,
   interval: 6000
 });

 // Load teams from all leagues, only if teams[] is empty, so it does not get called every time.
 if (teams.length === 0) {
   populateSearchTerms();
 }

 
 // Make the search icon submit the form when clicked
 $( "#search_icon").click ( function (event) {
     $( "#search-bar").submit();
 });

 $( "#modal-dismiss").click( function(event) {
     $( ".modal" ).modal('close'); 
 })


//Runs when the user enters a search term and presses <Enter>
 $( "#search-bar" ).submit( function (event) { 

   event.preventDefault();
   console.log ("Search Term:" + $("#search_term").val() );
   search( $("#search_term").val() );
   console.log (hits);  
   $("#modal-body").empty();
   if(hits.length > 0) { 
     hits.forEach( function ( teamObject, teamIndex ) {
       //create <a> link
       var teamLink = $("<a target='_blank' href=team.html?idTeam=" + teamObject.idTeam + ">");
       teamLink.text(teamObject.strTeam + " (" + teamObject.strLeague+ ")");
       $("#modal-body").append(teamLink);
       $("#modal-body").append("<br>"); 
       $(".modal").modal('open'); 
   });
  } else { 
    var noHitMsg = "Sorry, no team was found for " + $("#search_term").val(); 
    $("#modal-body").text(noHitMsg); 
    $(".modal").modal('open'); 
  }
  
});

}); // end of $(document).ready()
