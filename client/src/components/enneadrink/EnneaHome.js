//libraries
import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
//components
import DrinkNavBar from './DrinkNavBar';
import Logon from './user/Logon';

function EnneaHome() {

    const [buttonPortfolioDisplay, setButtonPortfolioDisplay] = useState("Return to Portfolio");
    const navigate = useNavigate();
    function handleReturnToPortfolio() {
        setButtonPortfolioDisplay("thank you for visiting!");
        setTimeout(() => { navigate("/projects") }, 500);
      }    

    return (
        <>
            <button className="portfolio-button" onClick={handleReturnToPortfolio}> {buttonPortfolioDisplay} </button>

            {<br />}
            <DrinkNavBar />

            {<br />}
            {<br />}

            <Outlet />

            {<br />}
            {<br />}
            {<br />}
            {<br />}
            {<br />}
            {<br />}
            {<br />}
            {<br />}
            {<br />}

            <Logon />
        </>
    )
}

export default EnneaHome;