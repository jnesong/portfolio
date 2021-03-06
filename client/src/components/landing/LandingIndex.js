//libraries
import { useState, useEffect } from 'react';
// graphics
import FE from './Flatiron_SE_curriculum.pdf';

function LandingIndex() {

    const [greeting, setGreeting] = useState("")
    const [infoHi, setInfoHi] = useState("â¹ï¸")
    const [isHxOpen, setIsHxOpen] = useState(false);

    const date = new Date()
    const timeHr = date.getHours()

    useEffect(() => {
        if (timeHr < 12 && timeHr > 3) {
            // console.log('good morning')
            setGreeting("GOOD MORNING")
        } else if (timeHr < 17 && timeHr > 11) {
            // console.log('good afternoon')
            setGreeting("GOOD AFTERNOON")
        } else if (timeHr < 20 && timeHr > 17) {
            // console.log('good evening')
            setGreeting("GOOD EVENING,")
        } else {
            // console.log('good evening')
            setGreeting("GOOD EVENING,")
        }
    }, [timeHr])

    return (
        <div className="index-div">
            <p className="landing-greeting"> {greeting}
                {<br />}
                Thanks for visiting!
                {<br />}
                Let's grab some coffee ð
            </p>
            <p
                className="info"
                onMouseEnter={() => setInfoHi("â¹ï¸: click on the coffee cup options!")}
                onMouseLeave={() => setInfoHi("â¹ï¸")}
            > {infoHi}
            </p>

            <button className="hi-toggle" onClick={() => setIsHxOpen(!isHxOpen)}>
                A brief history.
            </button>

            {isHxOpen && <div className="skill-div">
                ð©ð»âð» I'm Jenny! ð I graduated from the University of Virginia with a <b> Bachelor of Science Degree </b> and gained <b> professional skills </b> as a nurse for four years. Throughout undergrad I stayed on the Deanâs List, aka I maxed out on credits every semester and maintained a high GPA. As a nurse, I was awarded multiple Spirit Awards, by colleagues and patients, for my noteworthy <b> enthusiasm to help others </b> and promote a positive team culture.
                ð©º  When I started classes at one of the top 10 Family Nurse Practitioner Programs in the US, I realized that even advanced practice nursing would not include the level of creative, dynamic problem solving I hoped to pursue. I explored my options and ultimately found excitement in software engineering.
                â© I completed &nbsp;
                <a className="flatiron-link" target="_blank" rel="noopener noreferrer" href={FE}>
                    Flatiron Schoolâs Software Engineering Live boot camp
                </a>
                &nbsp; and continue to thrive as I turn collected information into original applications! ð¡
                {<br />}
                {<br />}

            </div>}

        </div>
    )
}

export default LandingIndex;