import { NavLink } from 'react-router-dom';

function CupNavBar () {

    return (
        <div id="navDiv">
        <nav>

            <NavLink to="/enneadrink" className="navCup">
                X Enneadrink
            </NavLink>

            <NavLink to="/triage" className="navCup">
                X Triage Tool
            </NavLink>

            <NavLink to="/template" className="navCup">
                X Coming Soon
            </NavLink>

            <NavLink to="/gift" className="navCup">
                X Coming Soon
            </NavLink>

        </nav>
        </div>
    );

}

export default CupNavBar;