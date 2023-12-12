import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserSettings = ({user}) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      alert("LogIn/SignUp First");
      navigate("/");
    }
  }, [user, navigate]);


  // State for personal information changes
  const [personalInfo, setPersonalInfo] = useState({
    fname: '',
    lname: '',
    email: '',
  });

  // State for password changes
  const [passwords, setPasswords] = useState({
    oldPassword: '',
    password: '',
    confirmPassword: '',
  });

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords({ ...passwords, [name]: value });
  };

  // API call stubs
  // const updatePersonalInfo = () => {
  //   if (window.confirm('Are you sure you want to update your personal information?')) {
  //     // Placeholder for an API call
  //     console.log('Personal information updated:', personalInfo);
  //     // TODO: Implement the actual API call
  //   }
  // };
  const updatePersonalInfo = () => {
    if (window.confirm('Are you sure you want to update your personal information?')) {
      axios.patch('https://localhost:5000/user/update', personalInfo)
        .then(response => {
          // Handle success
          console.log('Personal information updated:', response.data);
          alert('Your personal information has been updated successfully.');
        })
        .catch(error => {
          // Handle error
          console.error('Error updating personal information', error);
          alert('There was an error updating your personal information.');
        });
    }
  };

  // const updatePassword = () => {
  //   if (passwords.newPassword !== passwords.confirmPassword) {
  //     alert('New passwords do not match.');
  //     return;
  //   }
  //   if (window.confirm('Are you sure you want to change your password?')) {
  //     // Placeholder for an API call
  //     console.log('Password updated:', passwords);
  //     // TODO: Implement the actual API call
  //   }
  // };
  const updatePassword = () => {
    if (passwords.newPassword !== passwords.confirmPassword) {
      alert('New passwords do not match.');
      return;
    }
    if (window.confirm('Are you sure you want to change your password?')) {
      // Here we use axios to send a PATCH request
      axios.patch('https://localhost:5000/user/updatePassword', {
        oldPassword: passwords.oldPassword,
        newPassword: passwords.newPassword
      })
      .then(response => {
        // Handle success
        console.log('Password updated successfully', response.data);
        alert('Your password has been changed successfully.');
      })
      .catch(error => {
        // Handle error
        console.error('Error updating password', error);
        alert('There was an error updating your password.');
      });
    }
  };

  const deleteAccount = () => {
    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      // Placeholder for an API call
      console.log('Account deletion requested');
      // TODO: Implement the actual API call
      navigate('/'); // Redirect to home page or sign-in page after account deletion
    }
  };

  return (
    <div className="user-settings-page">
      <h2>User Settings</h2>

      {/* Section for personal information changes */}
      <div className="personal-info-section">
        <h3>Change Personal Information</h3>
        <input
          type="text"
          name="firstName"
          value={personalInfo.firstName}
          onChange={handlePersonalInfoChange}
          placeholder="First Name"
        />
        <input
          type="text"
          name="lastName"
          value={personalInfo.lastName}
          onChange={handlePersonalInfoChange}
          placeholder="Last Name"
        />
        <input
          type="email"
          name="email"
          value={personalInfo.email}
          onChange={handlePersonalInfoChange}
          placeholder="Email Address"
        />
        <button onClick={updatePersonalInfo}>Update Information</button>
      </div>

      {/* Section for password changes */}
      <div className="password-section">
        <h3>Change Password</h3>
        <input
          type="password"
          name="oldPassword"
          value={passwords.oldPassword}
          onChange={handlePasswordChange}
          placeholder="Old Password"
        />
        <input
          type="password"
          name="newPassword"
          value={passwords.newPassword}
          onChange={handlePasswordChange}
          placeholder="New Password"
        />
        <input
          type="password"
          name="confirmPassword"
          value={passwords.confirmPassword}
          onChange={handlePasswordChange}
          placeholder="Confirm New Password"
        />
        <button onClick={updatePassword}>Change Password</button>
      </div>

      {/* Section for account deletion */}
      <div className="delete-account-section">
        <h3>Delete Account</h3>
        <button onClick={deleteAccount} className="delete-account-button">
          Delete My Account
        </button>
      </div>
    </div>
  );
};

export default UserSettings;
