import me from '../doodles/me.png';
import remus from '../doodles/remus.png';

function JennyBlurb() {

    return (
        <>
            <img className="me" src={me} alt="jenny smiling" />

            Hi! ☀️ I'm Jenny, a fullstack software developer,
            born, raised, and rising in Northern Virginia's Fairfax County. 🏡
            I live with my husband and our gentle giant Remus.  🌻🌻 🐕‍🦺 🌻🌻
            {<br/>}
            I enjoy coding 👩🏻‍💻, writing 👩🏻‍💻, reading 📖, rock climbing 🧗🏻‍♀️, and hiking 🌄. 
            {<br/>}
            Thank you for visiting my portfolio!

            <img className="remus" src={remus} alt="jenny's dog Remus" />

        </>
    );

}

export default JennyBlurb;