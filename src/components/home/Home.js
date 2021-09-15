import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './home.css';
import img5 from '../img/img5.jpg'
import Footer from '../footer/Footer'
import img3 from '../img/img3.jpeg'
import img2 from '../img/img2.jpg'
import img4 from '../img/img4.jpg'


const Home = () => {
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
            <h2 className="featurette-heading">potluck is awsome<span className="text-muted"> more info will be coming soon</span></h2>
            <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
            <button className="lead">how is potluck saves time</button>

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
            <h2 className="featurette-heading">Potluck will help you same Time<span className="text-muted"> why cook all by yourself</span></h2>
            <button className="lead">how is potluck saves time</button>
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