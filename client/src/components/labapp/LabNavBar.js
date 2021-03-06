//libraries
import { NavLink } from 'react-router-dom';

function LabNavBar() {

    let activeS = {
        color: "white",
        borderBottom: "none"
    }


    return (
        <nav>
            <NavLink to="pathophysiology"
                style={({ isActive }) =>
                    isActive ? activeS : undefined
                }
                className="lab-nav"
                > pathophysiology </NavLink>
            <NavLink to="history"
                style={({ isActive }) =>
                    isActive ? activeS : undefined
                }
                className="lab-nav"
                > history </NavLink>
            <NavLink to="results" style={({ isActive }) =>
                isActive ? activeS : undefined
            }
            className="lab-nav"
            > results </NavLink>
        </nav>
    );
}

export default LabNavBar;