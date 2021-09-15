import React from 'react'
import {useHistory} from "react-router";


const Dashbord = () => {
const history = useHistory();

    return (
        <div>
            <button onClick={() => history.push("newevent")}>Create event </button>
            <button onClick={() => history.push("/updateEvent")}>Cheake upcoming event</button>

        </div>
    )
}

export default Dashbord
