//styling
import './enneadrink.css';

function HealthDescription({ content }) {

    console.log(content)

    let displayedContent = <ul className="healths">{content}</ul>

    return (
        <div className="description-div">
            <p className="enneadrink-index"> The Levels of Health are a means of measuring our capacity to be fully present in our relationships and use our personality and
                gifts in life-giving ways. </p>
            {displayedContent}
        </div>
    )
}

export default HealthDescription