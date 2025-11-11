import Test from "./Components/Test";

function App() {
  function handleClick(name) {
    console.log(`${name} banano hocche`);
  }

  return (
    <>
      <div style={{ textAlign: "center", padding: "20px", background: "red" }}>
        <h1>Hello World</h1>
        <Test />
        <Vorta
          aluVorta={() => handleClick("Alu vorta")}
          tometuVorta={() => handleClick("Tometu vorta")}
          begunVorta={() => handleClick("Begun vorta")}
          lettuceVorta={() => handleClick("Lettuce vorta")}
        />
      </div>
    </>
  );
}

function Vorta({ aluVorta, tometuVorta, begunVorta, lettuceVorta }) {
  return (
    <div>
      <Button onBlend={aluVorta}>Smash Potato's</Button>
      <Button onBlend={tometuVorta}>Smash Tomato's</Button>
      <Button onBlend={begunVorta}>Smash Eggplant's</Button>
      <Button onBlend={lettuceVorta}>Smash Lettuce's</Button>
    </div>
  );
}

function Button({ onBlend, children }) {
  return (
    <button
      onClick={onBlend}
      style={{
        padding: "10px",
        borderRadius: "5px",
        background: "transparent",
        border: "1px solid white",
        color: "white",
        margin: "5px",
      }}
    >
      {children}
    </button>
  );
}

export default App;
