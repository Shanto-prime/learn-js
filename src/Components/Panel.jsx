import { useState } from "react";
export default function Panel({ title, children }) {
    const [isShow, setIsShow] = useState(false);
    const handleShow = () => setIsShow(!isShow);
    return (
        <>
            <div className="p-2 m-2 border-amber-500 border-2">
                <h3>{title}</h3>
                {isShow ? (
                    <p>{children}</p>
                ) : (
                    <button
                        onClick={handleShow}
                        className="text-red-500 border-2 border-red-500 rounded-2xl px-2 mx-3"
                    >
                        Show
                    </button>
                )}
            </div>
        </>
    );
}
