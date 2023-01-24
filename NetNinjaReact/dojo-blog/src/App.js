import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//Switch is removed from version 6 rrd

function App() {
  const title = "Welcome to the dojo blog";
  const subtitle = "Enter at your own risk!";
  return (
    <Router>
      <div className="App">
        <div className="content"></div>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <Routes>
          <Route path="/" element={<Home />} >
           </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
