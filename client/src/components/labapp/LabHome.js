//libraries
import { useState, useEffect } from 'react';
//components
import LabForm from './LabForm';
import LabResults from './LabResults';
import Labs from './LabBank';
import LabToPortNav from './LabToPortNav'
//styling
import './lab-app.css'

function LabHome() {

    const [goldLabs, setGoldLabs] = useState([]);
    const [abnormals, setAbnormals] = useState([]);
    const [normals, setNormals] = useState([]);
    const [unentered, setUnentered] = useState([]);
    const [labHistory, setLabHistory] = useState([])

    useEffect(() => { setGoldLabs(Labs) }, []);

    function makeAbnormNorm(resultData) {
        let abnorm = {}
        let norm = {}
        let zeros = {}

        function sortEachLab(labString, lab) {
            let labNum = parseFloat(labString)
            if (labNum === 0) {
                zeros[lab.title] = lab
            }
            else if ((labNum > lab.max) || (labNum < lab.min)) {
                abnorm[lab.title] = lab
            }
            else if ((labNum <= lab.max) && (labNum >= lab.min)) {
                norm[lab.title] = lab
            }
            else { zeros[lab.title] = lab }
        }

        sortEachLab(resultData.hemoglobin, goldLabs[0])
        sortEachLab(resultData.wbc, goldLabs[1])
        sortEachLab(resultData.sodium, goldLabs[2])
        sortEachLab(resultData.potassium, goldLabs[3])
        sortEachLab(resultData.calcium, goldLabs[4])
        sortEachLab(resultData.glucose, goldLabs[5])

        setNormals(Object.values(norm))
        setAbnormals(Object.values(abnorm))
        setUnentered(Object.values(zeros))
    } // end of makeAbnormNorm

    useEffect(() => {
        fetch("/api/records")
            .then(r => r.json())
            .then(data => setLabHistory(data))
    }, []) //end of fetch from backend

    function makeHistory(resultData) {
        fetch("/api/records", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(resultData)
        })
            .then(r => r.json())
            .then(data => setLabHistory([...labHistory, data]))
    } //end of makeHistory function

    const [isFormOpen, setIsFormOpen] = useState(true);


    return (
        <>
            {isFormOpen && <LabForm
                makeAbnormNorm={makeAbnormNorm}
                makeHistory={makeHistory}
            />}

            <LabToPortNav 
            setIsFormOpen={setIsFormOpen}
            isFormOpen={isFormOpen}
            />

            <LabResults
                goldLabs={goldLabs}
                normals={normals}
                abnormals={abnormals}
                unentered={unentered}
                labHistory={labHistory}
                setLabHistory={setLabHistory}
            />
            
        </>
    )



}

export default LabHome