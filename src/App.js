import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div>
      <Router>

        {/* NavBar */}
        <Header/>

        {/* Routes */}
        <Route exact path="/react-portfolio" component={About}/>
        <Route exact path="/react-portfolio/contact" component={Contact}/>
        <Route exact path="/react-portfolio/portfolio" component={Portfolio}/>

      </Router>
    </div>
  );
}

export default App;
