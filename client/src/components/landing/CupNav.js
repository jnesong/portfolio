// libraries
import { NavLink } from "react-router-dom";
// graphics
import hi from '../graphics/hi.png'
import dog from '../graphics/dog.png'
import projects from '../graphics/projects.png'



function CupNav() {

    return (
        <nav>

            <NavLink className="cup-link" to="/hi">
                <img src={hi} alt="hi text" className="cup-link" />
            </NavLink>
            {<br/>}
            <NavLink className="cup-link" to="/projects">
                <img src={projects} alt="projects text" className="cup-link" />
            </NavLink>
            {<br/>}
            <NavLink className="cup-link" to="/dog">
                <img src={dog} alt="it's my dog text" className="cup-link" />
            </NavLink>


        </nav>
    )
}

export default CupNav;