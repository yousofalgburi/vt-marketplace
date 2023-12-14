import{ useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import { response } from 'express';
import { deleteAuthToken } from '../token';
import '../css/UserSettings.css';

const UserSettings = ({user}) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);


  // State for personal information changes
  const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  // State for password changes
  const [passwords, setPasswords] = useState({
    oldPassword: '',
    password: '',
    confirmPassword: '',
  });

  const handlePersonalInfoChange = (event) => {
    setPersonalInfo({
      ...personalInfo,
      [event.target.name]: event.target.value
    });
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords({ ...passwords, [name]: value });
  };

  const updatePersonalInfo = () => {
    console.log('Personal information updated:', personalInfo);
    if (window.confirm('Are you sure you want to update your personal information?')) {
      axios.patch('/user/update', {
        fname: personalInfo.fname,
        lname: personalInfo.lname,
        email: personalInfo.email
      })
        .then(response => {
          // Handle success
          console.log('Personal information updated:', response.data);
          alert('Your personal information has been updated successfully.');
          window.location.reload();
        })
        .catch(error => {
          // Handle error
          console.error('Error updating personal information', error);
          alert('There was an error updating your personal information.');
        });
    }
  };

  const updatePassword = () => {
    if (passwords.password !== passwords.confirmPassword) {
      alert('New passwords do not match.');
      return;
    }
    if (window.confirm('Are you sure you want to change your password?')) {
      // Here we use axios to send a PATCH request
      axios.patch('https://localhost:5000/user/updatePassword', {
        oldPassword: passwords.oldPassword,
        password: passwords.password,
        confirmPassword: passwords.confirmPassword
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
  async function signOut() {
		deleteAuthToken()
		window.location.href = '/'
	}

  const deleteAccount = () => {
    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      axios.delete('https://localhost:5000/user/delete')
      .then ( response => {
        console.log("User Deleted succesfullly", response.data);
        alert("User has been deleted succesfully");
        signOut();
      })
      .catch(error => {
        console.error('Error deleting user', error);
        alert('There was an error deleting your account');
      })
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
          name="fname"
          value={personalInfo.fname}
          onChange={handlePersonalInfoChange}
          placeholder="First Name"
        />
        <input
          type="text"
          name="lname"
          value={personalInfo.lname}
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
          name="password"
          value={passwords.password}
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
