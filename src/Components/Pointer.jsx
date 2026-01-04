import { useEffect, useState } from "react";

export default function Pointer() {
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    const handleMove = (e) => {
      console.log(e);
      const ripple = {
        id: crypto.randomUUID(),
        x: e.clientX,
        y: e.clientY,
      };

      setRipples((prev) => [...prev.slice(-15), ripple]);

      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== ripple.id));
      }, 700);
    };

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="absolute w-3 h-3 rounded-full cursor-ripple"
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
