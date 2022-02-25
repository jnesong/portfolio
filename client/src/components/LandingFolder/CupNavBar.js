import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function CupNavBar({ holdCupDisplay }) {

    const [showEnneadrink, setShowEnneadrink] = useState(false);
    showEnneadrink && (holdCupDisplay(""))

    const [showTriage, setShowTriage] = useState(false);
    showTriage && (holdCupDisplay(""))

    return (
        <div id="navDiv">
            <nav>

                <NavLink to="/enneadrink" className="navCup"
                    onMouseEnter={() => setShowEnneadrink(true)}
                    onMouseLeave={() => setShowEnneadrink(false)}>
                    
                </NavLink>

                <NavLink to="/triage" className="navCup"
                    onMouseEnter={() => setShowTriage(true)}
                    onMouseLeave={() => setShowTriage(false)}>
                    
                </NavLink>

                <NavLink to="/template" className="navCup">
                     
                </NavLink>

                <NavLink to="/gift" className="navCup">
                     
                </NavLink>

            </nav>
        </div>
    );

}

export default CupNavBar;