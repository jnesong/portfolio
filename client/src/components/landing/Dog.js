//libraries
import { useState, useEffect } from 'react';
// graphics
import remus0 from './remus/remus0.png';
import remus1 from './remus/remus1.png';
import remus3 from './remus/remus3.png';
import remus4 from './remus/remus4.png';
import remus5 from './remus/remus5.png';
import remus6 from './remus/remus6.png';



function Dog() {

    const [dogPic, setDogPic] = useState(remus0)

    const remusBank = [remus0, remus1, remus3, remus4, remus5, remus6]

    useEffect(() => {

        let x = Math.floor((Math.random() * 6) + 0);
        setDogPic(remusBank[x])

    }, [])

    return (
        <div className="dog-index-div">
            <p className="dog-text"> I live in Fairfax County's suburbs with my husband and our friendly gentle giant 🐕‍🦺:</p>

            <img className="remus-pic" src={dogPic} alt="jenny's dog, at random" />
        </div>
    )
}

export default Dog;