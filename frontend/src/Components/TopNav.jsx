// TopNav.js
import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import '../App.css'
// import vtLogo from '../assets/vtNew.png'
import vtLogo from '../assets/hokie-bird.png'
import { deleteAuthToken } from '../token'

// const TopNav = ({  isLoggedIn, handleAuthAction }) => {
const TopNav = ({ user }) => {
	useEffect(() => {
		console.log(user)
	}, [])
	const navigate = useNavigate()

	// Function to handle login/logout actions
	const onAuthClick = () => {
		if (isLoggedIn) {
			// If the user is logged in, perform logout operations
			handleAuthAction('logout')
			navigate('/home') // Redirect to home after logout
		} else {
			// If the user is not logged in, redirect to the sign in page
			navigate('/login')
		}
	}
	async function signOut() {
		deleteAuthToken()
		window.location.href = '/'
	}

	// Function to navigate to sign up page
	const onSignUpClick = () => {
		navigate('/signup')
	}
	const onSignInClick = () => {
		navigate('/login')
	}

	const goToMarketplace = () => {
		navigate('/items')
	}
  const goToUserPage = () => {
		navigate('/user_page')
	}
	return (
		<div className='App'>
			<nav className='topnav'>
				<div className='nav-content'>
					<img src={vtLogo} alt='VT Logo' className='vt-logo' />
					<NavLink to='/home' activeClassName='active'>
						Home
					</NavLink>
					<NavLink to='/blog' activeClassName='active'>
						Blog
					</NavLink>
					<NavLink to='/buying' activeClassName='active'>
						Buying
					</NavLink>
					{user && (
						<NavLink to='/sell_page' activeClassName='active'>
							Selling
						</NavLink>
					)}
					<NavLink to='/securitas' activeClassName='active'>
						Trust & Safety
					</NavLink>
				</div>

				<div className='auth-buttons'>
					{user && (
						<button onClick={goToMarketplace}>
							GO TO MARKETPLACE
						</button>
					)}
          {user && (
            <button onClick={goToUserPage}>{user.fname}</button>
          )}

					{user ? (
						<button className='auth-button' onClick={signOut}>
							Log Out
						</button>
					) : (
						<>
							<button className='auth-button' onClick={onSignUpClick}>
								Sign Up
							</button>
							<button className='auth-button' onClick={onSignInClick}>
								Sign In
							</button>
						</>
					)}
				</div>
			</nav>
		</div>
	)
}



export default TopNav
