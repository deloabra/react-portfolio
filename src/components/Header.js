import React from "react";
import {Link} from "react-router-dom";
import "./Header.css";

function Header(){


    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <div class="container-fluid">
        <Link class="navbar-brand bg-teal text-white px-2 py-2 ml-1 my-0" to="/react-portfolio">Brayden DeLoach</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse flex-row-reverse" id="navbarNav">
          <ul class="nav navbar-nav">
            <li class="nav-item">
                <Link class="nav-link border-right py-0" to="/react-portfolio" tabindex="-1" aria-disabled="true">About</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link border-right py-0" to="/react-portfolio/portfolio" tabindex="-1" aria-disabled="true">Portfolio</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link py-0" to="/react-portfolio/contact" tabindex="-1" aria-disabled="true">Contact</Link>
            </li>
          </ul>
        </div>
        </div>
      </nav>
    );
}

export default Header;