//libraries
import { useState, useEffect } from 'react';
import { NavLink, Link, Outlet } from 'react-router-dom';
//components
import Logout from '../Logout';
//styling
import './journal.css';

function Journal() {

    const [user, setUser] = useState({});


    useEffect(() => {
        fetch("/api/me")
            .then((response) => {
                if (response.ok) {
                    response.json().then((user) => setUser(user));
                }
            });
    }, []);


    return (
        <>
            <Logout />
            <Link className="quiz-link" to="/home/quiz"> Quiz </Link>
            <p> {user.displayname}'s journal </p>
            <nav>
                <NavLink className="journal-nav" to="new"> New Entry </NavLink>
                <NavLink className="journal-nav" to="history"> History </NavLink>
            </nav>

            {<br />}
            {<br />}
            {<br />}
            {<br />}

            <Outlet />
        </>
    )

}

export default Journal;