//libraries
import { useState } from 'react';
// graphics
import tree from '../graphics/tree.jpg'


function Hi() {
    const [infoSkills, setInfoSkills] = useState("ℹ️")
    const [isSkillAOpen, setIsSkillAOpen] = useState(false);
    const [isSkillBOpen, setIsSkillBOpen] = useState(false);
    const [isSkillCOpen, setIsSkillCOpen] = useState(false);


    let blogLink = <a target="_blank" rel="noopener noreferrer" href={'https://medium.com/@jnesong'}>
        medium.com/@jnesong
    </a>

    let linkedInLink = <a target="_blank" rel="noopener noreferrer" href={'https://www.linkedin.com/in/jenny-chau-song/'}>
        in/jenny-chau-song
    </a>

    let emailLink = <a href={'mailto:jnechau@gmail.com"'}>
        jnechau@gmail.com
    </a>


    return (
        <div id="hi-div">
            <img className="hi-image" src={tree} alt="jenny smiling" />

            <p className="hi">
                Hi, I'm Jenny, a fullstack software developer,
                born, raised, and living in Northern Virginia.
            </p>

            <ul className="hi-list">
                <li> Email: {emailLink} </li>
                <li> LinkedIn: {linkedInLink} </li>
                <li> Blog: {blogLink} </li>
            </ul>

            <p className="thankyou">
                A few of my transferrable work skills:
            </p>

            <button className="hi-toggle" onClick={() => setIsSkillBOpen(!isSkillBOpen)}>
                Attentive to detail
            </button>

            {isSkillBOpen && <div className="skill-div">
                One of the most important skills of a nurse is thorough assessment- noticing details such as a person’s depth and rate of breathing to the temperature and elasticity of their skin. Through nursing, I have developed a strong attention to detail which translates into anticipating edge cases, picking up programming syntax, frontend design consistency, and productive debugging. In the end, attention to detail saves time.
            </div>}


            <button className="hi-toggle" onClick={() => setIsSkillCOpen(!isSkillCOpen)}>
                Collaborative
            </button>

            {isSkillCOpen && <div className="skill-div">
                Throughout my entire education and career in healthcare, it was drilled that communication breakdown is the number one cause of medical errors. Therefore good communication is highly sought after and practiced. For example, nurses use SBAR (Situation, Background, Assessment, Recommendations) to methodically advocate patient needs.  Additionally, I’ve always highly valued concise documentation as essential, comprehensive evidence of a patient’s history. I have taken my resourceful inclination towards reading others’ documentation and synthesizing valuable information, from healthcare, into software development. {<br />} {<br />} Within my first year working at my most recent nursing job, two nurses asked to complete their orientation training with me. As a good listener with a strong work ethic, I am comfortable balancing independent problem solving, seeking help, and offering help.

            </div>}

            <button className="hi-toggle" onClick={() => setIsSkillAOpen(!isSkillAOpen)}>
                Organized
            </button>
            {isSkillAOpen && <div className="skill-div">
                Past work experience has made me someone who naturally assesses problems, prioritizes, and optimizes resources.
                <ul className="skill-list">
                    <li> • As a clinic nurse, I had a dashboard of ticket-like tasks from patients and other team members. I initiated a priority ranking system to efficiently direct my work. I ranked each task by urgency, on a 0-5 scale, or with the name of who else was needed to complete the task. That way I could compile and cover multiple needs at once. Instead of stalled time rereading tasks lists, waiting for people to become available, or repeatedly deciding what to do next, I effectively handled our patients’ needs and demonstrated a purposeful, easy-to-follow workflow to the rest of the team. </li>
                    <li> • As a post anesthesia care nurse, I had twenty patient admissions and discharges in a single shift. This high turnover required monitoring and dynamically directing patients in different levels of consciousness for twelve hours a day. </li>
                    <li> • As a floor nurse, my five patients often each had ten or more medications due at the same time, expected within an hour’s span.  Of note, oncology patients often have complex therapeutic regimens that require dual sign-off. We coordinated to optimize everyone’s time. </li>
                </ul>

            </div>}


            <p
                className="info"
                onMouseEnter={() => setInfoSkills("ℹ️: click skills to toggle descriptions.")}
                onMouseLeave={() => setInfoSkills("ℹ️")}
            > {infoSkills} </p>

            <p className="thankyou">
                Thank you for checking out my portfolio!

            </p>


        </div >
    )
}

export default Hi;