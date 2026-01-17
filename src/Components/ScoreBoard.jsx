import { useState } from "react";
export default function ScoreBoard() {
    const [number, setNumber] = useState(0);
    return (
        <>
            <div className="border-amber-500 border-2 p-5 m-3 rounded-2xl flex items-center">
                <h1 className="m-2">{number}</h1>
                <div className="m-2 flex flex-col justify-center items-center bg-amber-500 rounded-2xl w-10 h-10">
                    <button
                        className="bg-amber-500 rounded-2xl"
                        onClick={() => setNumber(number + 1)}
                    >
                        +
                    </button>
                </div>
            </div>
        </>
    );
}
