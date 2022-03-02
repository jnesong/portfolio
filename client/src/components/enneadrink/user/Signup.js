//libraries
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup({ }) {
    const [user, setUser] = useState(null);
    const [buttonDisplay, setButtonDisplay] = useState("Signup");

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        displayname: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    function handleSubmit(e) {
        e.preventDefault()
        fetch("/api/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
        }).then(response => {
            if (response.ok) {
                response.json().then((user) => setUser(user));
                setButtonDisplay("✔ signup confirmed, thank you!");
                setTimeout(() => { navigate("/home") }, 900);
            } else {
                response.json().then((errors) => {
                    console.error(errors);
                    setButtonDisplay(errors[0] + ", please try again.");
                });
            }
        })
            .catch(err => { console.log(err.message) });
    };

    console.log(user)

    return (
        <div className="login">

            <p className="fade-logon"> Welcome New User! </p>

            <form onSubmit={handleSubmit} className="fade-logon">
                <div>

                    <label htmlFor="username" />
                    <input
                        className="input-login"
                        type="text"
                        placeholder="enter username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />

                    <label htmlFor="display-name" />
                    <input
                        className="input-login"
                        type="text"
                        placeholder="enter display name"
                        name="displayname"
                        value={formData.displayname}
                        onChange={handleChange}
                    />

                    <label htmlFor="password" />
                    <input
                        className="input-login"
                        type="password"
                        placeholder="enter password"
                        name="password"
                        autoComplete="off"
                        value={formData.password}
                        onChange={handleChange}
                    />

                    <button className="logon-button" type="submit"> {buttonDisplay} </button>

                </div>

            </form>

        </div>
    );
}

export default Signup;