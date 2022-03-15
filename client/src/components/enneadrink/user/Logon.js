//libraries
import { Routes, Route, NavLink } from 'react-router-dom';
//components
import Login from './Login';
import Signup from './Signup';
//graphics
import plant2 from '../icons/plant2.gif';
//styling
import './logon.css';

function LogOn() {
    
    return (
        <>
            <img className="plant" src={plant2} alt="plant gif" />

            {<br />}
            {<br />}
            {<br />}

            <div className="logon-background">

                <nav>
                    <NavLink className="logon-nav" to="login"> Login </NavLink>
                    <NavLink className="logon-nav" to="signup"> Signup </NavLink>
                </nav>

                {<br />}
                {<br />}
                
                <Routes>
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                </Routes>

            </div>
        </>
    );
}

export default LogOn;