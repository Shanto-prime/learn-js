import { useState } from "react";
import ScoreBoard from "./ScoreBoard";
export default function Counter() {
    const [showCountBox, setShowCountBox] = useState(false);
    return (
        <>
            <h2>Counters</h2>
            <div className="flex ">
                <ScoreBoard />
                {showCountBox && <ScoreBoard />}
                <button
                    className="text-red-500 border-2 border-red-500 rounded-2xl px-2 mx-3"
                    onClick={() => setShowCountBox(!showCountBox)}
                >
                    {showCountBox ? "Hide" : "Show"}
                </button>
            </div>
        </>
    );
}
