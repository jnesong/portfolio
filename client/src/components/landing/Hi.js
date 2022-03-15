// graphics
// import burkelake from '../graphics/burkelake.JPG'
import tree from '../graphics/tree.jpg'


function Hi() {

    let blogLink = <a target="_blank" rel="noopener noreferrer" href={'https://medium.com/@jnesong'}>
        medium.com/@jnesong
    </a>

    let linkedInLink = <a target="_blank" rel="noopener noreferrer" href={'https://www.linkedin.com/in/jenny-chau-song/'}>
        in/jenny-chau-song
    </a>

    let emailLink = <a href={'mailto:jnechau@gmail.com"'}>
        jnechau@gmail.com
    </a>


    return (
        <div id="hi-div">
            <img className="hi-image" src={tree} alt="jenny at lake" />

            <p className="hi">
                Hi, I'm Jenny, a fullstack software developer,
                born, raised, and living in Northern Virginia's Fairfax County.
            </p>
            <p className="thankyou">
                Thank you for checking out my portfolio!

            </p>
            <ul className="hi-list">
                <li> Email: {emailLink} </li>
                <li> LinkedIn: {linkedInLink} </li>
                <li> Blog: {blogLink} </li>
            </ul>
        </div>
    )
}

export default Hi;