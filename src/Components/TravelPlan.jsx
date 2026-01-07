import { useState } from "react";
import { initialTravelPlan } from "../data/places";
import TravelTree from "./TravelTree";
export default function TravelPlan() {
  const [plan, setPlan] = useState(initialTravelPlan);
  const Planets = plan.childPlaces;
  return (
    <>
      <h5>TravelPlan</h5>
      <ol className="pl-4 list-decimal list-inside">
        {Planets.map((planet) => (
          <TravelTree key={planet.id} place={planet} />
        ))}
      </ol>
    </>
  );
}
