//libraries
import { useState, useEffect } from 'react';
// graphics
import remus0 from './remus/remus0.png';
import remus1 from './remus/remus1.png';


function Dog() {

    const [dogPic, setDogPic] = useState(remus0)

    const remusBank = [remus0, remus1, remus0, remus1]

    useEffect(() => {

        let x = Math.floor((Math.random() * 4) + 0);
        setDogPic(remusBank[x])

    }, [])

    return (
        <>
            <img className="remus-pic" src={dogPic} alt="jenny's dog"/>
        </>
    )
}

export default Dog;