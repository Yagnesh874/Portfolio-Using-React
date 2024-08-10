import { NavLink } from "react-router-dom";
import "./menu.css";

const Menu = () => {
    return (
        <>
            <nav>
                <ul className="unorder-list">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">about</NavLink></li>
                    <li><NavLink to="/contact">contact</NavLink></li>
                    <li><NavLink to="/Skill">Skill</NavLink></li>
                </ul>
            </nav >
        </>
    )
}

export default Menu;