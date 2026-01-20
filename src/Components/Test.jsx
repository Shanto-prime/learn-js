import { useState, useRef, useEffect } from "react";

export default function Test() {
    const [items, setItems] = useState(["hello", "hi"]);
    const [inputValue, setInputValue] = useState("");
    const [editingIndex, setEditingIndex] = useState(null);
    const [editValue, setEditValue] = useState("");
    const inputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            setItems((prevItems) => [...prevItems, inputValue.trim()]);
            setInputValue("");
            inputRef.current.focus();
        }
    };

    const handleEdit = (index) => {
        setEditingIndex(index);
        setEditValue(items[index]);
    };

    const handleSave = () => {
        if (editValue.trim()) {
            setItems((prevItems) =>
                prevItems.map((item, i) => (i === editingIndex ? editValue.trim() : item))
            );
        }
        setEditingIndex(null);
    };

    const handleDelete = (index) => {
        setItems((prevItems) => prevItems.filter((_, i) => i !== index));
        setEditingIndex(null);
    };

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    return (
        <div className="max-w-md mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
            <ul className="space-y-2 mb-4">
                {items.map((item, index) => (
                    <li key={index} className="flex items-center justify-between bg-white p-2 rounded">
                        {editingIndex === index ? (
                            <div className="flex items-center space-x-2 w-full">
                                <input
                                    type="text"
                                    value={editValue}
                                    onChange={(e) => setEditValue(e.target.value)}
                                    className="flex-1 p-1 border rounded"
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") handleSave();
                                        if (e.key === "Escape") setEditingIndex(null);
                                    }}
                                />
                                <button
                                    onClick={handleSave}
                                    className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                                >
                                    Save
                                </button>
                                <button
                                    onClick={() => handleDelete(index)}
                                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                                >
                                    Delete
                                </button>
                            </div>
                        ) : (
                            <>
                                <span>{item}</span>
                                <button
                                    onClick={() => handleEdit(index)}
                                    className="text-blue-500 hover:text-blue-700"
                                >
                                    ✏️
                                </button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
            <form onSubmit={handleSubmit} className="flex space-x-2">
                <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter an item"
                    className="flex-1 p-2 border rounded"
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
