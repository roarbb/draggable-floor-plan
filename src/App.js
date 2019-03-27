import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FloorPlan from './Components/FloorPlan';
import FloorPlanLevel2 from './Components/floor-plan/FloorPlanLevel2';
import FloorPlanLevel1 from './Components/floor-plan/FloorPlanLevel1';
import ApiExample from './Components/ApiExample';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={FloorPlan} />
        <Route path="/level1" component={FloorPlanLevel1} />
        <Route path="/level2" component={FloorPlanLevel2} />
        <Route path="/api" component={ApiExample} />
      </div>
    </Router>
  );
}


export default App;