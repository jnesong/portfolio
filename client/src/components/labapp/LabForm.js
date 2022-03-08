//components
import LabInput from './LabInput';
import Labs from './LabBank';
//styling
import './lab-app.css'

function LabForm({ makeAbnormNorm, makeHistory }) {
    let resultData = {};

    function makeInputs(inputObj) {
        resultData[inputObj.title] = inputObj
    }

    function handleLabSubmit(e) {
        e.preventDefault()
        makeAbnormNorm(resultData)
        makeHistory(resultData)
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
                <div style={{ display: "inline-flex" }}>
                    {listLabInputs}
                </div>

                <div style={{ alignItems: "center" }}>
                    <button id="button-lab-submit" type="submit"> submit </button>
                </div>
            </form>

        </div>
    )

}

export default LabForm;