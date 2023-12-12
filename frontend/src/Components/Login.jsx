import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setAuthToken } from '../token';

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
        signIn();
        // navigate('/home');
        // window.location.href = '/';
    };

    async function signIn(){
        await axios.post('/user/signin', {
          email: username,
          password: password
        })
        .then(function (response) {
          console.log(response);
          setAuthToken(response.data.token);
          GetCurrentUser();
          window.location.href = '/';
        })
        .catch(function (error) {
          console.log(error);
          alert(`Something went wrong: ${error.response.data.message}`);
        });
      }
      
      async function GetCurrentUser(){
        await axios.get('/user/currentUser', {withCredentials: true})
          .then(function (response) {
            localStorage.setItem('user', JSON.stringify(user));
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
      
    
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