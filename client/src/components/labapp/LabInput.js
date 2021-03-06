//libraries
import { useState } from 'react';

function LabInput({ lab, makeInputs }) {
    const [patientLab, setPatientLab] = useState("0");

    function handleLabChange(e) {
        setPatientLab(e.target.value);
    }

    let inputObj = {
        title: lab.title,
        userInput: patientLab,
    }

    makeInputs(inputObj)

    return (
        <div className="each-input">
            <input
                onKeyPress={(event) => {
                    if (!/[0-9]|\./.test(event.key) || //the key pressed is not the key for 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, or “.” OR
                        (/\./.test(event.key) && patientLab.includes("."))) //it is a “.” AND the input value already includes a “.”
                    { event.preventDefault(); }
                }
                }
                className="input-line"
                type="text"
                onChange={handleLabChange}
                value={patientLab}
            />
            {<br />}
            <label>{lab.title}</label> 
            {<br />}
            <label> ({lab.unit})</label>
            {<br />}
            <p className="mono">{lab.id}</p>
        </div>
    )
}

export default LabInput;