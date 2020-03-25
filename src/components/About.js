import React from "react";
import bpic from "../assets/brayden.jpeg";

function About(){
    return (
        <div class="container">

        <br/>
  
        <div class="row justify-content-start">
  
          <div class="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
  
            <div class="card border">
              <div class="card-body">
                
                <h2 class="tc-teal">About Me</h2>
  
                <hr/>
  
                <img src={bpic} alt="Brayden DeLoach" class="float-left m-2" id="profile-picture"/>
  
                <p>
                  I am a fullstack Web Developer with education from UT Austin and a Certificate in Full Stack Development from Southern Methodist University.
                  I have skills in HTML, CSS, and Javascript and strengths in problem solving, meeting deadlines, and learning new technologies.
                  When working on projects, I strive to create a flexible product that’s easy to navigate, easy to update, and easy to look at.
                  I am excited to employ skills and partner with like-minded staff to create and improve websites in innovative ways.
                </p>
              </div>
            </div>
  
          </div>
        </div>
  
      </div>
    );
}

export default About;