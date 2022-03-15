import { useState, useEffect } from 'react';

function LandingIndex() {

    const [greeting, setGreeting] = useState("")
    const [infoHi, setInfoHi] = useState("ℹ️")

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
        <div className="dog-index-div">
            <p className="landing-greeting"> {greeting}
                {<br />}
                Thanks for visiting!
                {<br />}
                Let's grab some coffee 😊
            </p>
            <p
                className="info"
                onMouseEnter={() => setInfoHi("ℹ️: click on the coffee cup options!")}
                onMouseLeave={() => setInfoHi("ℹ️")}
            > {infoHi}
            </p>
        </div>
    )
}

export default LandingIndex;