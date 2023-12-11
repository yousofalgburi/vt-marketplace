import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import setAuthToken from '../token';

function SignUp() {
    // State variables
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [error, setError] = useState({ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' });
    const [isRegistered, setIsRegistered] = useState(false);
    const navigate = useNavigate();

    // Mock function to simulate email check
    const checkEmailExists = (email) => {
        // This should be replaced with an actual API call
        return email === 'zkoder@bezkoder.com';
    };

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

    async function SignUP(){
        await axios.post('/user/signup', {
          email: email,
          password: password,
          fname:firstName,
          lname:lastName,
          confirmPassword:confirmPassword
        })
        .then(function (response) {
          console.log(response);
          setAuthToken(response.data.token);
          GetCurrentUser();
        })
        .catch(function (error) {
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
            // Process the form submission
            setSuccessMessage('User registered successfully!');
            setIsRegistered(true);
            // Reset the form fields
            setFirstName('');
            setLastName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            setError({ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' });
            SignUP();
            navigate('/home');
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
                {isRegistered && <div className="success-message">{successMessage}</div>}
            </form>
        </div>
    );
}

export default SignUp;
