import { useState } from "react";
import "./App.css";

function App() {
  const [bgColor, setBgColor] = useState("#ffffff");

  const handleClick = () => {
    setTimeout(() => {
      setBgColor((prevColor) => {
        let color = prevColor.slice(1).split("");
        const randomHex = () => Math.floor(Math.random() * 16).toString(16);
        const indices = [0, 2, 5];
        indices.forEach((i) => {
          color[i] = randomHex();
        });
        return `#${color.join("")}`;
      });
    }, 300);
  };
  return (
    <>
      <div
        onClick={handleClick}
        style={{
          backgroundColor: bgColor,
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "background-color 0.5s ease",
          cursor: "pointer",
        }}
      >
        <h1>Hello World</h1>
      </div>
    </>
  );
}

export default App;
