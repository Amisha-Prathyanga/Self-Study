import {useState} from 'react';


const Home = () => {
    const [name, setName] = useState("Amisha");
  

  const handleClick = () => {
    alert("Hello Bro!");
  };

  const handleClickAgain = (name) => {
    alert("Hello Again" + name);
    setName('Prathyanga');
  };
  return (
    <div className="home">
      <h3>Home</h3>
      <h2>{name}</h2>
      <button onClick={handleClick}>Click Me</button>

      {/* Wraps the handle function inside another function to pass parameters */}
      <button onClick={() => handleClickAgain(" Bro!")}>Click Me Again</button>
    </div>
  );
};

export default Home;
