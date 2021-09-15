import React, { useState, useEffect } from 'react'
import * as yup from "yup";
import { Route,  useHistory} from "react-router-dom";
import { axiosWithAuth } from "../../../utils/axiosWithAuth";
 
const formSchema = yup.object().shape({
  potluckName: yup.string().required('required.'),
  date: yup.string().required('required.'),
time: yup.string().required('required.'),
  location: yup.string().required('required.'),
  foodItems: yup.string().required('required.'),
notes: yup.string().required('required.'),

})
const CreateEvent = () => {
    const history = useHistory()
    const [postData, setPostData] = useState({potluckName: '', date: '', time: '', location: '',foodItems:'', notes:'' });
    const [buttonDisabled, setButtonDisabled] = useState(true)

  const [errors, setErrors] = useState({potluckName: '', date: '', time: '', location: '',foodItems:'', notes:'' })

    useEffect(() => {
    formSchema.isValid(postData).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [postData]);


  const formSubmit= (e) =>{
    e.preventDefault(); 
            axiosWithAuth().post("https://potluck2020.herokuapp.com/addPotluck", postData)
            .then(res => {
                console.log("Result", res)
                history.push("/updateEvent")
            })
            .catch(err => {
                console.log("error", err)
            })   
    setPostData({  potluckName: '', date: '', time: '', location: '', fooditem:'', notes:'' });
      
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


    return (
       <form className="add-form" onSubmit={formSubmit}>
      <h4>create your potluck</h4>
      <div className="form-control">
        <div className="form-control">
          <label htmlFor="firstName">
            Potluck Name
            <input
              type="text"
              name="potluckName"
              value={postData.potluckName} 
              onChange={(e) => setPostData({ ...postData, potluckName: e.target.value})}
            />
            {errors.potluckName.length > 0 ? (
              <p className="error">{errors.potluckName}</p>
            ) : null}
          </label>

          {/* <div className='form-control'> */}
          <label htmlFor="lastName">
           date
            <input
              type="date"
              name="date"
              value={postData.date} 
              onChange={(e) => setPostData({ ...postData, date: e.target.value })}
            />
            {errors.date.length > 0 ? (
              <p className="error">{errors.lastName}</p>
            ) : null}
          </label>

          {/* <div className='form-control'> */}
          <label htmlFor="email">
            time
            <input
              type="time"
              name="time"
              value={postData.time} 
              onChange={(e) => setPostData({ ...postData, time: e.target.value })}
            />
            {errors.time.length > 0 ? (
              <p className="error">{errors.time}</p>
            ) : null}
          </label>

          <label htmlFor="password">
            location
            <input
              type="text"
              name="location"
              value={postData.location} 
              onChange={(e) => setPostData({ ...postData, location: e.target.value })}
            />
            {errors.location.length > 0 ? (
              <p className="error">{errors.location}</p>
            ) : null}
          </label>

                   <label htmlFor="password">
            foodItems
            <input
              type="text"
              name="foodItems"
              value={postData.foodItems} 
              onChange={(e) => setPostData({ ...postData, foodItems: e.target.value })}
            />
            {errors.foodItems.length > 0 ? (
              <p className="error">{errors.foodItems}</p>
            ) : null}
          </label> 
                  <label htmlFor="password">
            notes
            <input
              type="text"
              name="notes"
              value={postData.notes} 
              onChange={(e) => setPostData({ ...postData, notes: e.target.value })}
            />
            {errors.notes.length > 0 ? (
              <p className="error">{errors.notes}</p>
            ) : null}
          </label> 
        </div>

        <button type="submit">Create Event</button>
        <div className="click" onClick={() => history.push('/upcomingevent')}>
          Login
        </div>
      </div>
    </form>
    )
}

export default CreateEvent
