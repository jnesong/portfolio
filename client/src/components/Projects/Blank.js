import { useParams } from 'react-router-dom';

function Blank () {

    let { project } = useParams();


    return (
        <h1 className="placeholder">
        {project} project placeholder
        </h1>
    )

}

export default Blank