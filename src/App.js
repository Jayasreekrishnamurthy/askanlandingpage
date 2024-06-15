import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./Components/HomePage/home";

function App() {
  return (
    <Router>
    <div className="App">
        <Routes>
            <Route path="/" element={<Home />}></Route>
        </Routes>
    </div>
</Router>
  );
}

export default App;
