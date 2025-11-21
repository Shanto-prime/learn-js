import { useState } from "react";
import "./App.css";
export default function App() {
  const [names, setNames] = useState([]);
  const [name, setName] = useState("");

  function handleClick(e) {
    e.preventDefault();
    if (name.trim() === "") return;
    setNames([...names, name]);
    setName("");
  }

  return (
    <>
      <form className="mt-4" onSubmit={handleClick}>
        <input
          name="name"
          type="text"
          placeholder="your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {names.map((n) => (
          <li key={n}>{n}</li>
        ))}
      </ul>
    </>
  );
}
