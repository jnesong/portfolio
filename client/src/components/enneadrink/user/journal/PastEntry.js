//libraries
import { useState } from 'react';
import { Button, Modal } from 'semantic-ui-react'
//components
import EditEntry from './EditEntry'
//styling
import './journal.css';

function PastEntry({ journey, holdDeletedID, holdEdit }) {

    const [isOpen, setIsOpen] = useState(false);

    function handleDeleteClick() {
        fetch(`/api/journeys/${journey.id}`, {
            method: "DELETE"
        })
        holdDeletedID(journey.id)
    }

    const [open, setOpen] = useState(false)
    const style ={
        border: 'none',
        background: 'transparent',
        fontSize: '18px',
        fontFamily: 'Optima',
        fontWeight: 'normal',
        letterSpacing: '2px',
    }

    return (
        <>
            <button className="toggle" onClick={() => setIsOpen(!isOpen)}> {journey.date} - {journey.drink} </button>
            {isOpen && <div className="past-entry">
                {journey.entry}
                {<br />}
                <div className="past-entry-div">
                <Button style={style} icon="trash alternate outline" onClick={handleDeleteClick} />
                </div>
                <Modal
                    open={open}
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    trigger={<Button style={style}> Edit </Button>}
                    style={style}
                >
                    <EditEntry
                        setOpen={setOpen}
                        journey={journey}
                        holdEdit={holdEdit}
                    />
                </Modal>
            </div>}
        </>
    )
}

export default PastEntry