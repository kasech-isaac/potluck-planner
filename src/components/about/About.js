import React from 'react'
import nandhini from '../img/Nandhini .jpg'
import kase from '../img/kasii.jpg'
import './about.css';
import Footer from "../footer/Footer";

const About = () => {
    return (
        <>
        <h1>Developers</h1>
        <div className="containers aboutus">
          <div className="card">
            <img src={kase} alt="person"/>
            <div className="text">
                <h4>Kasech: Front-end Developer</h4>
                
</div>
        </div>
        <br/>


        <div className="card">
            <img src={nandhini} alt="person"/>
                <div className="text">
                <h4>Nandhini: Back-end Developer</h4>
                </div>

                </div>
            </div>
                    <br/>

            <Footer/>
</>
    
          
       
    )
}

export default About