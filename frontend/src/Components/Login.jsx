import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ handleSignIn }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    
    const navigate = useNavigate();

    // Mock user database
    const usersDatabase = [
        { username: 'test_user', password: 'password123' }
        // ... other users
    ];

    const handleSubmit = (event) => {
        event.preventDefault();
        const user = usersDatabase.find((user) => user.username === username);

        if (user && user.password === password) {
            // Perform sign-in operations
            //handleSignIn();
            navigate('/home'); // Navigate to the home page
        } else {
            setErrorMessage('Invalid username or password');
        }
    };
    
    return (
        <div className="login-container">
            <form className="form-login" onSubmit={handleSubmit}>
                <div className="user-icon"></div> <br></br>

                {errorMessage && <div className="error-message">{errorMessage}</div>}

                <div>
                <label>Username</label>
                <input 
                    type="text"
                    className="input-field"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                </div>
                
                <div>
                <label>Password</label>
                <input 
                    type="password"
                    className="input-field"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                </div>

                <button type="submit" className="button-login">Login</button>
            </form>
        </div>
    );
}

export default Login;



/*const Login = ({ signIn, closeLogin }) => {
    return (
        <div>
            <p>Login</p>
        </div>
    )

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        if (username === 'admin' && password === '123456') {
            NotificationManager.success('You Are Successfully Logged In!', '', 3000);
            signIn(true);           // update the signedIn state to true
            closeLogin(false);      // close the login popup
        } else {
            NotificationManager.error('Incorrect Username or Password!', '', 3000);
            alert('Please Enter the Correct Username and Password!');
        }
    };

    return (
        <div className="login_container" >
            <div className="login_page">
                <div className="cancel_button">
                    <Button onClick={() => closeLogin(false)}>X</Button>
                </div>
                
                <form>
                    <h2 htmlFor="username">Username</h2>

                    <input type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        username="username" id="username" name="username" />

                    <h2 htmlFor="password">Password</h2>
                    <input type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        password="password" id="password" name="password" />
                </form>

                <Button className="submit_button" onClick={handleSubmit}>
                    Submit
                </Button>
                <NotificationContainer />
            </div>
        </div>
    );
};*/