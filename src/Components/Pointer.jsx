import { useState } from "react";
export default function Pointer() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  return (
    <>
      <div
        className="relative h-dvh w-dvw"
        onPointerMove={(e) => {
          setMousePosition({ x: e.clientX, y: e.clientY });
        }}
      >
        <div
          className="absolute w-3 h-3 bg-red-600 rounded-full transform -translate-x-1/2 -translate-y-1/2"
          style={{
            transform: `translate(${mousePosition.x}px,${mousePosition.y}px)`,
          }}
        ></div>
      </div>
    </>
  );
}
