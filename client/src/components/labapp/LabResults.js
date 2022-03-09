//libraries
import { Routes, Route } from 'react-router-dom';
//components
import AbnormLabCard from "./AbnormLabCard";
import NormCard from "./NormCard";
import Patho from "./Patho";
import NormVSAbnormResults from "./NormVSAbnormResults";
import LabHistory from "./LabHistory";
import LabNavBar from "./LabNavBar";
//styling
import './lab-app.css'
//graphics
import blood from './blood.gif';


function LabResults({ goldLabs, normals, abnormals, unentered, labHistory, setLabHistory }) {

    let lastLab = labHistory[labHistory.length-1]
    console.log(lastLab)
    console.log(abnormals)

    // I want to push the value from the lastLab object
    //into the corresponding object in the abnormals array
    //so I need to loop through the lastLab object, nondestructively taking the key that matches the title and push into into that object
    // as userInput key
    abnormals.map( eachLab => addUserInputToLab(eachLab))
    function addUserInputToLab (eachLabP) {
        console.log(eachLabP)
        let x = eachLabP.title
        console.log(x)
        let y = lastLab[x]
        console.log(y)
        eachLabP['userInput'] = y
        console.log(eachLabP.userInput)
    }
    console.log(abnormals)

    const allLabsList = goldLabs.map((labObj) => <NormCard
        key={labObj.id}
        lab={labObj}
    />)

    const normalLabList = normals.map((labObj) => <NormCard
        key={labObj.id}
        lab={labObj}
    />)

    const abnormalLabList = abnormals.map((labObj) => <AbnormLabCard
        key={labObj.id}
        lab={labObj}
        lastLab={lastLab}
    />)

    const unenteredLabList = unentered.map((labObj) => <NormCard
        key={labObj.id}
        lab={labObj}
    />)

    return (
        <div id="bottom-results">
            <LabNavBar />
            <img className="blood" src={blood} alt="blood gif" />
            <Routes>
                <Route path="results" element={<NormVSAbnormResults
                    abnormalLabList={abnormalLabList}
                    normalLabList={normalLabList}
                    unenteredLabList={unenteredLabList}
                    />} />
                <Route path="pathophysiology" element={<Patho allLabsList={allLabsList} />} />
                <Route path="history" element={<LabHistory
                    labHistory={labHistory}
                    setLabHistory={setLabHistory} 
                    />} />
            </Routes>

        </div>
    );
}

export default LabResults;