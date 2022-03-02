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

    function handleScroll() {
        window.scroll({
          top: document.body.offsetHeight,
          behavior: 'smooth',
        });
      }

    return (
        <>
            <img className="plant" src={plant2} alt="plant gif" />

            {<br />}
            {<br />}
            {<br />}

            <div className="logon-background">

                <nav>
                    <NavLink className="logon-nav" onClick={handleScroll} to="user/login"> Login </NavLink>
                    <NavLink className="logon-nav" onClick={handleScroll} to="user/signup"> Signup </NavLink>
                </nav>

                {<br />}
                
                <Routes>
                    <Route path="user/login" element={<Login />} />
                    <Route path="user/signup" element={<Signup />} />
                </Routes>

            </div>
        </>
    );
}

export default LogOn;