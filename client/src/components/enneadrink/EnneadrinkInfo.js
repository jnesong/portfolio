//libraries
import { useParams, NavLink, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
//styling
import './enneadrink.css';

function EnneadrinkInfo({ holdDisplay }) {

    const { enneadrinkID } = useParams();
    let fetchPath = `/api/enneadrinks/${enneadrinkID}`

    const [enneadrink, setEnneadrink] = useState({});

    useEffect(() => {
        const abortCont = new AbortController();

        fetch(fetchPath, { signal: abortCont.signal })
            .then(r => r.json())
            .then(data => setEnneadrink(data))
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted');
                } else { console.log(err.message) }
                ;
            })
        return () => abortCont.abort()
    }, [fetchPath]);

    // console.log(enneadrink)

    const [content, setContent] = useState("")

    function handleAboutClick() {
        setContent(enneadrink.about)
    }

    function handleStrengthsClick() {
        setContent(enneadrink.strengths)
    }
    function handleWeaknessesClick() {
        setContent(enneadrink.weaknesses)
    }
    function handlePracticesClick() {
        let practicesList = enneadrink.practices.map((obj) => <li className="health" key={obj.id}> {obj.title} : {obj.description} </li> )
        setContent(practicesList)
    }
    function handleLevelsClick() {
        let healthsList = enneadrink.healths.map((obj) => <li className="health" key={obj.id}> Level {obj.level} : {obj.description} </li>)
        setContent(healthsList)
    }

    holdDisplay(content)

    return (
        <>
            <div className="enneadrink-info-div">

                <nav>
                    <NavLink className="description-nav" onClick={handleAboutClick} to="about"> About </NavLink>
                    <NavLink className="description-nav" onClick={handleStrengthsClick} to="strengths"> Strengths </NavLink>
                    <NavLink className="description-nav" onClick={handleWeaknessesClick} to="weaknesses"> Weaknesses </NavLink>
                    <NavLink className="description-nav" onClick={handlePracticesClick} to="practices"> Helpful Practices </NavLink>
                    <NavLink className="description-nav" onClick={handleLevelsClick} to="health"> Health Levels </NavLink>
                </nav>

                {<br />}
                {<br />}
                <Outlet />

            </div>
        </>
    )


}

export default EnneadrinkInfo;