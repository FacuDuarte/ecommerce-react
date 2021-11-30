import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import "./Footer.css"

const Footer = () => {
    return (
        <div className="bgFooter">
           
                <FontAwesomeIcon href="https://www.instagram.com/" target="_blank" className="iconsFooter" rel="noreferrer" icon={faInstagram} />
           
                <FontAwesomeIcon href="https://www.youtube.com/" target="_blank" className="iconsFooter" rel="noreferrer" icon={faFacebook} />

 
                <FontAwesomeIcon href="https://twitter.com/" target="_blank" className="iconsFooter" rel="noreferrer" icon={faTwitter} />
            <p className="textFooter">Todos los derechos reservados ©</p>
        </div>
    )
}

export default Footer
