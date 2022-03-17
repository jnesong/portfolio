//libraries
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
//components
import LabInput from './LabInput';
import Labs from './LabBank';
//styling
import './lab-app.css'

function LabForm({ makeAbnormNorm, makeHistory }) {
    let resultData = {};
    const navigate = useNavigate();
    const [infoLab, setInfoLab] = useState("ℹ️")
    const [buttonSubmitToggle, setButtonSubmitToggle] = useState(true);

    function makeInputs(inputObj) {
        resultData[inputObj.title] = inputObj.userInput
    }

    function handleLabSubmit(e) {
        e.preventDefault()
        makeAbnormNorm(resultData)
        makeHistory(resultData)
        setButtonSubmitToggle(!buttonSubmitToggle)
        setTimeout(() => { navigate("results")}, 400);
        setTimeout(() => { setButtonSubmitToggle(true)}, 900);
    }

    const listLabInputs = Labs.map((lab) => (
        <LabInput
            key={lab.id}
            lab={lab}
            makeInputs={makeInputs}
        />
    ))

    return (
        <div id="top-form">

            <h1 id="enter-labs">
                enter labs
            </h1>

            <form onSubmit={handleLabSubmit}>
                <div id="lab-form-div">
                    {listLabInputs}
                </div>

                <div style={{ alignItems: "center" }}>
                    <button id="button-lab-submit" type="submit"> {buttonSubmitToggle ? "submit" : "✔ scroll down"} </button>
                </div>
            </form>

            <p
                className="info"
                onMouseEnter={() => setInfoLab("ℹ️: Lab values left as 0 will be interpreted as unentered")}
                onMouseLeave={() => setInfoLab("ℹ️")}
            > {infoLab}
            </p>

        </div>
    )

}

export default LabForm;