import React from 'react'
import "./Loader.css"
const Loader = () => {
    return (
        <div className="Container">
            <div >
                <div className="loader"></div>
                <p className="message">Loading...</p>
            </div>
        </div>
    )
}

export default Loader
