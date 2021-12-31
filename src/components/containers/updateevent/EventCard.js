import React, { useState, useEffect } from 'react'
import * as yup from "yup";
import { Route, useParams, useHistory} from "react-router-dom";
import { axiosWithAuth } from "../../../utils/axiosWithAuth";
import UpdateEvent from './UpdateEvent'
import {Card,Button} from 'react-bootstrap'


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
    <Card className="text-center">
  <Card.Header>Your Upcoming Event</Card.Header>
  <Card.Body>
    <Card.Title>{post.potluckName}</Card.Title>
    <Card.Text>Date: {post.date}</Card.Text>
<Card.Text>Time: {post.time}</Card.Text>
<Card.Text>Location: {post.location} </Card.Text>
<Card.Text>Food: {post.foodItems}</Card.Text>
<Card.Text>Planner note: {post.notes}</Card.Text>
    <Button variant="primary"onClick={editClass.bind(this, post.potluckId)}>Edit</Button>
    <strong> or </strong>
    <Button variant="primary"onClick={deletePotluck.bind(this, post.potluckId)}>Delete</Button>

  </Card.Body>
</Card>
       
    )
}

export default EventCard