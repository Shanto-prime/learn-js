import { useCallback, useEffect, useState } from "react";

const RIPPLE_LIFETIME_MS = 700;
const MAX_RIPPLES = 15;

function Pointer() {
    const [ripples, setRipples] = useState([]);

    const handlePointerMove = useCallback((event) => {
        const ripple = {
            id: crypto.randomUUID(),
            x: event.clientX,
            y: event.clientY,
        };

        setRipples((prevRipples) => [
            ...prevRipples.slice(-MAX_RIPPLES),
            ripple,
        ]);

        const timeoutId = setTimeout(() => {
            setRipples((prevRipples) =>
                prevRipples.filter((r) => r.id !== ripple.id),
            );
        }, RIPPLE_LIFETIME_MS);

        return () => clearTimeout(timeoutId);
    }, []);

    useEffect(() => {
        window.addEventListener("pointermove", handlePointerMove);

        return () => {
            window.removeEventListener("pointermove", handlePointerMove);
        };
    }, [handlePointerMove]);

    return (
        <div className="fixed inset-0 z-50 pointer-events-none">
            {ripples.map((ripple) => (
                <div
                    key={ripple.id}
                    className="absolute w-3 h-3 rounded-full cursor-ripple"
                    style={{
                        left: `${ripple.x}px`,
                        top: `${ripple.y}px`,
                        transform: "translate(-50%, -50%)",
                    }}
                />
            ))}
        </div>
    );
}

export default Pointer;
