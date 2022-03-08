//libraries
import { Card } from "semantic-ui-react";

function NormVSAbnormResults({ abnormalLabList, normalLabList, unenteredLabList }) {

    return (
        <>

            <p>abnormal results</p>
            <Card.Group itemsPerRow={3}>{abnormalLabList}</Card.Group>
            {<br />}
            <p>normal results</p>
            <Card.Group itemsPerRow={3}>{normalLabList}</Card.Group>
            {<br />}
            <p>unentered results</p>
            <Card.Group itemsPerRow={3}>{unenteredLabList}</Card.Group>


        </>
    )
}

export default NormVSAbnormResults