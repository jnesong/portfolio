//libraries
import { useState, useEffect } from 'react';
//components
import LabForm from './LabForm';
import LabResults from './Results';
import Labs from './LabBank';

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
        let potassiumObj = resultData["potassium"]
        let calciumObj = resultData["calcium"]
        let sodiumObj = resultData["sodium"]
        let hemoglobinObj = resultData["hemoglobin"]
        let glucoseObj = resultData["blood glucose"]
        let wbcObj = resultData["white blood cells"]

        function sortEachLab(labObj) {
            if (labObj.userInput === 0) {
                zeros[labObj.title] = labObj
            }
            else if ((labObj.userInput > labObj.max) || (labObj.userInput < labObj.min)) {
                abnorm[labObj.title] = labObj
            }
            else { norm[labObj.title] = labObj }
        }

        sortEachLab(potassiumObj)
        sortEachLab(calciumObj)
        sortEachLab(sodiumObj)
        sortEachLab(hemoglobinObj)
        sortEachLab(glucoseObj)
        sortEachLab(wbcObj)

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
            .then(data => setLabHistory([...history, data]))
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