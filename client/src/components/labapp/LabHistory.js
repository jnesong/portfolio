//libraries
import { Card } from 'semantic-ui-react';

function LabHistory( { labHistory, setLabHistory} ) {

    const historyList = labHistory.map(record => {
        function handleDeleteClick() {
            fetch(`/api/records/${record.id}`, 
            {method: "DELETE"})
            let updatedHistory = labHistory.filter(pastInput => pastInput.id !== record.id)
            setLabHistory(updatedHistory)
        }

            return <Card key={record.id}>
                <Card.Content>
                    <Card.Header> Entry ID: {record.id} </Card.Header>
                    <Card.Description> 
                    hemoglobin: {record.hemoglobin.userInput}
                    {<br />}
                    white blood cells: {record["white blood cells"].userInput}
                    {<br />}
                    sodium: {record.sodium.userInput}
                    {<br />}
                    potassium: {record.potassium.userInput}
                    {<br />}
                    calcium: {record.calcium.userInput}
                    {<br />}
                    blood glucose: {record["blood glucose"].userInput}
                    {<br />}
                    {<br />}  
                    </Card.Description>
                    <Card.Content extra>
                    <button className="ui icon button" onClick={handleDeleteClick}>
                    <i className="trash alternate outline icon"></i>
                    </button>
                </Card.Content>
                </Card.Content>
            </Card>
    })

    return (
        <>
        <p className="mono"> history </p>
        <Card.Group itemsPerRow={3}> {historyList} </Card.Group>
        </>
    )
}

export default LabHistory;