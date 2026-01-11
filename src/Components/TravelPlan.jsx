import { useState } from "react";
import { initialTravelPlan } from "../data/placesNormalised";
import TravelTree from "./TravelTree";
export default function TravelPlan() {
  const [plan, setPlan] = useState(initialTravelPlan);
  const root = plan[0];
  const PlanetIds = root.childIds;
  const handleDelete = (parentId, selfId) => {
    const parent = plan[parentId];
    const nextParent = {
      ...parent,
      childIds: parent.childIds.filter((id) => id !== selfId),
    };
    setPlan({
      ...plan,
      nextParent,
    });
    console.log("delete btn pressed");
  };
  return (
    <>
      <h5>TravelPlan</h5>
      <ol className="pl-4 list-decimal list-inside">
        {PlanetIds.map((id) => (
          <TravelTree
            key={id}
            placesId={plan}
            id={id}
            onClick={handleDelete}
            parentId={0}
          />
        ))}
      </ol>
    </>
  );
}
