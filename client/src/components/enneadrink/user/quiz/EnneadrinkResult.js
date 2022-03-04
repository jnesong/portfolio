//libraries
import { NavLink, Link, Outlet, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
//components
import Logout from '../Logout';
//styling
import './quiz.css';

function EnneadrinkResult( {holdDisplay} ) {

    const { enneadrinkID } = useParams();
    let fetchPath = `/api/enneadrinks/${enneadrinkID}`

    const [enneadrinkResult, setEnneadrinkResult] = useState({});

    useEffect(() => {
        const abortCont = new AbortController();
        fetch(fetchPath, { signal: abortCont.signal })
            .then(r => r.json())
            .then(data => setEnneadrinkResult(data))
            .catch(err => console.log(err))
        return () => abortCont.abort()
    }, [fetchPath]);

    // console.log(enneadrinkResult)

    const [content, setContent] = useState("")

    function handleAboutClick() {
        setContent(enneadrinkResult.about)
    }

    function handleStrengthsClick() {
        setContent(enneadrinkResult.strengths)
    }
    function handleWeaknessesClick() {
        setContent(enneadrinkResult.weaknesses)
    }
    function handlePracticesClick() {
        let practicesList = enneadrinkResult.practices.map((obj) => <li className="health" key={obj.id}> {obj.title} : {obj.description} </li> )
        setContent(practicesList)
    }
    function handleLevelsClick() {
        let healthsList = enneadrinkResult.healths.map((obj) => <li className="health" key={obj.id}> Level {obj.level} : {obj.description} </li>)
        setContent(healthsList)
    }

    holdDisplay(content)

    return (
        <>
            <div className="quiz-result-top-margin">
            <Logout />
            <Link className="quiz-link" to="/home/enneadrink/quiz" > restart quiz </Link>
            {<br />}
            <Link className="quiz-link" to="/enneadrink/journal" > journal </Link>
                <h2 className="enneadrink-result"> result: {enneadrinkResult.drink} </h2>
                {<br />}
                <h3 className="enneadrink-result-title">  {enneadrinkResult.title} </h3>
                {<br />}

                <nav>
                    <NavLink className="enneadrink-nav" onClick={handleAboutClick} to="about"> About </NavLink>
                    <NavLink className="enneadrink-nav" onClick={handleStrengthsClick} to="strengths"> Strengths </NavLink>
                    <NavLink className="enneadrink-nav" onClick={handleWeaknessesClick} to="weaknesses"> Weaknesses </NavLink>
                    <NavLink className="enneadrink-nav" onClick={handlePracticesClick} to="practices"> Helpful Practices </NavLink>
                    <NavLink className="enneadrink-nav" onClick={handleLevelsClick} to="health"> Health Levels </NavLink>
                </nav>

                {<br />}
                {<br />}

                <Outlet/>

                {<br />}

                <h1 className="emoji"> {enneadrinkResult.emoji} </h1>

            </div>
        </>
    )


}

export default EnneadrinkResult;