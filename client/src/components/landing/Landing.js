
import { Outlet } from "react-router-dom";
import './landing-style.css';

function Landing () {

    return (
        <div className="horizontal">
        <div className="column">

            <p> Hello </p>

        </div>
        <div className="column">
            <p> Hi </p>
            < Outlet/>
        </div>
        </div>
    )
}

export default Landing;