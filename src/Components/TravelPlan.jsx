import { useState } from "react";
import { initialTravelPlan } from "../data/placesNormalised";
import TravelTree from "./TravelTree";
export default function TravelPlan() {
  const [plan, setPlan] = useState(initialTravelPlan);
  const root = plan[0];
  const PlanetIds = root.childIds;
  return (
    <>
      <h5>TravelPlan</h5>
      <ol className="pl-4 list-decimal list-inside">
        {PlanetIds.map((id) => (
          <TravelTree key={id} placesId={plan} id={id} />
        ))}
      </ol>
    </>
  );
}
