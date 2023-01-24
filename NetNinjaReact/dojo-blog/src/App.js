import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from "./components/Create";
import Navbar from "./components/Navbar";
import BlogDetails from './components/BlogDetails';
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
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/blogs/:id" element={<BlogDetails />} /> 
          {/* Route parameters above one */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
