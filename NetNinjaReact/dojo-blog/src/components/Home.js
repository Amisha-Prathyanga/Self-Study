import { useState } from "react";

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

      {details.map((detail) => (
        <div className="detail-preview">
          <h3>{detail.fName}</h3>
          <h4>{detail.lName}</h4>
        </div>
      ))}
    </div>
  );
};

export default Home;
