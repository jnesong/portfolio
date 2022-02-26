import { useState, useEffect } from 'react';

function LandingIndex() {

    const [greeting, setGreeting] = useState("")

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
                Let's catchup, over coffee.
                {<br />}
                Please click around 🤗
            </p>
        </>
    )
}

export default LandingIndex;