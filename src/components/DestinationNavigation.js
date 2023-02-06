import "./DestinationNavigation.css"

function DestinationNavigation(props) {
    function changePlanetHandler(value, planet) {
        props.onSetCurrentPlanet(planet)
        props.onSetCurrent(+value);
    }

    return <ul className="page_right__planets_navigation">
        <li id="page_right__planets_navigation_first_list_item" onClick={() => changePlanetHandler(0, "Moon")} style={{ borderBottom: props.onCurrentPlanet === "Moon" ? "2.5px solid white" : "0px solid transparent" }} className="page_right__planets_navigation__list_item" >MOON</li>
        <li onClick={() => changePlanetHandler(1, "Mars")} style={{ borderBottom: props.onCurrentPlanet === "Mars" ? "2.5px solid white" : "0px solid transparent" }} className="page_right__planets_navigation__list_item" >MARS</li>
        <li onClick={() => changePlanetHandler(2, "Europa")} style={{ borderBottom: props.onCurrentPlanet === "Europa" ? "2.5px solid white" : "0px solid transparent" }} className="page_right__planets_navigation__list_item" >EUROPA</li>
        <li onClick={() => changePlanetHandler(3, "Titan")} style={{ borderBottom: props.onCurrentPlanet === "Titan" ? "2.5px solid white" : "0px solid transparent" }} className="page_right__planets_navigation__list_item" >TITAN</li>
    </ul>
}

export default DestinationNavigation;