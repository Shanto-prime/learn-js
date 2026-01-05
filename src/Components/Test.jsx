import { useState } from "react";

export default function Test() {
  const [inputCount, setInputCount] = useState([{ id: 99, input: "name" }]);
  const handlePlusButton = () => {
    console.log(inputCount);
    const lastId = inputCount[inputCount.length - 1].id + 1;
    setInputCount([
      ...inputCount,
      {
        id: lastId,
        input: "address",
      },
    ]);
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        {inputCount.map((input) => (
          <div key={input.id}>
            <input
              id={input.id}
              placeholder={input.input}
              type="text"
              className="p-2 mt-3 border-amber-500 border-2"
            />
          </div>
        ))}
        <button onClick={handlePlusButton}>Add ANother Input</button>
      </div>
    </>
  );
}
