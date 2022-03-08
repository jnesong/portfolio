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
                <Route path="results" element={<NormVSAbnormResults abnormalLabList={abnormalLabList} normalLabList={normalLabList} unenteredLabList={unenteredLabList} />} />
                <Route path="pathophysiology" element={<Patho allLabsList={allLabsList} />} />
                <Route path="history" element={<LabHistory labHistory={labHistory} setLabHistory={setLabHistory} />} />
            </Routes>

        </div>
    );
}

export default LabResults;