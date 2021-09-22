import React, { useState, useEffect } from 'react'
import axios from 'axios'
import * as yup from "yup";
import { Route,  useHistory} from "react-router-dom";

const formSchema = yup.object().shape({
  firstName: yup.string().required('First Name is a required.'),
  lastName: yup.string().required('Last Name is a required.'),
  emailId: yup
    .string()
    .email('Must be a valid email address.')
    .required('Must include email address.'),
  userType: yup.string().required('Please choose you role.'),
  password: yup.string().required('Password is Required')
})

const SignupAuth = () => {
      const history = useHistory()
  // button disabled
  const [buttonDisabled, setButtonDisabled] = useState(true)

  // managing state for our form inputs
  const [formState, setFormState] = useState({
    firstName: '',
    emailId: '',
    userType: '',
    lastName: '',
    password: ''
  })

  const [errors, setErrors] = useState({
    firstName: '',
    emailId: '',
    userType: '',
    lastName: '',
    password: ''
  })

  useEffect(
    () => {
      formSchema.isValid(formState).then(valid => {
        setButtonDisabled(!valid)
      })
    },
    [formState]
  )

  const formSubmit = e => {
    e.preventDefault()
    console.log(formSubmit)
    axios.post('https://potluck2020.herokuapp.com/register', formState)
       .then(res => {
                //After posting the data what kind of response we are getting 
                console.log(res, "signup")
                history.push('/redirect')
            })
       .catch(err => {
                console.log("Invalid register", err)
            })
    

    setFormState({
      firstName: '',
      lastName: '',
      emailId: '',
      userType: '',
      password: ''
    })
  }

  const validateChange = e => {
    // Reach will allow us to "reach" into the schema and test only one part.
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then(valid => {
        setErrors({
          ...errors,
          [e.target.name]: ''
        })
      })
      .catch(err => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0]
        })
      })
  }

  const inputChange = e => {
    console.log(e)
    e.persist()
    const newFormData = {
      ...formState,
      [e.target.name]: e.target.value
    }

    validateChange(e)
    setFormState(newFormData)
  }
    return (
       <form className="add-form" onSubmit={formSubmit}>
      <h4>Lets Get Started!</h4>
      <div className="form-control">
        <div className="form-control">
          <label htmlFor="firstName">
            First Name
            <input
              type="text"
              data-cy="firstName"
              name="firstName"
              value={formState.firstName}
              onChange={inputChange}
            />
            {errors.firstName.length > 0 ? (
              <p className="error">{errors.firstName}</p>
            ) : null}
          </label>

          {/* <div className='form-control'> */}
          <label htmlFor="lastName">
            Last Name
            <input
              type="text"
              name="lastName"
              data-cy="lastName"
              value={formState.lastName}
              onChange={inputChange}
            />
            {errors.lastName.length > 0 ? (
              <p className="error">{errors.lastName}</p>
            ) : null}
          </label>

          {/* <div className='form-control'> */}
          <label htmlFor="email">
            Email
            <input
              type="text"
              name="emailId"
              data-cy="emailId"
              value={formState.emailId}
              onChange={inputChange}
            />
            {errors.emailId.length > 0 ? (
              <p className="error">{errors.emailId}</p>
            ) : null}
          </label>

          <label htmlFor="password">
            Password
            <input
              type="password"
              name="password"
              data-cy="password"
              value={formState.password}
              onChange={inputChange}
            />
            {errors.password.length > 0 ? (
              <p className="error">{errors.password}</p>
            ) : null}
          </label>

          <label htmlFor="userType">
            Role
            <select id="userType" name="userType" data-cy="userType" onChange={inputChange}>
              <option value="#"></option>
              <option value="admin">admin</option>
            </select>
          </label>
        </div>

        <button data-cy="submit" disabled={buttonDisabled}>Ragister</button>
        <div className="click" onClick={() => history.push('/login')}>
          Login
        </div>
      </div>
    </form> 
    )
}

export default SignupAuth
