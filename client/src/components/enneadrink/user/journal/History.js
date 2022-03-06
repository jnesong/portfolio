//libraries
import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
//components
import PastEntry from './PastEntry';
//styling
// import 'react-calendar/dist/Calendar.css';


function History() {

    const [journalHistory, setJournalHistory] = useState([]);
    const [calDate, setCalDate] = useState(new Date())
    const [filteredHistory, setFilteredHistory] = useState([])
    const [monthTitle, setMonthTitle] = useState("")

    useEffect(() => {
        fetch("/api/journeys")
            .then(r => r.json())
            .then(data => setJournalHistory(data))
    }, [])

    function holdDeletedID(id) {
        const updatedJournalHistory = journalHistory.filter(journey => journey.id !== id)
        setJournalHistory(updatedJournalHistory)
        setFilteredHistory(updatedJournalHistory)
    }

    function holdEdit(editedJourney) {
        console.log(editedJourney)
        const updatedJournalHistory = journalHistory.map(journey => {
            if (journey.id === editedJourney.id) {
                return editedJourney
            } else {
                return journey
            }
        })
        setJournalHistory(updatedJournalHistory)
        setFilteredHistory(updatedJournalHistory)
    }

    function onChangeDate(calDate) {
        setCalDate(calDate)
    }

    useEffect(() => {
        searchHistory(calDate)
        monthDisplay(calDate)
    }, [calDate])

    function searchHistory(date) {
        const monthMap = { "0": "01", "1": "02", "2": "03", "3": "04", "4": "05", "5": "06", "6": "07", "7": "08", "8": "09", "9": "10", "10": "11", "11": "12" }
        let calMonth = monthMap[date.getMonth()]
        let calYearString = String(date).split(" ")
        let calYear = calYearString[3]
        let filteredJournal = journalHistory.filter( journey => journey.date.slice(5, 7)===calMonth && journey.date.slice(0,4)===calYear )
        setFilteredHistory(filteredJournal)
    }

    const listPastEntries = filteredHistory.map(journey => (
        <PastEntry
            key={journey.id}
            journey={journey}
            holdEdit={holdEdit}
            holdDeletedID={holdDeletedID}
        />
    ))

    function monthDisplay(date) {
        const monthDisplayMap = { "0": "January", "1": "February", "2": "March", "3": "April", "4": "May", "5": "June", "6": "July", "7": "August", "8": "September", "9": "October", "10": "November", "11": "December" }
        let month = monthDisplayMap[date.getMonth()]
        setMonthTitle(month)
    }

    return (
        <div className="history-row">

            <div className="history-column-left">
                <div id="history-calendar">
                    <Calendar onChange={onChangeDate} value={calDate} />
                </div>
            </div>
            <div className="history-column-right">
                <p className="month-title"> {monthTitle} </p>
                {listPastEntries}
            </div>
        </div>
    )
}

export default History