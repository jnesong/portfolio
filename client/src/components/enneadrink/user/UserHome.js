//libraries
import { useState, useEffect } from 'react';
import { NavLink, Outlet } from "react-router-dom";
//components
import Logout from './Logout';
//styling
import './logon.css';

function UserHome() {

    const [user, setUser] = useState({});
    const [greetingUser, setGreetingUser] = useState("")


    useEffect(() => {
        fetch("/api/me")
            .then((response) => {
                if (response.ok) {
                    response.json().then((user) => setUser(user));
                }
            });
    }, []);

    // console.log(user)
    const date = new Date()
    const timeHr = date.getHours()
    
    useEffect ( () => {
        if (timeHr < 12 && timeHr > 3) {
            // console.log('good morning')
            setGreetingUser("Good morning")
          } else if (timeHr < 18 && timeHr > 11) {
            // console.log('good afternoon')
            setGreetingUser("Good afternoon")
          } else {
            // console.log('good evening')
            setGreetingUser("Good evening")
          }
    }, [timeHr])

    return (
        <>
            <Logout />
            {<br />}
            <h1 className="user-greeting"> {greetingUser} {user.displayname}, how are you? </h1>
            <nav id="quizNav">
            <NavLink className="user-nav" to="quiz"> Quiz </NavLink>
            <NavLink className="user-nav" to="/journal"> Skip Quiz </NavLink>
            </nav>
            <Outlet />
        </>

    )
}

export default UserHome;