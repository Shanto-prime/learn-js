import { useState } from "react";
export default function Counter() {
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
      <form onSubmit={handleClick}>
        <input
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
