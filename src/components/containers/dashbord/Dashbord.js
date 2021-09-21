import React from 'react'
import {useHistory} from "react-router";
import {Modal, Button} from 'react-bootstrap';


const Dashbord = () => {
const history = useHistory();

    return (
<Modal.Dialog>
  <Modal.Header>
    <Modal.Title>What would you like to do?</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <Button variant="secondary" onClick={() => history.push("/newevent")}>Create event</Button>
    {/* <Button variant="primary">Save changes</Button> */}
  </Modal.Body>
    <Modal.Body>
    <Button variant="secondary" onClick={() => history.push("updateEvent")}>Upcoming event</Button>
   
  </Modal.Body>
</Modal.Dialog>
        // </div>
    )
}

export default Dashbord
