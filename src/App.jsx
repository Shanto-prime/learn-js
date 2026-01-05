import { useEffect } from "react";
import "./App.css";
import Form from "./Components/Form";
import Pointer from "./Components/Pointer";
import Test from "./Components/Test";
export default function App() {
  useEffect(() => {
    const interval = setInterval(() => {
      const randomNumber = Math.floor(Math.random() * 100);
      console.log(`hello hi ${randomNumber}`);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="text-center grid grid-cols-3 justify-center m-10">
        <div className="m-2 flex justify-center">
          <h2>20+10-5-4-3-2-1</h2>
          <p>=</p>
          <Form />
        </div>
      </div>
      <Test />
      <Pointer />
    </>
  );
}
