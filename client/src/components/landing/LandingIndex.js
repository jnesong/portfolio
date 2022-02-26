import { useState, useEffect } from 'react';

function LandingIndex() {

    const [greeting, setGreeting] = useState("")
    const [infoHi, setInfoHi] = useState("ℹ️")

    const date = new Date()
    const timeHr = date.getHours()

    useEffect(() => {
        if (timeHr < 12 && timeHr > 3) {
            // console.log('good morning')
            setGreeting("Good morning 🌄")
        } else if (timeHr < 17 && timeHr > 11) {
            // console.log('good afternoon')
            setGreeting("Good afternoon ☀️")
        } else if (timeHr < 20 && timeHr > 17) {
            // console.log('good evening')
            setGreeting("Good evening 🌃")
        } else {
            // console.log('good evening')
            setGreeting("Good evening 🌙")
        }
    }, [timeHr])

    return (
        <>
            <p className="greeting"> {greeting}
                {<br />}
                Thanks for being here!
                {<br />}
                Let's grab coffee 🤗
            </p>
            <p
                className="info"
                onMouseEnter={() => setInfoHi("ℹ️: click on the coffee cup options!")}
                onMouseLeave={() => setInfoHi("ℹ️")}
            > {infoHi}
            </p>
        </>
    )
}

export default LandingIndex;