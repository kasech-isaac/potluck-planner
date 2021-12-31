import React from 'react'
import { useHistory } from 'react-router-dom'
import Footer from "../footer/Footer";

const SignupRedirect = () => {
          const history = useHistory()
    return (
		<>
        <div className="logindiv">
			<div className="loginContainer">
				<div className="redirectConfirm">
				<h1 className="loginTitle"> Thank you for signing up!</h1>
			    <div className="click" onClick={() => history.push('/login')}> Please Login</div>
            </div>
			</div>
		</div>
		<Footer/>
		</>
    )
}

export default SignupRedirect
