import { useState } from "react";
import { NavLink } from "react-router-dom";
import './MainNavigation.css';
import { motion } from "framer-motion";
function MainNavigation() {
    const [isOpen, setİsOpen] = useState(false);
    function openHandler() {
        setİsOpen((preValue) => { return !preValue })
    }

    const variants = {
        open: {
            opacity: 1, rotateY: 0,
            transition: { duration: 1 }
        },
        closed: { opacity: 0, rotateY: -90, transition: { duration: 1 } },
    }

    return (<header>
        <nav className="navbar">
            <div className="  navbar__brand"      >
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF" /><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z" /></g></svg>
            </div>

            <button onClick={openHandler} className="navbar__open_button" >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" /></g></svg>
            </button>
            <ul className="navbar__list" >

                <div className="navbar__line" >
                </div>
                <li className="navbar__list__listitem" >
                    <NavLink to="/" className={({ isActive }) => isActive ? "active" : undefined} end ><span>00</span>HOME</NavLink>

                </li>
                <li className="navbar__list__listitem" >
                    <NavLink to="/destinations" className={({ isActive }) => isActive ? "active" : undefined}  > <span>01</span>DESTINATION </NavLink>

                </li>
                <li className="navbar__list__listitem" >
                    <NavLink to="crew_page" className={({ isActive }) => isActive ? "active" : undefined}   ><span>02</span>CREW</NavLink>

                </li>
                <li className="navbar__list__listitem" >
                    <NavLink to="/technology_page" className={({ isActive }) => isActive ? "active" : undefined}   ><span>03</span>TECHNOLOGY</NavLink>

                </li>
            </ul>
            <motion.ul
                animate={isOpen ? "open" : "closed"}
                variants={variants}
                initial={{ opacity: 0, rotateY: -90 }}

                className="navbar__list_mobile">
                <button onClick={openHandler} className="navbar__close_button" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" /><path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" /></g></svg>
                </button>
                <li id="navbar__list__listitem_1" className="navbar__list__listitem" >
                    <NavLink onClick={openHandler} to="/" className={({ isActive }) => isActive ? "active" : undefined} end ><span>00</span>HOME</NavLink>

                </li>
                <li className="navbar__list__listitem" >
                    <NavLink onClick={openHandler} to="/destinations" className={({ isActive }) => isActive ? "active" : undefined}  > <span>01</span>DESTINATION </NavLink>

                </li>
                <li className="navbar__list__listitem" >
                    <NavLink onClick={openHandler} to="crew_page" className={({ isActive }) => isActive ? "active" : undefined}   ><span>02</span>CREW</NavLink>

                </li>
                <li className="navbar__list__listitem" >
                    <NavLink onClick={openHandler} to="/technology_page" className={({ isActive }) => isActive ? "active" : undefined}   ><span>03</span>TECHNOLOGY</NavLink>

                </li>
            </motion.ul>
        </nav>

    </header>);
}

export default MainNavigation;