import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [name, setName] = useState("Amisha");

  const [car, setCar] = useState("BMW");

  // useEffect(() => {
  //   alert(car);
  // }, [car]);

  // const [details, setDetails] = useState([
  //   { fName: "Amisha", lName: "Prathyanga", age: 23, id: 1 },
  //   { fName: "Jack", lName: "Ryan", age: 35, id: 2 },
  //   { fName: "Amisha", lName: "Simmons", age: 43, id: 3 },
  // ]);

  const [details, setDetails] = useState(null);

  const [isPending, setIsPennding] = useState(true);

  // const handleDelete = (id) => {
  //   const newDetail = details.filter((detail) => detail.id !== id);
  //   setDetails(newDetail);
  // };

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setDetails(data);
          setIsPennding(false);
        });
    }, 1000);
  }, []);

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
      <h2>{car}</h2>
      <h2>{name}</h2>
      <button onClick={handleClick}>Click Me</button>

      {/* Wraps the handle function inside another function to pass parameters */}
      <button onClick={() => handleClickAgain(" Bro!")}>Click Me Again</button>
      <button onClick={() => setCar("Mercedes")}>Change Car</button>

      {isPending && <div>Loading.....</div>}

      {/* Props used to pass data from parent component to a child component */}
      {details && (
        <BlogList
          details={details}
          title="All Details!"
          // handleDelete={handleDelete}
        />
      )}
      {/* <BlogList
        details={details.filter((detail) => detail.fName === "Amisha")}
        title="All Amisha Details!"
      /> */}
    </div>
  );
};

export default Home;
