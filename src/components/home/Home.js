import React from 'react'
import {Carousel,Button} from 'react-bootstrap';
import './home.css';
  import {useHistory} from "react-router";
import img5 from '../img/img5.jpg'
import Footer from '../footer/Footer'
import img3 from '../img/img3.jpeg'
import img2 from '../img/img2.jpg'
import img4 from '../img/img4.jpg'


const Home = () => {
const history = useHistory();
    return (
       <>
         
            <Carousel>
           
        <Carousel.Item>
            <img className="a-block w-100" src={img4}   alt="img4"/>
          <Carousel.Caption>
            <h2>Try diffrent culture Food</h2>
            <p>Potluck help us learn aboth other country food culture.</p>
             <br/>
          </Carousel.Caption>
        </Carousel.Item>

            <Carousel.Item>
            <img  className="a-block w-100" src={img2}  alt="img2"/>
              <Carousel.Caption>
            <h2>Create memory with <br/>the people you love and enjoy.</h2>
            <p>Potluck is morethan just eating</p>
            <br/>
          </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img className="a-block w-100" src={img3}   alt="img3"/>
              <Carousel.Caption>
            <h3>Whu cook the whole thing and be stress</h3>
            <p>One persone cooking for so many people is stressfull and not enjoyable.</p>
          <br/>
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