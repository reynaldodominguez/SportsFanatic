# Project-One: Sports Fanatic

### Project Description
Sports Fanatic is an easy to use application that helps the user stay up to date with their favorite sports teams, by providing the latest team information, most recent games, future events and information on team members and coaches.

### Team Members: 
 * Wendy Alers - Front End Development (Materialize, UX Designer, Javascript Developer)
 * Richard Conde - Front End Development (Materialize, UX Designer, HTML, CSS, Javascript)
 * Luis Dominguez - Backend Development (Javascript, API, Ajax)
 * Jose Robles - Backend Development , Application Design (Javascript, API, Ajax).
 
 ### Usage
 The application has been deployed on GitHub Pages, available at https://j0serobles.github.io/SportsFanatic/
 From the landing page, the user can follow one of the links for team leagues at the top of the page, or they can enter a team name in the search bar.  When following one of the league links (NFL, NBA, MLB, Soccer), they will be taken to a page showing all the teams under that league.  When searching for a team, if the team name is found, they will be shown the team page. 
 In the league teams page, the user can click on the team's logo or name to be taken to the team page for the selected team. 
 The team page is divided into sections displaying this information:
 
 1. **Team Information**
 
      This section contains an overview of the team's history and latest developments.
 
 2. **Recent Games**
 
      This section shows the 5 most recent games for the selected team, and their results (if available). 
 
 3. **Future Games**
 
      This section contains a listing of the next 5 games for the team, and a link to a site where they can purchage tickets for the event.
 
 4. **Team Players and Coaches**
 
      This section contains a listing of the team's players and their coaches, showing their picture and position played. 

### Technologies Used
moqups.com : Wireframe development, mockups. 

HTML, CSS, MaterializeCSS : Front End elements.

Javascript, JQuery : Application logic, Ajax API calls.

sportsDB.org : Database of sports information, accessed through their API's.

Ticketmaster.com: API's for future events information. 

Git, GitHub : Version control, Continuous Deployment.


### Project Structure
 
```
+
|
+ assets + 
|        |
+        + CSS +
|        |     |
|        |     + reset.css (CSS Resets)
|        |     |
|        |     + style.css (Custom Stylings)
|        |     
|        + images  (static images, icons, etc).
|        |
|        + javascript  +
|                      |
|                      + league.js  (Application logic for league objects)
|                      |
|                      + logic.js (General application logic, utilities, etc).
|                      |
|                      + player.js (Application logic for players)
|                      |
|                      + team.js (Application logic for team page) . 
|
+ README.md (This Document)
|
+ index.html (App root page)
|
+ team.html  (Team Information Page)
```

### Other Links
The presentation given during the demo can be reached at https://docs.google.com/presentation/d/1BH7A0TKbph-DsCv7OwSX7hz6LOuptNAB-WXZLxG6amA/edit?usp=sharing
