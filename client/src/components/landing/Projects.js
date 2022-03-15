//libraries
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// graphics
import lab from '../graphics/lab.gif'
import quiz from '../graphics/quiz.gif'
import mixtape from '../graphics/mixtape.gif'
import back from '../graphics/back.png'
import open from '../graphics/open.png'
import next from '../graphics/next.png'

function Projects() {

    const [infoProjects, setInfoProjects] = useState("ℹ️")
    const [projectID, setProjectID] = useState(0)
    const navigate = useNavigate();

    const projectBank = [
        {
            title: "Lab App",
            gif: lab,
            path: "/lab",
            description: "This Lab App was my second coding project, made during week 5 of my semester at Flatiron School’s software engineering boot camp. It was inspired by my 4 years working as an oncology and acute care nurse. Because cancer has the horrible knack for drastically affecting multiple organs at once, people with cancer often present with a multitude of symptoms. One of the first steps in the differential diagnosis is to compare labs. Once the labs result, its up to healthcare professionals to triage the results from most critical to least and understand what the root issues are. In this process, I frequently thought it would be more efficient, and less prone to human error, to have a single page where healthcare professionals could compare the causes of abnormal lab results (rather than rely on their memory or the slow process of looking up each lab in a lab manual). To demonstrate the utility of this app, I chose 6 lab tests people may be familiar with. A challenge with this app was finding a free API of lab data, so all of the lab data is pulled from a hard copy of Mosby's Diagnostic and Laboratory Test Reference. Lab App is built with React."
        },
        {
            title: "Enneadrink",
            gif: quiz,
            path: "/enneadrink",
            description: "Enneadrink was inspired by the enneagram personality types. My goal for this project was to create a personality quiz that could be taken quickly, but still yield accurate results. There is a 20 question quiz bank, but each time you take the quiz it will only give you 5 questions because the quiz determines the next question based on the previous answer. It was designed to avoid over-choice and therefore encourage a calm process of personal reflection, that could be done daily. Its clean and nested navigation, to explore the nine personalities and their health levels, was built with React Router version 6 and fetches from a Rails backend. It is custom CSS, except for a journal editing modal which uses the semantic UI library, however I also added custom styling to those library features to match the rest of the application. The images are my own doodles. 🤗"
        },
        {
            title: "MixTape",
            gif: mixtape,
            path: "/",
            description: "MixTape is my next project. So far, I've setup Spotify's OAuth 2.0, to authenticate users and set users' approval of my app's authorization scope to their Spotify account. I'd like to compare playlist or top artists/tracks likeness, as a relationship compatibility test, and create a mixtape gift component, but overall the project idea is in process...."
        }
    ]

    function handleNextClick() {
        let x = projectID + 1
        if (x < projectBank.length) {
            setProjectID(x)
        } else { setProjectID(0) }
    }

    function handleBackClick() {
        console.log(projectID)
        let x = projectID - 1
        if (x >= 0) {
            setProjectID(x)
        } else {setProjectID(projectBank.length - 1) }
    }

    function handleOpenClick(){
        console.log(projectBank[projectID].path)
        navigate(projectBank[projectID].path)
    }

    return (
        <>
            <div className="projects-div">
                <img className="project-gif" src={projectBank[projectID].gif} alt="gif of project UX/UI" />
            </div>

            <div className="controls-row">
                <button onClick={handleBackClick} className="icon-button">
                    <img className="icon" src={back} alt="back button" />
                </button>
                <button onClick={handleOpenClick} className="icon-button">
                    <img className="icon-open" src={open} alt="open project button" />
                </button>
                <button className="icon-button">
                    <img onClick={handleNextClick} className="icon" src={next} alt="next button" />
                </button>
            </div>

            <p
                className="info"
                onMouseEnter={() => setInfoProjects("ℹ️: click center arrow to launch project, click left and right arrows to view more projects.")}
                onMouseLeave={() => setInfoProjects("ℹ️")}
            > {infoProjects} </p>

            <p className="project-title"> {projectBank[projectID].title} </p>

            <p className="project-description"> {projectBank[projectID].description} </p>

        </>
    )
}

export default Projects;