import { useState } from "react";
import TechnologyData from "../TechnologyData";
import TechnologyItem from "./TechnologyItem";
import TechnologyNavigation from "./TechnologyNavigation";
import "./TechnologyContent.css"

function TechnologyContent() {
   const [currentTechnologyNumber, setCurrentTechnologyNumber] = useState(0)
   const [currentTechnology, setCurrentTechnology] = useState("Launch vehicle")
   function setTechnologyHandler(number, technologyname) {
      setCurrentTechnology(technologyname)
      setCurrentTechnologyNumber(number)
   }

   return (

      <div className="technology_content_container">
         <h2 className="technology_content_page_left__title" ><span className="technology_content_page_left__title__number">03</span>SPACE LAUNCH 101</h2>
         <TechnologyNavigation
            onCurrentTechnologyNumber={currentTechnologyNumber}
            onSetTechnologyHandler={setTechnologyHandler} />
         {TechnologyData.map((technology, index) => {
            return <TechnologyItem
               onCurrentTechnology={currentTechnology}
               index={index}
               onCurrentTechnologyNumber={currentTechnologyNumber}
               name={technology.name}
               description={technology.description}
               image={technology.images.portrait}
               mobileİmage={technology.images.landscape}
            />
         }
         )}
      </div>

   )
}

export default TechnologyContent;
