//styling
import './enneadrink.css';

function PracticesDescription({ content }) {

    console.log(content)

    let displayedContent = <ol className="practices">{content}</ol>

    return (
        <div className="description-div">
            {displayedContent}
        </div>
    )
}

export default PracticesDescription