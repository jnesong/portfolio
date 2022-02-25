import me from '../doodles/me.png';
import remus from '../doodles/remus.png';

function JennyBlurb() {

    return (
        <div className="blurbContainer">
            <img className="me" src={me} alt="jenny smiling" />
            <p className="blurb">
            Hi! ☀️ I'm Jenny, a fullstack software developer,
            born, raised, and developing in Northern Virginia's Fairfax County. 🏡
            I live with my husband and our gentle giant Remus.  🌻🌻 🐕‍🦺 🌻🌻
            I enjoy coding 👩🏻‍💻, writing 👩🏻‍💻, reading 📖, rock climbing 🧗🏻‍♀️, and hiking 🌄. 
            Thank you for visiting my portfolio!
            </p>
            <img className="remus" src={remus} alt="jenny's dog Remus" />
        </div>
    );

}

export default JennyBlurb;