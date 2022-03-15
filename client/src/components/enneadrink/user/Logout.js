//libraries
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const [buttonDisplay, setButtonDisplay] = useState("Logout");
  const [buttonPortfolioDisplay, setButtonPortfolioDisplay] = useState("Return to Portfolio");

  const navigate = useNavigate();

  function handleLogout() {
    fetch("/api/logout", {
      method: "DELETE",
    }).then(console.log("bye"))
    setButtonDisplay("bye!");
    setTimeout(() => { navigate("/enneadrink") }, 1000);
  }

  function handleReturnToPortfolio() {
    setButtonPortfolioDisplay("thank you for visiting!");
    setTimeout(() => { navigate("/projects") }, 500);
  }

  return (
    <header>
      <button className="portfolio-button" onClick={handleReturnToPortfolio}> {buttonPortfolioDisplay} </button>

      <button className="logout-button" onClick={handleLogout}> {buttonDisplay} </button>
    </header>
  );
}

export default Logout;