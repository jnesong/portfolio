//libraries
import { useState } from 'react';
// graphics
import lab from '../graphics/lab.gif'
import back from '../graphics/back.png'
import open from '../graphics/open.png'
import next from '../graphics/next.png'

function Projects() {

    const [infoProjects, setInfoProjects] = useState("ℹ️")

    return (
        <>
            <div className="projects-div">
                <img className="project-gif" src={lab} alt="gif of project UX/UI" />
            </div>
            <div className="controls-row">
                <button className="icon-button">
                    <img className="icon" src={back} alt="back button" />
                </button>
                <button className="icon-button">
                    <img className="icon" src={open} alt="open project button" />
                </button>
                <button className="icon-button">
                    <img className="icon" src={next} alt="next button" />
                </button>
            </div>
            <p
                className="info"
                onMouseEnter={() => setInfoProjects("ℹ️: click center arrow to open, click left and right arrows to view more projects.")}
                onMouseLeave={() => setInfoProjects("ℹ️")}
            > {infoProjects} </p>
        </>
    )
}

export default Projects;