import "./TechnologyItem.css"
import { motion } from "framer-motion"
function TechnologyItem(props) {

    return (
        <motion.div
            animate={props.name === props.onCurrentTechnology ? { opacity: 1 } : undefined}
            initial={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className={props.onCurrentTechnologyNumber === props.index ? "technology_item__container--active" : "technology_item__container"} >
            <div className="technology_item__left">
                <div className="technology_item__left__terminology_title" >THE TERMINOLOGY ... </div>
                <div className="technology_item__left__name " >{props.name} </div>
                <div className="technology_item__left__description " >{props.description} </div>
            </div>
            <div className="technology_item__right">
                <img className="technology_item__right__pic" src={props.image} alt="technology pic" />
                <img className="technology_item__right__pic--mobile" src={props.mobileİmage} alt="technology pic" />
            </div>
        </motion.div>
    );
}
export default TechnologyItem;