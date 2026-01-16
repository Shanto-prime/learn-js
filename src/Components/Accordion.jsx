import { useState } from "react";
import Panel from "./panel";

export default function Accordion() {
    const [activeIndex, setActiveIndex] = useState(0);
    // const handleActiveIndex = (index) => setActiveIndex(index);
    return (
        <>
            <Panel
                title="Lite version"
                isActive={activeIndex === 0 && true}
                onActiveHandler={() => setActiveIndex(0)}
            >
                dolor sit amet consectetur adipisicing elit. Praesentium,
                voluptate.
            </Panel>
            <Panel
                title="Paid version"
                isActive={activeIndex === 1 && true}
                onActiveHandler={() => setActiveIndex(1)}
            >
                dolor sit, amet consectetur adipisicing elit. Consequatur harum
                officiis nam porro cumque exercitationem?
            </Panel>
        </>
    );
}
