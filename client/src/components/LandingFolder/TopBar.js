import FakeResume from './FakeResume.pdf';

function TopBar() {

    return (
        <div className="TopBar">
            <a className="Resume" target="_blank" rel="noopener noreferrer" href={FakeResume}> Download Resume </a>
        </div>
    );

}

export default TopBar;