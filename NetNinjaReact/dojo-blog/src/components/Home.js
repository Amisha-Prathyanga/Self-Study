import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [name, setName] = useState("Amisha");

  const [details, setDetails] = useState([
    { fName: "Amisha", lName: "Prathyanga", age: 23 },
    { fName: "Jack", lName: "Ryan", age: 35 },
    { fName: "Jhon", lName: "Simmons", age: 43 },
  ]);

  const handleClick = () => {
    alert("Hello Bro!");
  };

  const handleClickAgain = (name) => {
    alert("Hello Again" + name);
    setName("Prathyanga");
  };
  return (
    <div className="home">
      <h3>Home</h3>
      <h2>{name}</h2>
      <button onClick={handleClick}>Click Me</button>

      {/* Wraps the handle function inside another function to pass parameters */}
      <button onClick={() => handleClickAgain(" Bro!")}>Click Me Again</button>

    {/* Props used to pass data from parent component to a child component */}
     <BlogList details={details} title="All Details!"/>
    </div>
  );
};

export default Home;
