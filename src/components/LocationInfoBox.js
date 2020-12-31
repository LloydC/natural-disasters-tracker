import React from 'react'

const LocationInfoBox = ({ info }) => {
    return (
        <div className="location-info">
            <h2>Disaster Information</h2>
            <ul>
                <li>TITLE: <strong>{info.title}</strong></li>
            </ul>
        </div>
    )
}

export default LocationInfoBox;
