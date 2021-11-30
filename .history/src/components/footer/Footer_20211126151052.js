import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import "./Footer.css"

const Footer = () => {
    return (
        <div className="bgFooter">
            <a href="https://www.instagram.com/" target="_blank" className="iconsFooter" rel="noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.youtube.com/" target="_blank" className="iconsFooter" rel="noreferrer">
                <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://twitter.com/" target="_blank" className="iconsFooter" rel="noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
            </a>
            <p className="textFooter">Todos los derechos reservados ©</p>
        </div>
    )
}

export default Footer
