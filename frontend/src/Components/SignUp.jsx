import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setAuthToken } from '../token.js';
function SignUp() {
    // State variables
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState({ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' });
    const navigate = useNavigate();

    // Validate form fields
    const validate = () => {
        let isValid = true;
        let errors = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

        // Validate first name
        if (firstName.length < 2) {
            errors.firstName = 'First name is too short.';
            isValid = false;
        }

        // Validate last name
        if (lastName.length < 2) {
            errors.lastName = 'Last name is too short.';
            isValid = false;
        }

        // Existing validations for email and username

        // Validate passwords
        if (password.length < 6 || password.length > 40) {
            errors.password = 'The password must be between 6 and 40 characters.';
            isValid = false;
        }

        if (password !== confirmPassword) {
            errors.confirmPassword = 'Passwords do not match.';
            isValid = false;
        }

        setError(errors);
        return isValid;
    };

    async function signUP(){
        await axios.post('/user/signup', {
          email: email,
          password: password,
          fname:firstName,
          lname:lastName,
          confirmPassword:confirmPassword
        })
        .then(function (response) {
          console.log(response);
          console.log("STATUS: ", response.status);
          if(response.status ===201 ){
            setAuthToken(response.data.token);
            // navigate('/');
            window.location.href = '/';
            alert("User created successfully");
            GetCurrentUser();
          }
          
        })
        .catch(function (error) {
            if(error.response.status === 400){
                alert("User already exists");
                return;
            }
            alert("Something went wrong")
            console.log(error);
        });
    }

    async function GetCurrentUser(){
        await axios.get('/user/currentUser', {withCredentials: true})
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        const isValidForm = validate();
        
        if (isValidForm) {
            signUP();
        }
    };

    return (
        <div className="sign-up-container">
            <form className="form-sign-up" onSubmit={handleSubmit}>
                <div className="user-icon"></div> <br></br>

                <div>
                    <label>First Name</label>
                    <input 
                        type="text"
                        className="input-field"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    {error.firstName && <div className="error-message">{error.firstName}</div>}
                </div>

                <div>
                    <label>Last Name</label>
                    <input 
                        type="text"
                        className="input-field"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    {error.lastName && <div className="error-message">{error.lastName}</div>}
                </div>

                {/* Existing fields for Email and Password */}
                <div>
                    <label>Email</label>
                    <input 
                        type="email"
                        className="input-field"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {error.email && <div className="error-message">{error.email}</div>}
                </div>

                <div>
                    <label>Password</label>
                    <input 
                        type="password"
                        className="input-field"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {error.password && <div className="error-message">{error.password}</div>}
                </div>

                <div>
                    <label>Confirm Password</label>
                    <input 
                        type="password"
                        className="input-field"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {error.confirmPassword && <div className="error-message">{error.confirmPassword}</div>}
                </div>

                <button type="submit" className="button-sign-up">Sign Up</button>
                {/* {isRegistered && <div className="success-message">{successMessage}</div>} */}
            </form>
        </div>
    );
}

export default SignUp;