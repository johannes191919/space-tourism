import "./TechnologyNavigation.css"

function TechnologyNavigation(props){

return <ul className="technology_navigation_list">
<li id="technology_navigation_list__listitem_1"  className="technology_navigation_list__listitem" ><button onClick={()=>{props.onSetTechnologyHandler(0,"Launch vehicle")} }  className={props.onCurrentTechnologyNumber===0?"technology_navigation_list__listitem__button--active":"technology_navigation_list__listitem__button"} >1</button> </li>
<li className="technology_navigation_list__listitem" ><button onClick={()=>{props.onSetTechnologyHandler(1,"Spaceport")} }   className={props.onCurrentTechnologyNumber===1?"technology_navigation_list__listitem__button--active":"technology_navigation_list__listitem__button"} >2</button> </li>
<li className="technology_navigation_list__listitem" ><button onClick={()=>{props.onSetTechnologyHandler(2,"Space capsule")} }   className={props.onCurrentTechnologyNumber===2?"technology_navigation_list__listitem__button--active":"technology_navigation_list__listitem__button"} >3</button> </li>
</ul>
};

export default TechnologyNavigation;