import { useEffect } from "react";
import "./App.css";
import Pointer from "./Components/Pointer";
import TravelPlan from "./Components/TravelPlan";
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
      <TravelPlan />
      <Pointer />
    </>
  );
}
