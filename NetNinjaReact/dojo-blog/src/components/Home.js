const Home = () => {
  const handleClick = () => {
    alert("Hello Bro!");
  };

  const handleClickAgain = (name) => {
    alert("Hello Again" + name);
  };
  return (
    <div className="home">
      <h3>Home</h3>
      <button onClick={handleClick}>Click Me</button>

      //Wraps the handle function inside another function to pass parameters
      <button onClick={() => handleClickAgain(" Bro!")}>Click Me Again</button>
    </div>
  );
};

export default Home;
