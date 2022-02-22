import FakeResume from './FakeResume.pdf';

function TopBar() {

    return (
        <div className="TopBar">
            <a className="Resume" target="_blank" rel="noopener noreferrer" href={FakeResume}> RESUME </a>
        </div>
    );

}

export default TopBar;