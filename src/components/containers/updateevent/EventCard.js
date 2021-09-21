import React, { useState, useEffect } from 'react'
import * as yup from "yup";
import { Route, useParams, useHistory} from "react-router-dom";
import { axiosWithAuth } from "../../../utils/axiosWithAuth";
import UpdateEvent from './UpdateEvent'


const EventCard = ({post}) => {
        const history = useHistory()

    
const deletePotluck=(id)=>{
   axiosWithAuth().delete(`https://potluck2020.herokuapp.com/${id}/deletePotluck`)
   .then(res=>{
     history.push('/newevent')
   })
   .catch(
     err => {
       console.log("err", err)
     }
   )
}
      const editClass = (id) => {
        console.log("edit class", id)
        history.push(`/${id}/editPotluck`)

    }
    return (
       <>
      <div className="film-list">
      <h2>{post.potluckName}</h2>
      <div className="bottom">
      <p>Date: {post.date}</p>
    <p>Time: {post.time}</p>
      <p>Location: {post.location} </p>
        <p>Food to bring: {post.foodItems}</p>
        <p>Planner note: {post.notes} </p>
        <button onClick={editClass.bind(this, post.potluckId)}>Edit</button> 
        <strong> or </strong>
        <button onClick={deletePotluck.bind(this, post.potluckId)}>del</button> 
      </div>
    </div>
       </>
    )
}

export default EventCard
