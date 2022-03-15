//libraries
import { NavLink } from 'react-router-dom';
//graphics
import enneadrink1 from './icons/enneadrink1.png';
import enneadrink2 from './icons/enneadrink2.png';
import enneadrink3 from './icons/enneadrink3.png';
import enneadrink4 from './icons/enneadrink4.png';
import enneadrink5 from './icons/enneadrink5.png';
import enneadrink6 from './icons/enneadrink6.png';
import enneadrink7 from './icons/enneadrink7.png';
import enneadrink8 from './icons/enneadrink8.png';
import enneadrink9 from './icons/enneadrink9.png';
//styling
import './enneadrink.css';

function DrinkNavBar() {
    let activeStyle = {
        transform: "scale(2) translateY(30px)"
    }

    return (
        <nav className="drink-nav-bar">
            <NavLink className="main-nav" to="1"
                style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                }>
                <img src={enneadrink1} alt="water" className="drink-icon" />
            </NavLink>
            <NavLink className="main-nav" to="2"
                style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                }>
                <img src={enneadrink2} alt="tea" className="drink-icon" />
            </NavLink>
            <NavLink className="main-nav" to="3"
                style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                }>
                <img src={enneadrink3} alt="sparkling water" className="drink-icon" />
            </NavLink>
            <NavLink className="main-nav" to="4"
                style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                }>
                <img src={enneadrink4} alt="espresso" className="drink-icon" />
            </NavLink>
            <NavLink className="main-nav" to="5"
                style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                }>
                <img src={enneadrink5} alt="latte" className="drink-icon" />
            </NavLink>
            <NavLink className="main-nav" to="6"
                style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                }>
                <img src={enneadrink6} alt="lemon water" className="drink-icon" />
            </NavLink>
            <NavLink className="main-nav" to="7"
                style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                }>
                <img src={enneadrink7} alt="smoothie" className="drink-icon" />
            </NavLink>
            <NavLink className="main-nav" to="8"
                style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                }>
                <img src={enneadrink8} alt="juice" className="drink-icon" />
            </NavLink>
            <NavLink className="main-nav" to="9"
                style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                }>
                <img src={enneadrink9} alt="hot cocoa" className="drink-icon" />
            </NavLink>

        </nav>
    );
}

export default DrinkNavBar;