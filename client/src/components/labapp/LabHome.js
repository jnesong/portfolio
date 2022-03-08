//libraries
import { useState, useEffect } from 'react';
//components
import LabForm from './LabForm';
import LabResults from './LabResults';
import Labs from './LabBank';
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
        console.log(resultData)
        let abnorm = {}
        let norm = {}
        let zeros = {}
        // let potassiumObj = resultData["potassium"]
        // let calciumObj = resultData["calcium"]
        // let sodiumObj = resultData["sodium"]
        // let hemoglobinObj = resultData["hemoglobin"]
        // let glucoseObj = resultData["blood glucose"]
        // let wbcObj = resultData["white blood cells"]

        function sortEachLab(labObj, lab) {
            if (labObj.userInput === 0) {
                zeros[lab.title] = lab
            }
            else if ((labObj.userInput > lab.max) || (lab.userInput < lab.min)) {
                abnorm[lab.title] = lab
            }
            else { norm[lab.title] = lab }
        }

        sortEachLab(Number(resultData.hemoglobin), goldLabs[0])
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

    return (
        <>
            <LabForm
                makeAbnormNorm={makeAbnormNorm}
                makeHistory={makeHistory}
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