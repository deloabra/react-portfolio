import React from "react";
import Project from "./Project";
import quizGif from "../assets/Quiz.gif";
import ratPic from "../assets/ratPic.png";
import weatherPic from "../assets/weatherPic.png";
import wellnessPic from "../assets/WellnessJourney.png";

function Portfolio(){
    return (
        <div class="container position-relative">

        <br/>
  

        <div class="row justify-content-start">
  
          <div class="col-12 col-sm-12 col-md-8 col-lg-7 col-xl-7">
  

            <div class="card border">
              <div class="card-body">
                
                  <h2 class="tc-teal">Portfolio</h2>
  
                  {/* Wellness Journey */}
                  <Project
                    title={"My Wellness Journey"}
                    live={"http://project-2-4.herokuapp.com/"}
                    repo={"https://github.com/deloabra/project2"}
                    description={"Website that lets you make and keep track of a wellness goal and share your progress with others."}
                    details={[
                        "Worked with a team of four to create a full website that saves user info and messages in a MySQL database and allows you to view, change, or add to them with a good looking user interface.",
                        "Tools used: Express, Express-Handlebars, HTML 5, CSS, Javascript, jQuery, Passport.js, MySQL, Bulma CSS framework"
                    ]}
                    src={wellnessPic}
                    alt={"screenshot of Wellness Journey"}
                  />

                  {/* Recipe Rat */}
                  <Project
                    title={"Recipe Rat"}
                    live={"https://deloabra.github.io/recipe-rat/"}
                    repo={"https://github.com/deloabra/project-1"}
                    description={"Front end website that searches through API’s to get recipe information."}
                    details={[
                        "Led a team of four to create a front end website that searches a database for a recipe based on user input and displays the calorie count of every ingredient, allowing for customization of the recipe.",
                        "Tools used: HTML 5, CSS, Javascript, jQuery, Bootstrap, theMealDB API (search for recipes), and Edamam Nutritional Analysis API (search for nutritional information of ingredients)"
                    ]}
                    src={ratPic}
                    alt={"screenshot of recipe rat"}
                  />

                  {/* Employee Tracker */}
                  <Project
                    title={"Employee Tracker"}
                    repo={"https://github.com/deloabra/employee-tracker"}
                    description={"Node.js CLI Application that allows you to view and edit a database of employees, Roles, and Departments."}
                    details={["Tools Used: Node.js, MySQL, Inquirer"]}
                  />

                  {/* Team Generator */}
                  <Project
                    title={"Team Generator"}
                    repo={"https://github.com/deloabra/team-generator"}
                    description={"Node.js CLI Application that that takes user input about a manager's team members and creates an HTML file that tastefully displays each employees' information."}
                    details={["Tools Used: Node.js, Inquirer"]}
                  />

                  {/* Weather Dashboard */}
                  <Project
                    title={"Weather Dashboard"}
                    live={"https://deloabra.github.io/stunning-weather/"}
                    repo={"https://github.com/deloabra/stunning-weather"}
                    description={"Front end website that displays the weather forecast for a user inputted city."}
                    details={[
                        "My Weather Dashboard features dynamically updated HTML based on user input that uses the OpenWeather API to display the weather forecast of the city searched by the user for the next six days.",
                        "Tools used: HTML 5, CSS, Javascript, jQuery, Bootstrap, OpenWeather (retrieve forecast information)"
                    ]}
                    src={weatherPic}
                    alt={"screenshot of weather dashboard"}
                  />

                  {/* Dynamic Quiz */}
                  <Project
                    title={"Dynamic Quiz"}
                    live={"https://deloabra.github.io/dynamic-quiz/"}
                    repo={"https://github.com/deloabra/dynamic-quiz"}
                    description={"Front end website that uses dynamic HTML and localstorage to function as a quiz game with saved high scores."}
                    details={["Tools used: HTML 5, CSS, Javascript"]}
                    src={quizGif}
                    alt={"gif of Dynamic Quiz in action"}
                  />
                
              </div>
            </div>
  
          </div>
        </div>
  
  
      </div>
    );
}

export default Portfolio;