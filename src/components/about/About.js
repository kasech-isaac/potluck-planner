import React from 'react'
import nandhini from '../img/Nandhini .jpg'
import kase from '../img/kasii.jpg'
import './about.css';
import Footer from "../footer/Footer";

const About = () => {
    return (
        <>
       
        <div className="containers aboutus">
          <div className="cards">
            <img src={kase} alt="person"/>
            <div className="text">
                <h4>Kasech: Front-end Developer</h4>
                
</div>
        </div>
        <br/>


        <div className="cards">
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