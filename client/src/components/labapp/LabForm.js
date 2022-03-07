//components
import LabInput from './LabInput';
import Labs from './LabBank';

function LabForm ( {makeAbnormNorm, makeHistory}) {
    let resultData = {};

    function makeInputs( inputObj ) {
        resultData[inputObj.title] = inputObj
    }

    function handleLabSubmit(e) {
        e.preventDefault()
        makeAbnormNorm(resultData)
        makeHistory(resultData)
    }

    const listLabInputs = Labs.map((lab) => (
        <Input
        key={lab.id}
        lab={lab}
        makeInputs={makeInputs}
        />
    ))

    return (
        <div id="top-form">

            <h1 id="enter-labs">
                
            </h1>

        </div>
    )

}

export default LabForm;