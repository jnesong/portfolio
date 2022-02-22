import TopBar from './TopBar';
import smoke from '../doodles/smoke.gif';
import cup from '../doodles/cup.png';
import jenny from '../doodles/jenny.png';
import scroll from '../doodles/scroll.png';
import './landing.css';
import './landingcup.css';

function Landing () {

    return (
        <>

        <TopBar />
        <div className="container">
            <img className="smoke" src={smoke} alt="smoke gif" />
            <img className="cup" src={cup} alt="cup png" />
            <img className="jenny" src={jenny} alt="jenny png" />
            <img className="scroll" src={scroll} alt="scroll png" />
        </div>
        
        </>
    );

}

export default Landing;