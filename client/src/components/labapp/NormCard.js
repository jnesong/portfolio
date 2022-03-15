//libraries
import { Card } from 'semantic-ui-react';

function NormCard ({ lab }) {

  return (
    <Card>
      <Card.Content>
        <Card.Header>{lab.title} {lab.id}</Card.Header>
        <Card.Meta>{lab.min} - {lab.max} {lab.unit}</Card.Meta>
        <Card.Description>
          <strong> Pathophysiology:  </strong>
          {<br />}
          {lab.patho}
          {<br />}
        </Card.Description>
      </Card.Content>
    </Card>
  )
}

export default NormCard