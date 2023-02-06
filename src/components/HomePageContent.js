import "./HomePageContent.css"
import { motion } from 'framer-motion'
import { useState } from "react";
import { Link } from "react-router-dom";
function HomePageContent() {
    const [isHover, setİsHover] = useState(false);
    function MouseEnterHandler() {
        setİsHover(true);
    };
    function MouseLeaveHandler() {
        setİsHover(false);
    };

    return (
        <div className="homepage_container">
            < motion.div className="homepage_left"
                animate={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 50 }}
                transition={{ duration: 1 }}
            >
                <h2 className="homepage_left__title2">  So, you want to travel to</h2>
                <h1 className="homepage_left__title1">  SPACE
                </h1>
                <p className="homepage_left__description"  >   Let’s face it; if you want to go to space, you might as well genuinely go to
                    outer space and not hover kind of on the edge of it. Well sit back, and relax
                    because we’ll give you a truly out of this world experience!</p>
            </motion.div>
            <div className="homepage_right" >
                <motion.div className="homepage_right__button_animation" animate={isHover ? { scale: 1.4 } : { scale: 1 }} transition={isHover ? { duration: 1 } : { duration: 0.2 }}        ></motion.div>
                <Link to="/destinations" className="homepage_right__button" onMouseEnter={MouseEnterHandler} onMouseLeave={MouseLeaveHandler}  >Explore</Link>
            </div>
        </div>
    );
}

export default HomePageContent;