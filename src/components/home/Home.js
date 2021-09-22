import React from 'react'
import {Carousel,Button} from 'react-bootstrap';
import './home.css';
  import {useHistory} from "react-router";
import img5 from '../img/img5.jpg'
import Footer from '../footer/Footer'
import img8 from '../img/img8.jpg'
import img2 from '../img/img2.jpg'
import img1 from '../img/img1.jpg'
import img3 from '../img/img3.jpeg'


const Home = () => {
const history = useHistory();
    return (
       <>
         
            <Carousel>
           
        <Carousel.Item height= "300px" >
                  <img className="d-block w-100"   src={img1}   alt="img4"/>
          <Carousel.Caption className="d-md-block">
            <h2>Show your skill</h2>
          </Carousel.Caption>

        </Carousel.Item>

            <Carousel.Item>
            <img  className="a-block w-100" src={img2}  alt="img2"/>
              <Carousel.Caption>
            <h2>Create memory.</h2>
          </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
            <img className="a-block w-100" src={img8}   alt="img3"/>
              <Carousel.Caption>
          </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
            <br></br>
            <div className="header1">
                    <hr className="featurette-divider"></hr>

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">Potlucks are about sharing.</h2>
            <p className="lead">Potlucks are an important part of many communities, as a way of bringing people together and eating.</p>
            <Button className="lead" onClick={() => history.push('/signup')}>Start Today</Button>

          </div>
          <div className="col-md-5">
            <img src={img5} className="img-thumbnail"alt="..." />
</div>

        </div>
         <br></br>
            <hr className="featurette-divider"></hr>


        <div className="row featurette">
        <div className="col-md-5">
            <img src={img3} className="img-thumbnail" alt="..." />

          </div>
          <div className="col-md-7">
            <h2 className="featurette-heading">A potluck is a great way to learn about other people Culture.</h2>
            <Button className="lead" onClick={() => history.push('/signup')}>Start Today</Button>
          </div>
          </div>
                <hr className="featurette-divider"></hr>

        </div>
 
  <hr className="featurette-divider"></hr>
  <div className="footer">
    <p> &#169;2021potluckplanner</p>
    </div>
        </>
    )
}

export default Home
// /Users/kasechisaac/potluck-planner/src/home/Home.js