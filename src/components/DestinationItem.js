import { motion } from "framer-motion";
import "./DestinationItem.css"

function DestinationItem(props) {


    return (<div className={props.index === props.onCurrent ? " destination_item--active" : "destination_item"} >
        <div className="destination_item__page_left" >
            <h2 className="destination_item__page_left__title" ><span className="destination_item__page_left__title__number">01</span>PICK YOUR DESTINATION</h2>
            <motion.img animate={props.index === props.onCurrent ? { scale: [0.7, 0.8, 0.8, 0.7], opacity: 1 } : undefined}
                transition={{ repeat: Infinity, duration: 10 }}
                className="destination_item__page_left__image" src={props.image} alt="planet image" />
        </div>
        <motion.div
            animate={props.name === props.onCurrentPlanet ? { opacity: 1, x: 0 } : undefined}
            initial={{ opacity: 0, x: -20 }}
            transition={{ duration: 1 }}
            className="destination_item__page_right">
            <h1 className="destination_item__page_right__title" >{props.name}</h1>
            <p className=" destination_item__page_right__description" >{props.description}</p>
            <div className="destination_item__page_right__line" ></div>
            <div className="destination_item__page_right__distance   " >
                <p className="destination_item__page_right__distance__title">AVG. DISTANCE</p>
                <p className="destination_item__page_right__distance__value" >{props.distance}</p>
            </div>
            <div className="destination_item__page_right__travel_time   ">
                <p className="destination_item__page_right__travel_time__title" >EST. TRAVEL TIME</p>
                <p className="destination_item__page_right__travel_time__value" >{props.travel}</p>
            </div>
        </motion.div>
    </div>)
}

export default DestinationItem;