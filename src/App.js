import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Router>

        {/* NavBar */}
        <Header/>

        {/* Routes */}
        <Route/>
        
      </Router>
    </div>
  );
}

export default App;
