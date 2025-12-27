import { useState } from "react";
export default function Pointer() {
  const [x, setX] = useState("200");
  const [y, setY] = useState("100");
  return (
    <>
      <div
        className="relative h-dvh w-dvw"
        onPointerMove={(e) => {
          setX(e.clientX);
          setY(e.clientY);
        }}
      >
        <div
          className="absolute w-3 h-3 bg-red-600 rounded-full"
          style={{
            transform: `translate(${x}px,${y}px)`,
          }}
        ></div>
      </div>
    </>
  );
}
