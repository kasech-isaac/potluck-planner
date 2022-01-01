import React, { useState, useEffect } from 'react'
import * as yup from "yup";
import { Route,  useHistory, useParams} from "react-router-dom";
import { axiosWithAuth } from "../../../utils/axiosWithAuth";
import {Card} from 'react-bootstrap';
 import EventCard from './EventCard'

const UpdateEvent = ({post}) => {
    const history = useHistory()
    const {id}=useParams();
    const [postData, setPostData] = useState([]);
   
   const effechfn=() =>{
        axiosWithAuth().get(`https://potluck2020.herokuapp.com/potluckList`)
        .then(res=>{
            setPostData(res.data)
            console.log("result",res)
        })
        .catch(err=> console.log("error",err))
   }
useEffect(effechfn, []);





    return (
   <div className="newEvent">
      {postData.map(post => (
        <EventCard key={post.id} post={post} />
      ))}
      <br/>
         <button onClick={() => history.push("/newevent")}>create event</button>

    </div>
    )
}

export default UpdateEvent