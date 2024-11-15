import "./Sidebar.css"
import menuIcon from "../../assets/menu-icon.svg"
import { NavLink } from "react-router-dom"


function Sidebar(){
    // good use of html elements  
    // the navlinks provide us the class active, consider using it to style the active link
    return(
        <aside className="sidebar">
            <img src={menuIcon} alt="menu icon" id="menu-icon"/>
            <ul className="sidebar-ul">
                <NavLink className="sidebar-link" to="/">Home</NavLink>
                <NavLink className="sidebar-link" to="/about">About</NavLink>
            </ul>
        </aside>
    )
}

export default Sidebar