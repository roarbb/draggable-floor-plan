import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FloorPlan from './Components/FloorPlan';
import FloorPlanTemplate from './Components/floor-plan/FloorPlanTemplate';
import ApiExample from './Components/ApiExample';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={FloorPlan} />
        <Route path="/template" component={FloorPlanTemplate} />
        <Route path="/api" component={ApiExample} />
      </div>
    </Router>
  );
}


export default App;