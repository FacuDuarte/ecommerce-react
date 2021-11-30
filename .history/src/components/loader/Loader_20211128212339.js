import React from 'react'
import "./Loader.css"
const Loader = () => {
    return (
        <div className="Container mx-auto">
            <div className="mx-auto">
                <div className="loader"></div>
                <p className="message">Loading...</p>
            </div>
        </div>
    )
}

export default Loader
