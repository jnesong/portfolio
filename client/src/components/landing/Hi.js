// graphics
// import burkelake from '../graphics/burkelake.JPG'
import tree from '../graphics/tree.jpg'


function Hi() {

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
                <li> Email: jnechau@gmail.com </li>
                <li> LinkedIn: in/jenny-chau-song </li>
                <li> Blog: medium.com/@jnesong </li>
            </ul>
        </div>
    )
}

export default Hi;