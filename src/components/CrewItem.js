import "./CrewItem.css"
import { motion } from "framer-motion";

function CrewItem(props) {

    return (<motion.div
        animate={{ opacity: 1, }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}>
        <div className="crewitem_page_left" >
            <div className="crewitem_page_left__role" >{props.role}</div>
            <div className="crewitem_page_left__name">{props.name}</div>
            <div className="crewitem_page_left__bio" >{props.bio}</div>
        </div>
        <div className="crewitem_page_right">
            <img className="page_right__image" src={props.images} />
        </div>
    </motion.div>);
}

export default CrewItem;