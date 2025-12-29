import { useState } from "react";

export default function Pointer() {
  const [ripples, setRipples] = useState([]);

  const handlePointerMove = (e) => {
    const ripple = {
      id: crypto.randomUUID(),
      x: e.clientX,
      y: e.clientY,
    };

    setRipples((prev) => [...prev, ripple]);

    // remove after animation
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== ripple.id));
    }, 700);
  };

  return (
    <div
      className="relative h-dvh w-dvw overflow-hidden"
      onPointerMove={handlePointerMove}
    >
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="pointer-events-none absolute w-3 h-3 rounded-full cursor-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </div>
  );
}
