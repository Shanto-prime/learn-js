import { useState } from "react";

export default function Test() {
    const [items, setItems] = useState(["hello", "hi"]);
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            setItems((prevItems) => [...prevItems, inputValue.trim()]);
            setInputValue("");
        }
    };

    return (
        <>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter an item"
                />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}
