//libraries
import { Card } from 'semantic-ui-react';

function Patho ( {allLabsList} ) {
    return (
        <>
        <p className="mono"> pathophysiology </p>
        <Card.Group itemsPerRow={3}> {allLabsList} </Card.Group>
        </>
    )
}

export default Patho;