import { useState } from 'react';
import { Outlet } from "react-router-dom";
import TopBar from './TopBar';
import JennyBlurb from './JennyBlurb';
import CupNavBar from './CupNavBar';
import AboutProjects from './AboutProjects';
import smoke from '../doodles/smoke.gif';
import cup1 from '../doodles/cup1.png';
import jenny from '../doodles/jenny.png';
import scroll from '../doodles/scroll.png';
import './landing.css';
import './landingcup.css';

function Landing() {
    const [show, setShow] = useState(false);
    const [displayCupContent, setDisplayCupContent] = useState("")

    function holdCupDisplay(content) {
        setDisplayCupContent(content)
    }

    return (
        <>

            <TopBar />
            <div className="cupContainer">
                <img className="smoke" src={smoke} alt="smoke gif" />
                <img className="cup" src={cup1} alt="cup png" />

                <img
                    className="jenny"
                    src={jenny}
                    alt="jenny png"
                    onMouseEnter={() => setShow(true)}
                    onMouseLeave={() => setShow(false)}
                />

                <img className="scroll" src={scroll} alt="scroll png" />

                <CupNavBar holdCupDisplay={holdCupDisplay} />

            </div>

            {show && (<div>
                    <JennyBlurb />
                </div>
                )}

                <AboutProjects aboutContent={displayCupContent} />


            <div className="outlet">

                <Outlet />

            </div>

        </>
    );

}

export default Landing;

{/* <img
className="jenny"
src={jenny}
alt="jenny png"
onMouseEnter={() => setShow(true)}
onMouseLeave={() => setShow(false)}
/> */}