import React from 'react'
import nandhini from '../img/Nandhini .jpg'
import kase from '../img/kasii.jpg'
import './about.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faGithub} from "@fortawesome/free-brands-svg-icons"

const About = () => {
    return (
< div className='aboutus'>
        <div className="item-card cardEffect">
        <img className="item-list-image" src={kase} alt={'kase'} />
        <p><br />Kasech Isaac <br/>Frontend Developer</p>
        <div className='social'>
        <a href="https://www.linkedin.com/in/kasech-isaac" className='instagram social'><FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a> 
        <a href="https://www.linkedin.com/in/kasech-isaac" className='instagram social'><FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        </div>
      </div>
      <div className="item-card cardEffect">
        <img className="item-list-image" src={nandhini} alt={'nandhini'} />
        <p><br />Nandhini Devi Madan<br/> Backend Developer</p>
        <div className='socialtwo'>
        <a href="https://www.linkedin.com/in/nandhinimadan/" className='instagram social'><FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://github.com/Nandhini-Madan"><FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        </div>
      </div>

      </div>

    )
}

export default About
