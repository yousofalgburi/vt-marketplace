import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function SignUp() {
    // State variables
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [error, setError] = useState({ username: '', email: '', password: '' });
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
        let errors = { username: '', email: '', password: '' };

        if (username.length < 3 || username.length > 20) {
            errors.username = 'The username must be between 3 and 20 characters.';
            isValid = false;
        }

        if (!email.includes('@') || !email.includes('.')) {
            errors.email = 'This is not a valid email.';
            isValid = false;
        } else if (checkEmailExists(email)) {
            errors.email = 'Email is already in use!';
            isValid = false;
        }

        if (password.length < 6 || password.length > 40) {
            errors.password = 'The password must be between 6 and 40 characters.';
            isValid = false;
        }

        setError(errors);
        return isValid;
    };
  
    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        const isValidForm = validate();
        
        if (isValidForm) {
            // Here, you would typically send the data to the server.
            // For this example, just set the registered state to true.
            setSuccessMessage('User registered successfully!');
            setIsRegistered(true);
            // Reset the form fields
            setUsername('');
            setEmail('');
            setPassword('');
            // Clear any previous errors
            setError({ username: '', email: '', password: '' });
            navigate('/home');
        }
    };
    
    return (
        <div className="sign-up-container">
            <form className="form-sign-up" onSubmit={handleSubmit}>
                <div className="user-icon"></div> <br></br>

                <div>
                    <label>Username</label>
                    <input 
                        type="text"
                        className="input-field"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    {error.username && <div className="error-message">{error.username}</div>}
                </div>
                
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

                <button type="submit" className="button-sign-up">Sign Up</button>
                {isRegistered && <div className="success-message">{successMessage}</div>}
            </form>
        </div>
    );
}

export default SignUp;