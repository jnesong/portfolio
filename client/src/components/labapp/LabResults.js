//libraries
import { Route } from 'react-router-dom';

//components
import AbnormLabCard from "./AbnormLabCard";
import NormCard from "./NormCard";
import Patho from "./Patho";
import NormVSAbnormResults from "./NormVSAbnorm";
import LabHistory from "./History";
import LabNavBar from "./NavBar";
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

    const abnormalLabList = abnormals.map((labObj) => <LabCard
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

            <Route path="pathophysiology"> <Patho allLabsList={allLabsList} /> </Route>

            <Route path="history"> <LabHistory labHistory={labHistory} setLabHistory={setLabHistory} /> </Route>

            <Route exact path="/lab"> <NormVSAbnormResults abnormalLabList={abnormalLabList} normalLabList={normalLabList} unenteredLabList={unenteredLabList}/> </Route>

            <Route path="*"> <h1>404 page not found 🥲</h1> </Route>

        </div>
    );
}

export default Results;