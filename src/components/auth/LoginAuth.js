import React, { useState ,useEffect} from 'react'
import './loginauth.css';
import Footer from "../footer/Footer";
import axios from 'axios'
import * as yup from "yup";
import { Route,  useHistory} from "react-router-dom";


const formSchema = yup.object().shape({
    emailId: yup.string().email("Must be a valid email address.").required("Must include email address."),
    password: yup.string().required("Password is Required"),
});
const LoginAuth = () => {
const history = useHistory();
    const [formState, setFormState] = useState({
        emailId: "",
        password:""
  });

    const [errors, setErrors] = useState({
         
        emailId: "",
        password:""
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);

    useEffect(() => {
    formSchema.isValid(formState).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [formState]);


  const formSubmit = e => {
      console.log(formSubmit)
    e.preventDefault();
      axios.post('https://potluck2020.herokuapp.com/login',formState)
        .then((response) => {
        localStorage.setItem('token', response.data.token)

        console.log('token.login',response)
      history.push("/dashboard")
    })  
    .catch(err=>{
            console.log("Error message",err)

        })   
  
  };


  const validateChange = e => {
    // Reach will allow us to "reach" into the schema and test only one part.
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then(valid => {
        setErrors({
          ...errors,
          [e.target.name]: ""
        });
      })
      .catch(err => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0]
        });
      });
  };


  const inputChange = e => {
    e.persist();
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,});
    validateChange(e);
  };





    return (
        <Route> 
    <form className='add-form' onSubmit={formSubmit}>
    <h3>Welcome Back!</h3>
    <div className='form-control'>
    
    <div className='form-control'>
      <label htmlFor='email'>
        Email
        <input
          type='text'
          data-cy="emailId"
          name='emailId'
          value={formState.emailId}
          onChange={inputChange}
        />
        {errors.emailId.length > 0 ? (
          <p className='error'>{errors.emailId}</p>
        ) : null}
      </label>

  <label htmlFor='password'>
        Password
        <input
        
          type='password'
          data-cy="password"
          name='password'
          value={formState.password}
          onChange={inputChange}
        />
        {errors.password.length > 0 ? (
          <p className='error'>{errors.password}</p>
        ) : null}
      </label>
     </div>
      <button data-cy="submit"> Login </button>
     
    <div className="click" onClick={() => history.push("/signup")}>Register</div> 
 </div>
    </form>
    
    <Footer/>
</Route>

    )
}

export default LoginAuth
