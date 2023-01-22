import "./App.css";
import Home from "./components/Home";

function App() {
  const title = "Welcome to the dojo blog";
  const subtitle = "Enter at your own risk!";
  return (
    <div className="App">
      <div className="content"></div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <Home />
    </div>
  );
}

export default App;
