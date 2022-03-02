//libraries
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
//components
import QuizBank from './QuizBank';
//styling
import './quiz.css';

function Quiz (){

    let navigate = useNavigate();
    const [currentQ, setCurrentQ] = useState("")

    useEffect( () => {
        setCurrentQ(QuizBank[0])
    }, [])

    function handleClickA (){
        console.log("a clicked")
        const nextQ = QuizBank.find(question => question.id === currentQ.idNextQuestionA)
        if (nextQ) {setCurrentQ(nextQ)}
        else {navigate(`/result/${currentQ.drinkResultA}`)}
    }

    function handleClickB (){
        console.log("b clicked")
        const nextQ = QuizBank.find(question => question.id === currentQ.idNextQuestionB)
        if (nextQ) {setCurrentQ(nextQ)}
        else {navigate(`/result/${currentQ.drinkResultB}`)}
    }

    return (
        <>
        <p> {currentQ.question} </p>

        <button className="quiz-button" onClick={handleClickA}> {currentQ.answerA} </button>

        <button className="quiz-button" onClick={handleClickB}> {currentQ.answerB} </button>

        {<br />}
        {<br />}

        <Link className="quiz-link" to="/home/quiz" onClick={() => window.location.reload()}> restart quiz </Link>

        </>

    )
}

export default Quiz