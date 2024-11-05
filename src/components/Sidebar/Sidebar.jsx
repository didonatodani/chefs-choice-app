import "./Sidebar.css"
import menuIcon from "../../assets/menu-icon.svg"

function Sidebar(){
    return(
        <aside className="sidebar">
            <img src={menuIcon} alt="menu icon" id="menu-icon"/>
            <ul>
                <li>Home</li>
                <li>Recipes</li>
                <li>About</li>
            </ul>
        </aside>
    )
}

export default Sidebar