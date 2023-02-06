import { useState } from "react";
import DestinationsData from "../DestinationsData";
import DestinationItem from "./DestinationItem";
import DestinationNavigation from "./DestinationNavigation";
import "./DestinationContent.css"

function DestinationsContent() {
  const [current, setCurrent] = useState(0)
  const [currentPlanet, SetCurrentPlanet] = useState("Moon")
  return (<div className="destination_container">
    <DestinationNavigation onCurrentPlanet={currentPlanet} onSetCurrentPlanet={SetCurrentPlanet} onSetCurrent={setCurrent} />
    {DestinationsData.map((destination, index) => {
      return (<DestinationItem
        onCurrentPlanet={currentPlanet}
        onCurrent={current}
        index={index}
        image={destination.image}
        key={destination.id}
        name={destination.name}
        description={destination.description}
        distance={destination.distance}
        travel={destination.travel}
      />)
    })}
  </div>
  );
}

export default DestinationsContent;