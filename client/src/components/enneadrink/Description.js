//styling
import './enneadrink.css';

function Description( {content} ) {

    let displayedContent = <p className="description-p">{content}</p>

    return (
        <div className="description-div" >
            {displayedContent}
        </div>
    )
}

export default Description