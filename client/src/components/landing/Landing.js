// libraries
import { Outlet } from "react-router-dom";
// components
import CupNav from "./CupNav";
// graphics
import PDFResume from './JennyChau_Resume.pdf';
import cup from '../graphics/cup.png'
import smoke from '../graphics/smoke.gif'
import resume from '../graphics/resume.png'
//styling
import './landing-style.css';
import './right-column.css';



function Landing() {

    return (
        <>
        <div className="horizontal">
            <div className="column">

                <img id="smoke" src={smoke} alt="smoke graphic" />

                <img id="cup" src={cup} alt="cup graphic" />

                <div id="checkboxes">

                <CupNav />

                <a className="resume-link"  target="_blank" rel="noopener noreferrer" href={PDFResume}>
                    <img className="cup-link" src={resume} alt="resume graphic" />
                </a>

                </div>

            </div>
            <div className="column">
                < Outlet />
            </div>
        </div>
        </>
    )
}

export default Landing;