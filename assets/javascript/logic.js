console.log('logic.js is connected');
var teams = [];
$(document).ready(function(){
    console.log('js connected');
  //Hides the leauge page on load
    $('.div2').hide();

 //Materialize init
    $('.slider').slider({
      indicators: true,
      height: 400,
      transition: 500,
      interval: 6000
    }); 
    
    
    
   
    
    
    });

    var leagues = ["nba", "nfl", "mlb", "American Major League Soccer"];
    for(var i = 0; i < leagues.length; i++){
      console.log(leagues[i]);
    var queryURL = "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=" + leagues[i];


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
      //console.log(response);
      for(var j = 0; j < response.teams.length;j++){
        //console.log(response.teams[j].strTeam);
        teams.push(response.teams[j].strTeam);
       
      }  
      
    });
    //console.log(teams);
  }
    
  console.log(teams);