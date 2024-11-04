import React from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import RewardsTracker from "./pages/RewardsTracker";
import './App.css'

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<RewardsTracker />} />
      </Routes>
    </Router>
  );
}
  


export default App
