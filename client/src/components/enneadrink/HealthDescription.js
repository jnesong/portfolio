//styling
import './enneadrink.css';

function HealthDescription({ content }) {

    let displayedContent = <ul className="healths">{content}</ul>

    return (
        <div className="description-div">
            <p className="enneadrink-index"> The Health Levels are a means of measuring our capacity to be fully present in our relationships and use our personality and
                gifts in life-giving ways. Level 1 is the healthiest, level 9 is the least. </p>
            {displayedContent}
        </div>
    )
}

export default HealthDescription