//libraries
import { Outlet } from 'react-router-dom';

//components
import AbnormLabCard from "./AbnormLabCard";
import NormCard from "./NormCard";
import Patho from "./Patho";
import NormVSAbnormResults from "./NormVSAbnormResults";
import LabHistory from "./LabHistory";
import LabNavBar from "./LabNavBar";
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

            <Outlet/>

        </div>
    );
}

export default LabResults;