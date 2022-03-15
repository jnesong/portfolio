//libraries
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function LabToPortNav ( {setIsFormOpen, isFormOpen} ) {

    const navigate = useNavigate();
    const [buttonPDisplay, setButtonPDisplay] = useState("Return to Portfolio");
    const [formToggleDisplay, setFormToggleDisplay] = useState(true);

    function handleReturnToP () {
        setButtonPDisplay("thank you for visiting!");
        setTimeout(() => { navigate("/projects") }, 500);
    }

    function handleToggleForm () {
        setIsFormOpen(!isFormOpen)
        setFormToggleDisplay(!formToggleDisplay)
        console.log(Boolean(isFormOpen))
    }

    return (
        <>

            <button className="toggle-form" onClick={handleToggleForm}> {formToggleDisplay ? "Close Lab Entry Form" : "Open Lab Entry Form"} </button>

            <button className="portfolio-lab-button" onClick={handleReturnToP}> {buttonPDisplay} </button>

        </>
    )

}

export default LabToPortNav