import { NavLink, Outlet } from "react-router-dom"
import "../index.css"

const Root=()=>{
    return <div>
        <nav>
            <NavLink to="/composers">Composers</NavLink>
            <NavLink to="/addWork">Add Work</NavLink>
            <NavLink to="/addComposers">Add Composers</NavLink>
        </nav>
    <div>
        <Outlet/>
    </div>
       
    
    </div>
}

export default Root